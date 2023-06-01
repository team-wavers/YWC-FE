import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MapContainer from "../../components/Map/MapContainer";
import { Container as MapDiv } from "react-naver-maps";
import Loading from "../../components/Loading";
import { getStoreListByCoords } from "../../apis/store";
import { IStores } from "../../types/store";
import getZoomDistance from "../../utils/zoomDistance";
import { ReactComponent as RefreshIcon } from "../../assets/icons/refresh-icon.svg";

type coordsType = {
    result: string | null;
    lat: number;
    lng: number;
};

const index = () => {
    const [coords, setCoords] = useState<coordsType>({
        result: null,
        lat: 0,
        lng: 0,
    });
    const [curCoords, setCurCoords] = useState<coordsType>({
        result: null,
        lat: 0,
        lng: 0,
    });
    const [tempCoords, setTempCoords] = useState<coordsType>({
        result: null,
        lat: 0,
        lng: 0,
    });

    const [loading, setLoading] = useState(false);
    const [storeList, setStoreList] = useState<IStores>([]);
    const [distance, setDistance] = useState(300);
    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        setLoading(true);
        if (window.navigator.geolocation) {
            alert(
                "지도 사용을 위해선 위치 수집 권한이 필요합니다. 다음에 표시되는 위치 권한 알림창에 [허용]을 눌러주세요!",
            );
            window.navigator.geolocation.getCurrentPosition(
                (c) => {
                    setCoords({
                        ...coords,
                        result: "success",
                        lat: c.coords.latitude,
                        lng: c.coords.longitude,
                    });
                    setCurCoords({
                        result: "success",
                        lat: c.coords.latitude,
                        lng: c.coords.longitude,
                    });
                    setLoading(false);
                },
                () => {
                    console.log("Error");
                    setCoords({ ...coords, result: "error", lat: -1, lng: -1 });
                    alert(
                        "위치를 받아오는 데 오류가 발생하였습니다. 위치 권한을 다시 확인 해 주세요.",
                    );
                },
            );
        } else {
            alert(
                "Geolocation API가 지원되지 않는 브라우저 입니다. 새로운 버전의 브라우저로 재접속 해주세요.",
            );
        }
    }, []);

    useEffect(() => {
        if (coords.lat <= 0 || coords.lng <= 0) return;
        getStoreListByCoords(coords.lat, coords.lng, distance)
            .then((res) => {
                setStoreList(res.result.rows);
            })
            .catch((e) => console.log(e));
    }, [coords]);

    useEffect(() => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);

        window.addEventListener("resize", () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        });
    });

    const refreshHandler = () => {
        setCoords(tempCoords);
        setIsChanged(false);
    };

    const centerChangeHandler = (e: naver.maps.Coord) => {
        if (e.y !== coords.lat && e.x !== coords.lng) {
            setIsChanged(true);
            setTempCoords({ result: "success", lat: e.y, lng: e.x });
        }
    };

    if (loading) return <Loading />;
    return (
        <>
            <Container>
                <MapDiv
                    style={{
                        width: "100%",
                        height: "calc(var(--vh, 1vh) * 100)",
                    }}
                    fallback={<Loading />}
                >
                    <MapContainer
                        curCoord={{ lat: curCoords.lat, lng: curCoords.lng }}
                        coord={{ lat: coords.lat, lng: coords.lng }}
                        markers={storeList}
                        onCenterChanged={(e: naver.maps.Coord) =>
                            centerChangeHandler(e)
                        }
                        onZoomChanged={(e: number) =>
                            setDistance(getZoomDistance(e))
                        }
                        refresh={
                            isChanged ? (
                                <RefreshButton onClick={() => refreshHandler()}>
                                    <RefreshIcon width={24} />
                                    <span>현 위치에서 검색</span>
                                </RefreshButton>
                            ) : (
                                <></>
                            )
                        }
                    />
                </MapDiv>
            </Container>
        </>
    );
};

const Container = styled.div`
    position: relative;
    width: min(480px, 100%);
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    margin: 0 auto;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.black}
    font-size: ${({ theme }) => theme.l};
    z-index: 9999;
    overflow: hidden;
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
    background-color: ${({ theme }) => theme.pageBtnActive};
    border: none;
    border-radius: 50px;
    outline: none;
    color: ${({ theme }) => theme.white};
    font-weight: 700;
    font-size: ${({ theme }) => theme.l};
    box-shadow: 0px 2px 10px -2px ${({ theme }) => theme.pageBtnActive};
`;

export default index;
