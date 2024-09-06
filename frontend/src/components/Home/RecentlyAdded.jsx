
import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";
import Loader from "../Loader/Loader";
import { Container } from "react-bootstrap";

const RecentlyAdded = () => {
    const [Data, setData] = useState();
    
    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get("https://novelnest-backend.onrender.com/api/get-recent-books");
            setData(response.data.data);
        };
        
        fetch();
    }, []);

    return (
        <Container className="mt-8 px-4">
            <h4 className="text-3xl text-yellow-100">Recently Added Books</h4>
            {!Data && <Container className="flex items-center justify-center my-8"> <Loader /></Container>}
            <Container className="my-8 grid sm:grid-cols-3 md:grid-cols-4 gap-8">

                {Data && Data.map((items, i) => (
                    <Container key={i}>
                        <BookCard data={items} />
                    </Container>
                ))}
            </Container>
        </Container>
    );
};

export default RecentlyAdded;