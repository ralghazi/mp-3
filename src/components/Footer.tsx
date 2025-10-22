import styled from "styled-components";

const StyledFooter = styled.footer`
    text-align: center;
    background-color: darkgreen;
    color: antiquewhite;
`;

const StyledP = styled.p`
    color: antiquewhite;
`;

export default function Footer() {
    return(
        <StyledFooter>
            <StyledP>All rights reserved <a href="">Credits</a> &#169;</StyledP>
        </StyledFooter>
    )
}