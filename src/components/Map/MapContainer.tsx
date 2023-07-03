import React, {
    SetStateAction,
    Suspense,
    useEffect,
    useRef,
    useState,
} from "react";
import { Listener, Marker, NaverMap, useNavermaps } from "react-naver-maps";
import { IStores, IStore } from "@_types/store";
import { coordType } from "@_types/coord";
import { useSLInfQuery } from "@hooks/queries/useStoreList";
import styled from "styled-components";
import { ReactComponent as CenterIcon } from "@assets/icons/location-icon.svg";
import { ReactComponent as HomeIcon } from "@assets/icons/home-icon.svg";
import { ReactComponent as CloseIcon } from "@assets/icons/close-icon.svg";
import { ReactComponent as RefreshIcon } from "@assets/icons/refresh-icon.svg";
import useOverlapMarkers from "@hooks/useOverlapMarkers";
import { useNavigate } from "react-router-dom";
import MapSearchList from "./MapSearchList";
import MapSearchItem from "./MapSearchItem";
import MapSearch from "./MapSearch";
import PlaceInformation from "./PlaceInformation";
import { responseType } from "@/types/response";
import useObserver from "@/hooks/useObserver";

type coordListType = {
    coord: coordType;
    clientCoord: coordType;
    temp: coordType;
};

type MapContainerPropsType = {
    clientCoord: { lat: number; lng: number };
    coord: { lat: number; lng: number };
    markers: IStores;
    onCenterChanged: (e: naver.maps.Coord) => void;
    onZoomChanged: (e: number) => void;
    coordList: coordListType;
    setCoordList: React.Dispatch<SetStateAction<coordListType>>;
    refreshHandler: () => void;
    isChanged: boolean;
};

