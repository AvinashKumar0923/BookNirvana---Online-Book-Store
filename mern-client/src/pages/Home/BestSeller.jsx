import React, { useEffect, useState } from 'react'
import BookCards from '../shared/BookCards';
const API_URL = import.meta.env.VITE_API_URL;

const BestSeller = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/all-books`).then(res => res.json()).then(data => setBooks(data.slice(0, 8)))
    }, [])

    return (
        <>
            <BookCards books={books} headline={"Best Seller Books"} />
        </>
    )
}

export default BestSeller