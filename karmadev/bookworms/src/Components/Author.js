import React, { useState } from "react";
import { product } from "./json.js";

export const Author = () => {
    const authorNames = Array.from(new Set(product.map(item => item.author_name)));
    const [selectedAuthor, setSelectedAuthor] = useState(null);

    const handleAuthorClick = (author) => {
        setSelectedAuthor(author);
    };

    const authorProducts = product.filter(item => item.author_name === selectedAuthor);

    return (
        <>
            <h2>Authors</h2>
            <ul className="auth">
                {authorNames.map((author, index) => (
                    <li key={index} onClick={() => handleAuthorClick(author)}>{author}</li>
                ))}
            </ul>
            {selectedAuthor && (
                <div>
                    <h3>{selectedAuthor}</h3>
                    <ul className="sel_author">
                        {authorProducts.map((product, index) => (
                            <li key={index}> 
                                <li><img src={product.image}/></li>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};
