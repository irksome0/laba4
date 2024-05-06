import { getBooks } from "../BookSlice";
export const fetchBooks = () => {
    return dispatch => {
        fetch('http://localhost:8081/books')
        .then(response => response.json())
        .then(json => dispatch(getBooks(json)))
    }
}