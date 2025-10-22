import {Link} from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;
    background-color: olivedrab;
    padding: 16px;
    @media screen and (max-width: 750px) {
        width: 100%;
        padding:0;
        //border: 2px solid mediumseagreen;
    }
`;

const StyledUl = styled.ul`
    padding: 0;
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 18px;
    justify-content: space-evenly;
    @media screen and (max-width: 750px) {
        flex-direction: row;
        width: 100%;
        gap:0;
        padding: 3px;
        //justify-content: space-between;
        
`;

const StyledLi= styled.li`
    background-color: antiquewhite;
    padding: 1.5% 0;
    width: 80%;
    gap: 18px;
    @media screen and (max-width: 750px) {
        /* Remove the fixed width so the item sizes to its content/padding */
        width: auto;
        //flex-shrink: 1;

        /* 3. Reduce vertical padding and add horizontal margins for spacing */
        padding: 5px 0;
        margin: 0 0;
        font-size: calc(8px + 0.6vw);
    }
`;

const StyledLink = styled(Link)`
    text-align: center;
    color: black;
    @media screen and (max-width: 750px) {
        padding: 3px 7px;
    }
`;

export default function Nav(){
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to={`/`}>Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/edu`}>Education</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/exp`}>Experiences</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/projects`}>Projects</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/certs`}>Certificates</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/ref`}>References</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    )
}