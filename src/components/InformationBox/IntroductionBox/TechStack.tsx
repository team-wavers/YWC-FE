import React from "react";
import styled from "styled-components";

const TechStack = () => {
    return (
        <>
            <Header>Front-end</Header>
            <img
                src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TypeScript.svg"
                width={48}
            />{" "}
            <img
                src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg"
                width={48}
            />{" "}
            <img
                src="https://github.com/team-culfare/.resources/blob/main/styledcomponents.png?raw=true"
                width={48}
            />{" "}
            <img
                src="https://github.com/team-culfare/.resources/blob/main/axios.png?raw=tru"
                width={48}
            />
            <Header>Back-End</Header>
            <img
                src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TypeScript.svg"
                width={48}
            />{" "}
            <img
                src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NodeJS-Dark.svg"
                width={48}
            />{" "}
            <img
                src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MySQL-Dark.svg"
                width={48}
            />{" "}
            <img
                src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Nginx.svg"
                width={48}
            />{" "}
            <img
                src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/AWS-Dark.svg"
                width={48}
            />{" "}
        </>
    );
};
const Header = styled.h4`
    text-align: center;
    font-size: 18px;
`;

export default TechStack;
