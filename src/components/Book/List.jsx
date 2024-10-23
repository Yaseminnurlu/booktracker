import {useState, useEffect} from "react";
import Book from "./Book.jsx";
import styled from "styled-components";
//This is the Book component made by Kate

//Orders the books in a row
const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

//Getting information from the API created by Kate.
export default function List() {
    /* using useState to update the list of books called from my fake JSON server */
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetcher()
        /* calling my fake JSON server where my books API is */{
            const rawData = await fetch("https://my-json-server.typicode.com/k4teseo/cs392-final/books");
            const books = await rawData.json();
            console.log("fetched data", {books});
            setData(books);
        }
        /* fetching my data and catching for errors */
        fetcher()
            .then(() => console.log("Yay"))
            .catch(() => console.log("Nay"));
    }, []);
    /* returning the book props that my Book child componenet will use */
    return (
        <>
            <StyledDiv>
            {
                data.map((book) => (
                    <Book
                        key={book.id}
                        title={book.title}
                        author={book.author}
                        description={book.description}
                        cover={book.cover}
                    />
                ))
            }
            </StyledDiv>
        </>
    )
}