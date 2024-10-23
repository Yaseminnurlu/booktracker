import List from "../Book/List.jsx";
import styled from "styled-components";
//Styling file for the webpage made by Yasemin

const StyledHeader = styled.h1`
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    background-color: darkgoldenrod;
    padding: 5%;
    font-family: "Bodoni 72 Smallcaps", serif;
`;

const StyledFooter = styled.h3`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: darkgoldenrod;
    padding: 3%;
    font-family: "Bodoni 72 Smallcaps", serif;
    margin-top: 40vh;
`;
//Makes a call to list into the styled page to display the books.
export default function Page(){
    return(
        <>
            <StyledHeader>My Book Tracker</StyledHeader>
            <List/>
            <StyledFooter>Made by Kate and Yasemin </StyledFooter>
        </>
    )
}
