import styled from "styled-components";

const StyledP = styled.p`
    text-align: left;
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

const StyledH2 = styled.h2`
    font-size: calc(24px + 1.2vw);
    color: black;
`;

export default function Certificates(){
    return (
        <>
            <StyledMain>
                <StyledH2>Certificates</StyledH2>

                <StyledP>
                    <strong>AWS Certified Cloud Practitioner</strong> — Amazon Web Services (2024)
                    This certification introduced me to the fundamentals of cloud computing, including AWS core
                    services, cloud security, and billing. It demonstrates my readiness to work with cloud-based
                    environments.
                </StyledP>

                <StyledP>
                    <strong>Responsive Web Design</strong> — freeCodeCamp (2023)
                    Through hands-on projects I learned how to build mobile-friendly websites using HTML and CSS,
                    practicing modern layout techniques such as flexbox and grid.
                </StyledP>

                <StyledP>
                    <strong>JavaScript Algorithms & Data Structures</strong> — freeCodeCamp (2023)
                    This certificate required solving 100+ algorithm challenges, which strengthened my ability to
                    write efficient code, debug JavaScript, and think algorithmically.
                </StyledP>

                <StyledP>
                    <strong>Google Data Analytics Certificate</strong> — Coursera (2024)
                    This program introduced me to data cleaning, visualization, and analysis using
                    tools like SQL, spreadsheets, and Tableau. It gave me a strong foundation in
                    working with real-world datasets.
                </StyledP>

                <StyledP>
                    <strong>Introduction to Cybersecurity</strong> — Cisco Networking Academy (2023)
                    This course covered the basics of network security, threat detection, and
                    cybersecurity best practices. It helped me understand how to design secure
                    applications and protect user data.
                </StyledP>

                <StyledP>
                    <strong>Git & GitHub Essentials</strong> — Codecademy (2022)
                    Through this certificate I practiced version control workflows, branching,
                    merging, and collaborative coding, preparing me for real-world software
                    development environments.
                </StyledP>
            </StyledMain>
        </>
    )
}