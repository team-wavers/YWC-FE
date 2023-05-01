import React from "react";
import styled from "styled-components";
// import { ReactComponent as ShopIcon } from "../../assets/icons/shop-icon.svg";

const index = () => {
    return (
        <Container>
            <PlaceGridContainer>
                <SubTitle>&#127978; 분류별 사용처</SubTitle>
                <PlaceGrid>
                    <thead>
                        <tr>
                            <PlaceTypeHead>분류</PlaceTypeHead>
                            <PlaceNameHead>사용처</PlaceNameHead>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <PlaceType>문화,여가</PlaceType>
                            <PlaceName>
                                공연 관람: 연극, 영화, 공연
                                <br />
                                전시: 미술관, 박물관, 비엔날레, 화랑
                                <br />
                                사진관
                                <br />
                                체육시설 이용: 헬스, 볼링, 수영, 요가, 필라테스,
                                에어로빅, 복싱, 탁구, 당구, 사격, 골프,
                                롤러스케이트, 승마, 스케이트, 스키, 태권도,
                                합기도, 유도, 스포츠댄스, 방송댄스
                            </PlaceName>
                        </tr>
                        <tr>
                            <PlaceType>자기계발</PlaceType>
                            <PlaceName>
                                학원수강 등 자기계발 강좌
                                <br />
                                도서: 서점, 중고서점, 신문
                                <br />
                                음악: 음반, 악기(악기소매점, 악기부속품) 구입
                            </PlaceName>
                        </tr>
                        <tr>
                            <PlaceType>관광</PlaceType>
                            <PlaceName>
                                숙박: 호텔, 리조트, 콘도, 모텔, 게스트하우스,
                                민박, 연수원
                                <br />
                                테마파크: 놀이공원, 워터파크, 아쿠아리움
                                <br />
                                체험관광: 템플스테이, 레일바이크 짚라인 등<br />
                                휴양림, 캠핑장, 야영장, 캠핑용품점
                            </PlaceName>
                        </tr>
                    </tbody>
                </PlaceGrid>
            </PlaceGridContainer>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100px;
    text-align: center;
    font-family: "OAGothic", sans-serif;
    padding: 20px;
    padding-top: 0;
    font-size: ${({ theme }) => theme.l};
    line-height: ${({ theme }) => theme.xl};
    color: ${({ theme }) => theme.black};
`;

const SubTitle = styled.h3`
    width: 160px;
    height: 45px;
    padding: 10px 0;
    padding-bottom: 0;
    text-align: left;
    font-family: "OAGothic", sans-serif;
    font-weight: 500;
    font-size: ${({ theme }) => theme.m};
`;

const PlaceGridContainer = styled.div`
    width: 100%;
    height: auto;
    padding-top: 30px;
`;

const PlaceGrid = styled.table`
    width: 100%;
    height: auto;
    border: 1px solid ${({ theme }) => theme.black};
    background-color: ${({ theme }) => theme.white};
`;

const PlaceTypeHead = styled.th`
    width: 30%;
    height: 30px;
    border: 1px solid ${({ theme }) => theme.black};
    font-size: ${({ theme }) => theme.m};
    background-color: ${({ theme }) => theme.pageBtnActive};
`;

const PlaceNameHead = styled.th`
    width: 70%;
    height: 30px;
    border: 1px solid ${({ theme }) => theme.black};
    font-size: ${({ theme }) => theme.m};
    background-color: ${({ theme }) => theme.pageBtnActive};
`;

const PlaceType = styled.td`
    font-size ${({ theme }) => theme.m}; 
    font-weight: 500;
    border: 1px solid ${({ theme }) => theme.black};
    vertical-align: middle;
`;

const PlaceName = styled.td`
    font-size ${({ theme }) => theme.m}; 
    font-weight: 500;
    border: 1px solid ${({ theme }) => theme.black};
    text-align: left;
    padding: 10px;
`;

export default index;
