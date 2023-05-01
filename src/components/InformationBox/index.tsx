import React from "react";
import styled from "styled-components";
// import { ReactComponent as ShopIcon } from "../../assets/icons/shop-icon.svg";
import { Link } from "react-router-dom";

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
            <FeedbackContainer>
                <FeedbackTitle>여러분의 피드백을 주세요! 👇👇👇</FeedbackTitle>
                <FeedbackSubTitle>
                    원하는 기능, 잘못된 정보, 개선 사항 등의 피드백이
                    <br />
                    서비스 개선에 큰 도움이 됩니다!
                </FeedbackSubTitle>
                <EmailContainer>
                    <Link
                        to="#"
                        style={{ color: "#ff3399", fontSize: "inherit" }}
                        onClick={(e) => {
                            window.location.href =
                                "mailto:support@youthwelfare.kr?Subject=건의합니다.";
                            e.preventDefault();
                        }}
                    >
                        support@youthwelfare.kr
                    </Link>
                </EmailContainer>
            </FeedbackContainer>
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

const FeedbackContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 60px 20px 0 20px;
`;

const FeedbackTitle = styled.h3`
    font-size: ${({ theme }) => theme.l};
    margin-bottom: 5px;
`;

const FeedbackSubTitle = styled.h4`
    font-size: ${({ theme }) => theme.m};
    font-weight: 500;
    line-height: ${({ theme }) => theme.l};
`;

const EmailContainer = styled.div`
    width: 200px;
    height: 40px;
    background-color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.m};
    line-height: 40px;
    padding: 0 10px;
    border-radius: 20px;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.1);
    margin: 15px;
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
    background-color: ${({ theme }) => theme.white};
`;

const PlaceTypeHead = styled.th`
    width: 30%;
    height: 40px;
    font-size: ${({ theme }) => theme.m};
    background-color: ${({ theme }) => theme.pageBtnActive};
    vertical-align: middle;
    border: 1px solid ${({ theme }) => theme.black};
`;

const PlaceNameHead = styled.th`
    width: 70%;
    height: 30px;
    font-size: ${({ theme }) => theme.m};
    background-color: ${({ theme }) => theme.pageBtnActive};
    vertical-align: middle;
    border: 1px solid ${({ theme }) => theme.black};
`;

const PlaceType = styled.td`
    font-size ${({ theme }) => theme.m}; 
    font-weight: 500;
    vertical-align: middle;
    border: 1px solid ${({ theme }) => theme.black};
`;

const PlaceName = styled.td`
    font-size ${({ theme }) => theme.m}; 
    font-weight: 500;
    text-align: left;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.black};
`;

export default index;
