import { createSlice } from "@reduxjs/toolkit"

const initialState=[]
const bookSlice = createSlice({
    name:"books",
    initialState,
    reducers:{
        addBook: (state, action)=>{
            state.push(action.payload)
        },
        deleteBook:(state, action)=>{
            return state.filter(book => book.id !== action.payload)   
        },
        toggleFavorite:(state, action)=>{
            return state.map(book => 
                book.id === action.payload
                    ?{...book, isFavorite: !book.isFavorite}
                    : book
            )      
        },
        getBooks:(state, action)=>{
            return [...state, ...action.payload]
        }
    }
})
export const {addBook, deleteBook, toggleFavorite, getBooks} =bookSlice.actions
export const selectBooks = (state)=> state.books
export default bookSlice.reducer