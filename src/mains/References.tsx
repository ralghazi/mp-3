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


export default function References(){
    return (
        <>
            <StyledMain>
                <StyledH2>References</StyledH2>
                    <StyledP>
                        <strong>Dr. Emily Carter</strong><br/>
                        Professor of Computer Science, Boston University<br/>
                        Email: ecarter@bu.edu<br/>
                        <em>
                            Dr. Carter has been both my instructor and mentor, providing guidance on research
                            opportunities and academic development. She can speak to my technical abilities and work ethic.
                        </em>
                    </StyledP>

                    <StyledP>
                        <strong>James Lee</strong><br/>
                        Software Engineer, TechNova Solutions<br/>
                        Email: james.lee@technova.com<br/>
                        <em>
                            I worked closely with James during my internship at TechNova. He supervised my contributions
                            to the intranet portal project and can attest to my teamwork and coding skills in a professional
                            setting.
                        </em>
                    </StyledP>

                    <StyledP>
                        <strong>Anna Martinez</strong><br/>
                        Academic Advisor, Boston University<br/>
                        Email: amartinez@bu.edu<br/>
                        <em>Anna has guided me throughout my undergraduate studies, helping me plan my coursework
                            and connect with opportunities that align with my career goals.</em>
                    </StyledP>

                    <StyledP>
                        <strong>Michael Thompson</strong><br/>
                        Senior Developer, Freelance Mentor<br/>
                        Email: michael.thompson@example.com<br/>
                        <em>Michael has been a mentor on several coding projects outside of class, providing feedback
                            on my code and helping me improve my project management and software design skills.</em>
                    </StyledP>
            </StyledMain>
        </>
    )
}