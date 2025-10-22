import styled from 'styled-components';

const StyledHeader = styled.header`
    text-align: left;
    padding: 12px 12px;
    background-color: darkgreen;
    color: antiquewhite;
    @media screen and (max-width: 750px) {
        text-align: center;
    }
`;

const StyledP = styled.p`
    text-align: left;
    @media screen and (max-width: 750px) {
        text-align: center;
    }
`;

export default function Header(){
    return (
        <StyledHeader>
            <h1>Roaa Alghazi</h1>
            <StyledP>My Online Resume</StyledP>
        </StyledHeader>
    )
}