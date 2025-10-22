import {useState} from "react";
import styled from "styled-components";

const StyledCalc = styled.section`
    display: block;
    flex-direction: row;
    gap: 12px;
    background-color: olivedrab;
    padding: 16px;
    border: 2px solid darkgreen;
`;

const StyledInputs = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    padding-bottom: 8px;
`;

const StyledInput = styled.input`
    width: 200px;
    text-align: center;
    align-items: center;
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

const StyledP = styled.p`
    font-size: calc(12px + 0.6vw);
    text-align: center;
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

const StyledH2 = styled.h2`
    font-size: calc(24px + 1.2vw);
    color: black;
`;


export default function Projects(){

   const [num1, setNum1] = useState("");
   const [num2, setNum2] = useState("");
   const [res, setRes] = useState("");
   const [color, setColor] = useState("black");

   const compute =  (op: string): void =>{
        const a = Number(num1);
        const b = Number(num2);
        let val = 0;

        if(op === "+"){
            val = a + b;
        }
        else if(op === "-"){
            val = a - b;
        }
        else if(op === "*"){
            val = a * b;
        }
        else if (op === "/"){
            val = a / b;
        }
        else if(op === "**"){
            let result = 1;
            for(let i=0; i<b; i++){
                result = result * a;
            }
            val = result;
        }
        else if(op === "Clear"){
            setNum1("");
            setNum2("");
            setRes("");
        }
        else{
            val = 0;
        }
        setRes(String(val));
        setColor(val < 0 ? "red" : "black");
    };


    return (
        <>
            <StyledMain>
                <StyledH2>Projects</StyledH2>
                <StyledH3>Recipe Book App (Django)</StyledH3>
                    <StyledP>Built a recipe management site with user authentication and database integration.</StyledP>
                    <StyledP>Users can log meals, upload images, and save favorite recipes.</StyledP>

                <StyledH3>Movie Database Analysis (Python, SQL)</StyledH3>
                    <StyledP>Analyzed 1,000+ movie records to find patterns in ratings and awards.</StyledP>
                    <StyledP>Used SQL queries and matplotlib to visualize trends.</StyledP>
                <StyledH3>Personal Finance Tracker (JavaScript, HTML, CSS)</StyledH3>
                    <StyledP>Developed a web application that allows users to log income and expenses.</StyledP>
                    <StyledP>Implemented interactive charts to visualize spending habits using Chart.js.</StyledP>

                <StyledH1>Calculator</StyledH1>
                <StyledCalc>
                    <StyledInputs>
                        <label htmlFor="one">First Number:</label>
                        <StyledInput type="text" id="first-number" value={num1} onChange={(e) => setNum1(e.target.value)} />
                        <label htmlFor="two">Second Number:</label>
                        <StyledInput type="text" id="second-number" value={num2} onChange={(e) => setNum2(e.target.value)} />

                    </StyledInputs>
                    <div id="buttons">
                        <button onClick={() => compute("+")}>+</button>
                        <button onClick={() => compute("-")}>-</button>
                        <button onClick={() => compute("*")}>*</button>
                        <button onClick={() => compute("/")}>/</button>
                        <button onClick={() => compute("**")}>**</button>
                        <button onClick={() => compute("Clear")}>Clear</button>
                    </div>

                    <StyledH3 id="output" style={{color: color}}>{res}</StyledH3>
                </StyledCalc>
            </StyledMain>
        </>
    )
}