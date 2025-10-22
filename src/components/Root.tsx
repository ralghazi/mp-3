import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Nav from "./Nav.tsx";
import Home from "../mains/Home.tsx";
import Education from "../mains/Education.tsx";
import Experiences from "../mains/Experiences.tsx";
import Projects from "../mains/Projects.tsx";
import Certificates from "../mains/Certificates.tsx";
import References from "../mains/References.tsx";
import {Route, Routes} from "react-router";
import styled from "styled-components";

const StyledWrapper=styled.div`
    width: 80vw;
    background-color: antiquewhite;
    margin: 0 auto;
    text-align: center;
    align-items: center;
`;

const StyledSection=styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        width: 100%
    }
`;

export default function Root(){
    return(
        <>
            <StyledWrapper>
                <Header/>
                <StyledSection>
                    <Nav/>
                    <Routes>
                        <Route path={`/`} element={<Home/>}/>
                        <Route path={`/edu`} element={<Education/>}/>
                        <Route path={`/exp`} element={<Experiences/>}/>
                        <Route path={`/projects`} element={<Projects/>}/>
                        <Route path={`/certs`} element={<Certificates/>}/>
                        <Route path={`/ref`} element={<References/>}/>
                    </Routes>
                </StyledSection>
                <Footer/>
            </StyledWrapper>

        </>
    )
}