import React, { useState} from "react";
import NavBar from "../Component/NavBar";
import NewsListing from "../Component/NewsListing";


function Home() {
    const[selectedCategory, setSelectedCategory]= useState("sports");

    const handleCategorySelect =(category)=> {
        setSelectedCategory(category);
    };
    return(
        <>
            <NavBar onCategorySelect={handleCategorySelect} />
            <NewsListing category={selectedCategory} />
        </>
    );
}

export default Home;