const MapContainer = ({
    coord,
    markers,
    onCenterChanged,
    onZoomChanged,
    clientCoord,
    coordList,
    setCoordList,
    refreshHandler,
    isChanged,
}: MapContainerPropsType) => {
    const navermap = useNavermaps();
    const ovMarkers = useOverlapMarkers(markers);
    const mapRef = useRef<naver.maps.Map>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const targetRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const nav = useNavigate();
    const [searchQuery, setSearchQuery] = useState<string>("");
    const { data, status, fetchNextPage, hasNextPage, refetch } =
        useSLInfQuery(searchQuery);
    const [observe, unobserve] = useObserver(() => {
        fetchNextPage();
    });

    const [info, setInfo] = useState<IStore>({
        _id: 0,
        name: "",
        phone: "",
        address: "",
        category: "",
    });
    const [ovPlaceList, setOvPlaceList] = useState<IStores>([]);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [HLMarker, setHLMarker] = useState<IStore | null>(null);

    useEffect(() => {
        if (searchQuery) {
            refetch({ refetchPage: (page, index) => index === 1 });
            listRef.current && (listRef.current.scrollTop = 0);
        }
    }, [searchQuery]);

    useEffect(() => {
        setOvPlaceList([]);
    }, [onCenterChanged, onZoomChanged]);

    useEffect(() => {
        targetRef.current && observe(targetRef.current);
        !hasNextPage && targetRef.current && unobserve(targetRef.current);
    }, [data]);

    useEffect(() => {
        status === "loading" && targetRef.current
            ? unobserve(targetRef.current)
            : targetRef.current && observe(targetRef.current);
    }, [status]);

    const panToCenter = () => {
        mapRef.current &&
            mapRef.current.panTo(
                new navermap.LatLng(clientCoord.lat, clientCoord.lng),
            );
    };

    const searchHandler = () => {
        const e = inputRef.current;
        if (e && e.value !== "") {
            setIsVisible(true);
            setSearchQuery(e.value);
        }
    };

    const clickHandler = (storeData: IStore) => {
        const placeCoord = {
            lat: storeData.latitude,
            lng: storeData.longitude,
        };
        if (placeCoord.lat && placeCoord.lng) {
            mapRef.current &&
                mapRef.current.panTo(
                    new navermap.LatLng(placeCoord.lat, placeCoord.lng),
                );
            setCoordList({
                ...coordList,
                coord: {
                    result: "success",
                    lat: placeCoord.lat,
                    lng: placeCoord.lng,
                },
                temp: {
                    result: "success",
                    lat: placeCoord.lat,
                    lng: placeCoord.lng,
                },
            });
        }
        setHLMarker(storeData);
        setIsVisible((prev) => !prev);
        setInfo(storeData);
    };

    return (
        <>
            <MenuContainer>
                <MenuButtonContainer>
                    <MenuButton onClick={() => nav("/")}>
                        <HomeIcon />
                    </MenuButton>
                    <MenuButton onClick={() => panToCenter()}>
                        <CenterIcon style={{ paddingTop: "3px" }} />
                    </MenuButton>
                </MenuButtonContainer>
                <MapSearch searchHandler={searchHandler} ref={inputRef} />
            </MenuContainer>
            <NaverMap
                defaultCenter={new navermap.LatLng(coord.lat, coord.lng)}
                minZoom={16}
                maxZoom={21}
                defaultZoom={17}
                onCenterChanged={onCenterChanged}
                onZoomChanged={onZoomChanged}
                ref={mapRef}
            >
                <Listener
                    type="touchend"
                    listener={() => setOvPlaceList([])}
                ></Listener>
                <Listener
                    type="mousedown"
                    listener={() => setOvPlaceList([])}
                ></Listener>
                {markers ? (
                    markers
                        .filter((store) => !ovMarkers.flat().includes(store))
                        .map((e) => {
                            if (HLMarker && HLMarker._id === e._id) return;
                            return (
                                <Marker
                                    key={e._id}
                                    position={
                                        new navermap.LatLng(
                                            Number(e.latitude),
                                            Number(e.longitude),
                                        )
                                    }
                                    onClick={() => setInfo(e)}
                                    icon={{
                                        content: `<svg height="24" version="1.1" width="32" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><g transform="translate(0 -1028.4)"><path d="m12.031 1030.4c-3.8657 0-6.9998 3.1-6.9998 7 0 1.3 0.4017 2.6 1.0938 3.7 0.0334 0.1 0.059 0.1 0.0938 0.2l4.3432 8c0.204 0.6 0.782 1.1 1.438 1.1s1.202-0.5 1.406-1.1l4.844-8.7c0.499-1 0.781-2.1 0.781-3.2 0-3.9-3.134-7-7-7zm-0.031 3.9c1.933 0 3.5 1.6 3.5 3.5 0 2-1.567 3.5-3.5 3.5s-3.5-1.5-3.5-3.5c0-1.9 1.567-3.5 3.5-3.5z" fill="#2b78c0"/><path d="m12.031 1.0312c-3.8657 0-6.9998 3.134-6.9998 7 0 1.383 0.4017 2.6648 1.0938 3.7498 0.0334 0.053 0.059 0.105 0.0938 0.157l4.3432 8.062c0.204 0.586 0.782 1.031 1.438 1.031s1.202-0.445 1.406-1.031l4.844-8.75c0.499-0.963 0.781-2.06 0.781-3.2188 0-3.866-3.134-7-7-7zm-0.031 3.9688c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5z" fill="#309adb" transform="translate(0 1028.4)"/></g></svg>`,
                                        size: new naver.maps.Size(32, 24),
                                        anchor: new naver.maps.Point(16, 24),
                                    }}
                                />
                            );
                        })
                ) : (
                    <></>
                )}
                {HLMarker && (
                    <Marker
                        position={
                            new navermap.LatLng(
                                Number(HLMarker.latitude),
                                Number(HLMarker.longitude),
                            )
                        }
                        onClick={() => setInfo(HLMarker)}
                        icon={{
                            content: `<svg height="36" version="1.1" width="48" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><g transform="translate(0 -1028.4)"><path d="m12.031 1030.4c-3.8657 0-6.9998 3.1-6.9998 7 0 1.3 0.4017 2.6 1.0938 3.7 0.0334 0.1 0.059 0.1 0.0938 0.2l4.3432 8c0.204 0.6 0.782 1.1 1.438 1.1s1.202-0.5 1.406-1.1l4.844-8.7c0.499-1 0.781-2.1 0.781-3.2 0-3.9-3.134-7-7-7zm-0.031 3.9c1.933 0 3.5 1.6 3.5 3.5 0 2-1.567 3.5-3.5 3.5s-3.5-1.5-3.5-3.5c0-1.9 1.567-3.5 3.5-3.5z" fill="#a1261d"/><path d="m12.031 1.0312c-3.8657 0-6.9998 3.134-6.9998 7 0 1.383 0.4017 2.6648 1.0938 3.7498 0.0334 0.053 0.059 0.105 0.0938 0.157l4.3432 8.062c0.204 0.586 0.782 1.031 1.438 1.031s1.202-0.445 1.406-1.031l4.844-8.75c0.499-0.963 0.781-2.06 0.781-3.2188 0-3.866-3.134-7-7-7zm-0.031 3.9688c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5z" fill="#eb4034" transform="translate(0 1028.4)"/></g></svg>`,
                            size: new naver.maps.Size(48, 36),
                            anchor: new naver.maps.Point(16, 24),
                        }}
                    />
                )}
                {ovMarkers ? (
                    ovMarkers.map((e) => (
                        <Marker
                            key={e[0]._id}
                            position={
                                new navermap.LatLng(
                                    Number(e[0].latitude),
                                    Number(e[0].longitude),
                                )
                            }
                            icon={{
                                content: `<div style="position: absolute; top: -3px; width: 10px; height: 10px; border-radius: 10px; background-color: #d55244; color: white;"></div><svg height="24" version="1.1" width="32" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><g transform="translate(0 -1028.4)"><path d="m12.031 1030.4c-3.8657 0-6.9998 3.1-6.9998 7 0 1.3 0.4017 2.6 1.0938 3.7 0.0334 0.1 0.059 0.1 0.0938 0.2l4.3432 8c0.204 0.6 0.782 1.1 1.438 1.1s1.202-0.5 1.406-1.1l4.844-8.7c0.499-1 0.781-2.1 0.781-3.2 0-3.9-3.134-7-7-7zm-0.031 3.9c1.933 0 3.5 1.6 3.5 3.5 0 2-1.567 3.5-3.5 3.5s-3.5-1.5-3.5-3.5c0-1.9 1.567-3.5 3.5-3.5z" fill="#2b78c0"/><path d="m12.031 1.0312c-3.8657 0-6.9998 3.134-6.9998 7 0 1.383 0.4017 2.6648 1.0938 3.7498 0.0334 0.053 0.059 0.105 0.0938 0.157l4.3432 8.062c0.204 0.586 0.782 1.031 1.438 1.031s1.202-0.445 1.406-1.031l4.844-8.75c0.499-0.963 0.781-2.06 0.781-3.2188 0-3.866-3.134-7-7-7zm-0.031 3.9688c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5z" fill="#309adb" transform="translate(0 1028.4)"/></g></svg>`,
                                size: new naver.maps.Size(32, 24),
                                anchor: new naver.maps.Point(16, 24),
                            }}
                            onClick={() => {
                                setOvPlaceList(e);
                            }}
                        />
                    ))
                ) : (
                    <></>
                )}

                {ovPlaceList.length > 0 && (
                    <Suspense fallback={null}>
                        <PlacesContainer>
                            <PlaceCount>
                                {ovPlaceList.length} 개의 장소
                            </PlaceCount>
                            {ovPlaceList.map((e) => (
                                <PlaceItem
                                    onClick={() => setInfo(e)}
                                    key={e._id}
                                >
                                    {e.name}
                                </PlaceItem>
                            ))}
                        </PlacesContainer>
                    </Suspense>
                )}
                <Container>
                    {isChanged && (
                        <RefreshButton
                            onClick={() => {
                                setHLMarker(null);
                                refreshHandler();
                            }}
                        >
                            <RefreshIcon width={24} />
                            <span>현 위치에서 검색</span>
                        </RefreshButton>
                    )}
                    {info._id !== 0 && (
                        <PlaceInformation
                            name={info?.name}
                            category={info?.category}
                            address={info?.address}
                            onCloseEvent={() =>
                                setInfo({
                                    _id: 0,
                                    name: "",
                                    category: "",
                                    address: "",
                                    phone: "",
                                })
                            }
                        />
                    )}

                    {status === "loading" && !data ? (
                        <></>
                    ) : (
                        <MapSearchList ref={listRef} isVisible={isVisible}>
                            <CloseButton
                                onClick={() => setIsVisible((prev) => !prev)}
                            >
                                <CloseIcon width="22" />
                            </CloseButton>
                            {data && data.pages[0].result.result.count <= 0 ? (
                                <NoResult>검색 결과가 없습니다.</NoResult>
                            ) : (
                                data &&
                                data.pages.map(
                                    (e: {
                                        nextPage: number;
                                        result: responseType;
                                    }) => {
                                        return e.result.result.rows.map(
                                            (item) => {
                                                return (
                                                    <MapSearchItem
                                                        key={item._id}
                                                        name={item.name}
                                                        category={item.category}
                                                        address={item.address}
                                                        clickHandler={() => {
                                                            setHLMarker(null);
                                                            clickHandler(item);
                                                        }}
                                                    />
                                                );
                                            },
                                        );
                                    },
                                )
                            )}
                            {data && data.pages[0].result.result.count > 0 && (
                                <div
                                    ref={targetRef}
                                    style={{
                                        width: "100%",
                                        height: "10px",
                                    }}
                                ></div>
                            )}
                        </MapSearchList>
                    )}
                </Container>
            </NaverMap>
        </>
    );
};

