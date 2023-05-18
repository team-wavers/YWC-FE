import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MapMenu from "../../components/Map/MapMenu";
import MapContainer from "../../components/Map/MapContainer";
import { Container as MapDiv } from "react-naver-maps";
import Loading from "../../components/Loading";
import { getStoreListByCoords } from "../../apis/store";
import { IStores } from "../../types/store";
import useDebounce from "../../hooks/useDebounce";

type coordsType = {
    result: string | null;
    lat: number;
    lng: number;
};

const index = () => {
    const [loading, setLoading] = useState(false);
    const [coords, setCoords] = useState<coordsType>({
        result: null,
        lat: 0,
        lng: 0,
    });
    const [storeList, setStoreList] = useState<IStores>([]);
    const [distance, setDistance] = useState(500);
    const dValue = useDebounce(coords, 250);

    useEffect(() => {
        setLoading(true);
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(
                (c) => {
                    setCoords({
                        ...coords,
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
        if (dValue.lat <= 0 || dValue.lng <= 0) return;
        getStoreListByCoords(dValue.lat, dValue.lng, distance)
            .then((res) => {
                setStoreList(res.result.rows);
            })
            .catch((e) => console.log(e));
    }, [dValue]);

    useEffect(() => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);

        window.addEventListener("resize", () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        });
    });

    const centerChangeHandler = (e: naver.maps.Coord) => {
        setCoords({ result: "success", lat: e.y, lng: e.x });
    };

    const zoomChangeHandler = (e: number) => {
        switch (e) {
            case 17:
                setDistance(500);
                return;
            case 18:
                setDistance(300);
                return;
            case 19:
                setDistance(100);
                return;
            case 20:
                setDistance(50);
                return;
            case 21:
                setDistance(25);
                return;
        }
    };

    if (loading) return <Loading />;
    return (
        <>
            <Container>
                <MapMenu />
                <MapDiv
                    style={{
                        width: "100%",
                        height: "calc(var(--vh, 1vh) * 100)",
                    }}
                    fallback={<Loading />}
                >
                    <MapContainer
                        coord={{ lat: coords.lat, lng: coords.lng }}
                        marker={storeList}
                        onCenterChanged={(e: naver.maps.Coord) =>
                            centerChangeHandler(e)
                        }
                        onZoomChanged={(e: number) => zoomChangeHandler(e)}
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

export default index;
