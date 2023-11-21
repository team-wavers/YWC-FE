import React from "react";
import styled from "styled-components";
import { ReactComponent as TsIcon } from "@assets/icons/TypeScript.svg";
import { ReactComponent as ReactIcon } from "@assets/icons/React-Dark.svg";
import { ReactComponent as StyledComponentsIcon } from "@assets/icons/styledcomponents.svg";
import { ReactComponent as AxiosIcon } from "@assets/icons/axios.svg";
import { ReactComponent as ReactQueryIcon } from "@assets/icons/react-query.svg";

import { ReactComponent as NodejsIcon } from "@assets/icons/NodeJS-Dark.svg";
import { ReactComponent as MysqlIcon } from "@assets/icons/MySQL-Dark.svg";
import { ReactComponent as NgixIcon } from "@assets/icons/Nginx.svg";
import { ReactComponent as AwsIcon } from "@assets/icons/AWS-Dark.svg";

const TechStack = () => {
    return (
        <>
            <Header>Front-end</Header>
            <TsIcon width={50} height={50} />{" "}
            <ReactIcon width={50} height={50} />{" "}
            <StyledComponentsIcon width={50} height={50} />{" "}
            <AxiosIcon width={50} height={50} />
            <ReactQueryIcon width={50} height={50} />
            <Header>Back-End</Header> <TsIcon width={50} height={50} />{" "}
            <NodejsIcon width={50} height={50} />{" "}
            <MysqlIcon width={50} height={50} />{" "}
            <NgixIcon width={50} height={50} />{" "}
            <AwsIcon width={50} height={50} />{" "}
        </>
    );
};
const Header = styled.h4`
    text-align: center;
    font-size: 18px;
`;

export default TechStack;