const MenuContainer = styled.section`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    height: auto;
    gap: 10px;
    padding: 20px 20px 0 20px;
`;

const MenuButtonContainer = styled.div`
    width: 50px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 999;
`;

const MenuButton = styled.button`
    width: 50px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50px;
    outline: none;
    border: none;
    box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.1);
    z-index: 999;
`;

const Container = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    min-height: 100px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const PlacesContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    min-width: 130px;
    height: auto;
    max-height: 270px;
    border-radius: 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-right: auto;
    top: 25%;
    background-color: white;
    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.1);
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const PlaceCount = styled.span`
    position: sticky;
    top: 0;
    width: 100%;
    padding: 10px;
    font-size: ${({ theme }) => theme.sizes.s};
    color: #ccc;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.white};
`;

const PlaceItem = styled.button`
    width: 100%;
    font-size: ${({ theme }) => theme.sizes.s};
    font-weight: 500;
    color: #222;
    text-align: left;
    outline: none;
    border: none;
    border-bottom: 1px solid #fbfbfb;
    padding: 10px;
    background-color: transparent;
    &:last-child {
        border-bottom: none;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 15px;
    width: 30px;
    height: 30px;
    outline: none;
    border: none;
    background-color: transparent;
`;

const NoResult = styled.h1`
    padding-top: 20px;
    font-size: ${({ theme }) => theme.sizes.m};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.placeholder};
    text-align: center;
`;

const RefreshButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    min-width: 150px;
    height: 50px;
    padding: 0 10px;
    background-color: ${({ theme }) => theme.colors.pageBtnActive};
    border: none;
    border-radius: 50px;
    outline: none;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    font-size: ${({ theme }) => theme.sizes.l};
    box-shadow: 0px 2px 10px -2px ${({ theme }) => theme.colors.pageBtnActive};
`;

export default MapContainer;
