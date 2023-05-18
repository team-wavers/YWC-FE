import React, { useState } from "react";
import { Marker, NaverMap, useNavermaps } from "react-naver-maps";
// import styled from "styled-components";
import { IStores, IStore } from "../../../types/store";
import PlaceInformation from "../PlaceInformation";
import styled from "styled-components";

type MapContainerPropsType = {
    coord: { lat: number; lng: number };
    marker?: IStores;
    onCenterChanged: (e: naver.maps.Coord) => void;
    onZoomChanged: (e: number) => void;
    refresh: React.ReactNode;
};

const index = ({
    coord,
    marker,
    onCenterChanged,
    onZoomChanged,
    refresh,
}: MapContainerPropsType) => {
    const navermap = useNavermaps();
    const [info, setInfo] = useState<IStore>({
        _id: 0,
        name: "",
        phone: "",
        address: "",
        category: "",
    });
    const clickEventHandler = (e: IStore) => {
        setInfo(e);
    };
    return (
        <NaverMap
            defaultCenter={new navermap.LatLng(coord.lat, coord.lng)}
            minZoom={17}
            onCenterChanged={onCenterChanged}
            onZoomChanged={onZoomChanged}
        >
            {marker ? (
                marker.map((e) => (
                    <Marker
                        key={e._id}
                        position={
                            new navermap.LatLng(
                                Number(e.latitude),
                                Number(e.longitude),
                            )
                        }
                        onClick={() => clickEventHandler(e)}
                    />
                ))
            ) : (
                <></>
            )}
            <Container>
                {refresh}
                {info._id !== 0 && (
                    <>
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
                    </>
                )}
            </Container>
        </NaverMap>
    );
};

const Container = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default index;
