import styled from "styled-components";
import Rate from "../Rate/Rate.jsx"
//This is the Book component made by Kate

//Styling for the book components
const Grid = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    padding: 0 auto;
`;

const ContainerButton = styled.button`
    background: white;
  width: 19vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2%;
  &:hover {
    box-shadow: 0 0 20px 5px rgba(0,0,0,.2)
  }
`;

const StyledImg = styled.img`
  width: 15vw;
`;

const StyledH1 = styled.h1`
    text-align: center;
    font-family: "Bodoni 72 Smallcaps", serif;
    font-size: calc(5px + 2vw);

`;

const StyledH2 = styled.h2`
  font-family: "Bodoni 72 Smallcaps", serif;
`;


export default function Book(book) {
    /* returning my book component using styled components and the props called from List.jsx */
    return(
        <>
        <Grid>
            <ContainerButton>
                <StyledH1>{book.title}</StyledH1>
                <StyledImg src={book.cover}/>
                <StyledH2>{book.author}</StyledH2>
                <Rate/>
            </ContainerButton>

        </Grid>
    </>
    )
}

