import React, { forwardRef } from "react";
import styled from "styled-components";
import { ReactComponent as CloseIcon } from "@assets/icons/close-icon.svg";
import { ReactComponent as MoreOptionsIcon } from "@assets/icons/more-opt-icon.svg";
import { ReactComponent as ClipboardIcon } from "@assets/icons/clipboard-icon.svg";

const ShareModal = (
    { closeBtnHandler }: { closeBtnHandler: () => void },
    ref: React.ForwardedRef<HTMLDivElement>,
) => {
    const shareHandler = () => {
        navigator
            .share({
                title: "전남 문화복지카드 사용처 검색 서비스",
                text: "전남 문화복지카드 사용처를 쉽고 빠르게 검색해보세요!\nhttps://youthwelfare.kr",
                url: "https://youthwelfare.kr",
            })
            .then()
            .catch((e) => {
                if (e.name === "AbortError") return;
            });
    };
    const clipboardHandler = () => {
        navigator.clipboard
            .writeText("https://youthwelfare.kr")
            .then(() =>
                alert(
                    "링크가 복사되었습니다!\n붙여넣기를 통해 링크를 공유해보세요 :)",
                ),
            );
    };

    return (
        <Container ref={ref}>
            <ModalContainer>
                <Title>서비스가 마음에 드시나요?</Title>
                <SubTitle>지인에게 서비스를 공유해보세요! 🙋‍♀️</SubTitle>
                <CloseButton>
                    <CloseIcon
                        onClick={closeBtnHandler}
                        style={{
                            width: "30px",
                            height: "30px",
                            fill: "#222",
                        }}
                    />
                </CloseButton>
                <ShareButtonContainer>
                    <ShareButton
                        bgColor="#8bd1e8"
                        name=" 링크 복사"
                        onClick={() => clipboardHandler()}
                    >
                        <ClipboardIcon
                            style={{
                                marginTop: "3px",
                                width: "60px",
                                fill: "#fff",
                            }}
                        />
                    </ShareButton>
                    {Boolean(navigator.canShare) && (
                        <ShareButton
                            bgColor="#eee"
                            name="더보기"
                            onClick={() => shareHandler()}
                        >
                            <MoreOptionsIcon
                                style={{
                                    width: "40px",
                                    marginTop: "3px",
                                    fill: "#ddd",
                                }}
                            />
                        </ShareButton>
                    )}
                </ShareButtonContainer>
            </ModalContainer>
        </Container>
    );
};

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    overflow-y: hidden;
`;

const ModalContainer = styled.section`
    position: fixed;
    bottom: 0;
    width: min(480px, 100%);
    height: 230px;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const CloseButton = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    width: 30px;
    height: 30px;
    margin: 20px;
    margin-right: 25px;
    border: none;
    outline: none;
    background-color: transparent;
`;

const Title = styled.h1`
    margin-top: 10px;
    font-size: ${({ theme }) => theme.sizes.l};
    color: ${({ theme }) => theme.colors.black};
`;

const SubTitle = styled.h2`
    padding-top: 10px;
    font-size: ${({ theme }) => theme.sizes.m};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.black};
`;

const ShareButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 75px;
    margin-top: 30px;
    gap: 15px;
    padding: 0px 5px;
`;

const ShareButton = styled.button<{ bgColor: string; name: string }>`
    position: relative;
    width: 60px;
    height: 60px;
    outline: none;
    padding: 0;
    border: none;
    border-radius: 60px;
    background-color: ${({ bgColor }) => bgColor && `${bgColor}`};
    &::before {
        display: block;
        position: absolute;
        width: 60px;
        top: 70px;
        float: left;
        text-align: center;
        bottom: -15px;
        font-size: ${({ theme }) => theme.sizes.s};
        font-weight: 500;
        content: "${({ name }) => name && `${name}`}";
        color: ${({ theme }) => theme.colors.black};
    }
`;

export default forwardRef(ShareModal);
