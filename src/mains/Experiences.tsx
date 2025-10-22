import styled from "styled-components";

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

export default function Experiences(){
    return (
        <>
            <StyledMain>
                <StyledH2>Experiences</StyledH2>

                <StyledH3>Software Development Intern — TechNova Solutions, Boston, MA <em>(Summer 2024)</em></StyledH3>
                <StyledUl>
                    <StyledLi>Built and deployed a company intranet portal using React and Node.js.</StyledLi>
                    <StyledLi>Designed reusable UI components, improving development speed by 30%.</StyledLi>
                    <StyledLi>Wrote unit tests to ensure code reliability and documented features for future interns.</StyledLi>
                </StyledUl>
                <StyledP>
                    This internship gave me valuable exposure to professional software practices, including code reviews,
                    sprint planning, and cross-team collaboration. I left with a stronger understanding of full-stack
                    development workflows in a real business environment.
                </StyledP>

                <StyledH3>Teaching Assistant (Intro to Python) — Boston University <em>(2023–2024)</em></StyledH3>
                <StyledUl>
                    <StyledLi>Assisted in grading assignments and holding weekly office hours.</StyledLi>
                    <StyledLi>Designed practice problems and reviewed solutions to reinforce key concepts.</StyledLi>
                </StyledUl>
                <StyledP>
                    Serving as a TA allowed me to improve my communication skills and deepen my mastery of Python.
                    Supporting new learners taught me how to explain complex technical topics in clear, approachable ways.
                </StyledP>

                <StyledH3>IT Support Assistant — Boston University IT Help Desk <em>(2022–2023)</em></StyledH3>
                <StyledUl>
                    <StyledLi>Provided technical support to students and faculty, resolving hardware and software issues.</StyledLi>
                    <StyledLi>Assisted in configuring accounts, resetting passwords, and troubleshooting campus network access.</StyledLi>
                    <StyledLi>Documented common issues and created step-by-step guides, reducing repeat support requests.</StyledLi>
                </StyledUl>
                <StyledP>
                    This role helped me develop strong problem-solving and communication skills while working directly
                    with end-users. It also gave me exposure to real-time troubleshooting and customer service in a
                    fast-paced academic environment.
                </StyledP>
            </StyledMain>
        </>
    )
}