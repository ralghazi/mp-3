import styled from 'styled-components';

const StyledImg = styled.img`
    width: 40%;
    align-self: center;
    max-width: 200px;
`;

const StyledSection = styled.section`
    display: flex;
    flex-direction: row;
    gap: 12px;
`;

const StyledContact = styled.section`
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;
const StyledP = styled.p`
    text-align: left;
    font-size: calc(12px + 0.6vw);
    color: black;
`;

const StyledMain = styled.main`
    height: 100vw;
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 16px;
    @media screen and (max-width: 750px) {
        width: 100%;
        height: auto;
    }
`;

const StyledUl = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

const StyledLi = styled.li`
    color: black;
`;

const StyledH1 = styled.h1`
    font-size: calc(24px + 1.2vw);
    color: black;
`;

const StyledH3 = styled.h3`
    font-size: calc(18px + 0.2vw);
    color: black;
`;

export default function Home(){
    return (
        <>
            <StyledMain>
                <StyledH1>Home</StyledH1>
                <StyledSection>
                    <StyledImg src="/img.png" alt="Profile Picture"/>
                    <StyledP>
                        My name is Roaa Alghazi. I’m a third-year Computer Science student passionate about full-stack
                        web development and
                        software engineering. I enjoy building projects that combine creativity and technical
                        problem-solving, from personal websites to data-driven applications. My goal is to grow as
                        a developer and contribute to impactful, user-focused software.
                    </StyledP>
                </StyledSection>
                <StyledP>
                    Outside of coursework, I regularly contribute to open-source projects and experiment with new
                    frameworks to strengthen my skills.
                </StyledP>
                <StyledP>
                    This website was created as part of my web development coursework to demonstrate my ability to
                    design,
                    code, and deploy a complete responsive site. It serves as both a portfolio and a digital resume for
                    potential employers, mentors, and collaborators.
                </StyledP>
                <StyledP>
                    You can navigate through this website to learn more about my academic background and experiences in
                    my
                    field, as well as check out some of my projects I have worked on. You can also take a look through
                    my
                    references and the documents I have.
                </StyledP>
                <StyledContact>
                    <StyledH3>Contact Info</StyledH3>
                    <StyledUl>
                        <StyledLi>Boston, MA</StyledLi>
                        <StyledLi>roaa.alghazi@example.com</StyledLi>
                        <StyledLi><a href="#">linkedin.com/in/roaaalghazi</a></StyledLi>
                        <StyledLi><a href="#">github.com/roaaalghazi</a></StyledLi>
                    </StyledUl>
                </StyledContact>
            </StyledMain>
        </>
    )
}