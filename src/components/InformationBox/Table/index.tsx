import React from "react";
import styled from "styled-components";

const index = () => {
    return (
        <>
            <Container>
                <SubTitle>&#128450;&#65039; 분류별 사용처</SubTitle>
                <TableContainer>
                    <TableHeaderContainer>
                        <TableHeaderCell>분류</TableHeaderCell>
                        <TableHeaderCell>사용처</TableHeaderCell>
                    </TableHeaderContainer>
                    <TableBodyContainer>
                        <TableBodyCell>문화, 여가</TableBodyCell>
                        <TableBodyCell>
                            공연 관람: 연극, 영화, 공연 전시: 미술관, 박물관,
                            비엔날레, 화랑
                            <br />
                            사진관
                            <br />
                            체육시설 이용: 헬스, 볼링, 수영, 요가, 필라테스,
                            에어로빅, 복싱, 탁구, 당구, 사격, 골프, 롤러스케
                            이트, 승마, 스케이트, 스키, 태권도, 합기도, 유도,
                            스포츠댄스, 방송댄스
                        </TableBodyCell>
                    </TableBodyContainer>
                    <TableBodyContainer>
                        <TableBodyCell>자기계발</TableBodyCell>
                        <TableBodyCell>
                            학원수강 등 자기계발 강좌
                            <br />
                            도서: 서점, 중고서점, 신문
                            <br />
                            음악: 음반, 악기(악기소매점, 악기부속품) 구입
                        </TableBodyCell>
                    </TableBodyContainer>
                    <TableBodyContainer>
                        <TableBodyCell>관광</TableBodyCell>
                        <TableBodyCell>
                            숙박: 호텔, 리조트, 콘도, 모텔, 게스트하우스, 민박,
                            연수원
                            <br />
                            테마파크: 놀이공원, 워터파크, 아쿠아리움
                            <br />
                            체험관광: 템플스테이, 레일바이크 짚라인 등
                            휴양림,캠핑장, 야영장, 캠핑용품점
                        </TableBodyCell>
                    </TableBodyContainer>
                </TableContainer>
                <Note>
                    ※ 온라인(인터넷, 앱 등) 결제 불가, 전남 도내(오프라인)에서만
                    사용 가능
                </Note>
                <Note>
                    ※ 사용 업종이 제대로 등록되지 않은 경우 카드 사용이 불가 할
                    수 있음
                </Note>
            </Container>
        </>
    );
};

const Container = styled.div`
    width: 100%;
    height: auto;
    padding-top: 20px;
`;

const SubTitle = styled.h3`
    width: auto;
    height: 45px;
    text-align: left;
    font-family: "OAGothic", sans-serif;
    font-weight: 500;
    font-size: ${({ theme }) => theme.l};
`;

const TableContainer = styled.div`
    width: 100%;
    height: auto;
    margin-top: 10px;
    margin-bottom: 15px;
    border-radius: 20px;
    box-shadow: 0 2px 10px -5px rgba(0, 0, 0, 0.2);
`;

const TableHeaderContainer = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.white};
    border-radius: 20px 20px 0 0;
    padding: 5px 0;
    border-bottom: 1px solid #eee;
`;

const TableHeaderCell = styled.div`
    width: 30%;
    font-size: ${({ theme }) => theme.m};
    font-weight: 600;
    &:last-child {
        width: 70%;
    }
`;

const TableBodyContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid #eee;
    &:last-child {
        border-radius: 0 0 20px 20px;
        border: none;
    }
`;

const TableBodyCell = styled.div`
    width: 30%;
    font-size: ${({ theme }) => theme.m};
    padding: 10px 8px;
    &:nth-child(2n) {
        text-align: left;
        width: 70%;
    }
`;

const Note = styled.p`
    color: ${({ theme }) => theme.pageBtn};
    font-size: ${({ theme }) => theme.xs};
    line-height: ${({ theme }) => theme.m};
    text-align: left;
`;

export default index;
