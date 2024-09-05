 
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import BookCard from "../BookCard/BookCard";
// import Loader from "../Loader/Loader";
// import { Container } from "react-bootstrap";

// const RecentlyAdded = () => {
//     const [Data, setData] = useState();
    
//     useEffect(() => {
//         const fetch = async () => {
//             const response = await axios.get("http://localhost:8100/api/get-recent-books");
//             setData(response.data.data);
//         };
        
//         fetch();
//     }, []);

//     return (
//         <Container className="mt-8 px-4">
//             <h4 className="text-3xl text-yellow-100">Recently Added Books</h4>
//             {!Data && <Container className="flex items-center justify-center my-8"> <Loader /></Container>}
//             <Container className="my-8 grid sm:grid-cols-3 md:grid-cols-4 gap-8">

//                 {Data && Data.map((items, i) => (
//                     <Container key={i}>
//                         <BookCard data={items} />
//                     </Container>
//                 ))}
//             </Container>
//         </Container>
//     );
// };

// export default RecentlyAdded;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import BookCard from "../BookCard/BookCard";
// import Loader from "../Loader/Loader";
// import { Container } from "react-bootstrap";

// const RecentlyAdded = () => {
//     const [Data, setData] = useState();

//     useEffect(() => {
//         const fetch = async () => {
//             const response = await axios.get("http://localhost:8100/api/get-recent-books");
//             setData(response.data.data);
//         };

//         fetch();
//     }, []);

//     return (
//         <Container className="mt-12 px-6">
//             <h4 className="text-4xl font-extrabold text-center text-gradient-to-r from-yellow-400 to-yellow-600 mb-8">
//                 Recently Added Books
//             </h4>
//             {!Data && <Container className="flex items-center justify-center my-16"> <Loader /></Container>}
//             <Container className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
//                 {Data && Data.map((items, i) => (
//                     <div key={i} className="hover:shadow-lg hover:scale-105 transition-transform duration-300">
//                         <BookCard data={items} />
//                     </div>
//                 ))}
//             </Container>
//         </Container>
//     );
// };

// export default RecentlyAdded;
import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";
import Loader from "../Loader/Loader";
import { Container } from "react-bootstrap";

const RecentlyAdded = () => {
    const [Data, setData] = useState();
    
    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get("http://localhost:8100/api/get-recent-books");
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