import styled from 'styled-components';

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

const StyledH2 = styled.h2`
    font-size: calc(24px + 1.2vw);
    color: black;
`;

const StyledH3 = styled.h3`
    font-size: calc(18px + 0.2vw);
    color: black;
`;

const StyledP = styled.p`
    font-size: calc(12px + 0.6vw);
    text-align: center;
    color: black;
`;

export default function Education(){
    return (
        <>
            <StyledMain>
                <StyledH2>Education</StyledH2>
                <StyledH3>Boston University — B.A. in Computer Science</StyledH3>
                <StyledP><em>Expected Graduation: May 2026</em></StyledP>
                    <StyledP>Relevant Courses: Web Development, Software Engineering, Algorithms, Database Systems, Operating Systems</StyledP>
                    <StyledP>GPA: 3.7</StyledP>
                <StyledP>
                    At BU I have focused on both theoretical and applied computing, with projects ranging from implementing
                    data structures in C to developing full-stack web apps with Django. This program has strengthened my
                    problem-solving skills and given me hands-on experience with real-world coding practices.
                </StyledP>

                <StyledH3>Brookline High School — High School Diploma</StyledH3>
                <StyledP><em>Graduated: 2022</em></StyledP>
                    <StyledP>National Honor Society</StyledP>
                    <StyledP>Robotics Club</StyledP>
                    <StyledP>AP CS</StyledP>
                    <StyledP>AP Econ</StyledP>
                <StyledP>
                    My high school years helped me develop early leadership and teamwork skills. As a member of the Robotics
                    Club I gained exposure to programming hardware, which sparked my initial interest in computer science.
                </StyledP>
            </StyledMain>
        </>
    )
}