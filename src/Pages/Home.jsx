import React, { useState} from "react";
import NavBar from "../Component/NavBar";
import NewsListing from "../Component/NewsListing";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Home=() => {
    const dispatch= useDispatch();
    const {selectedCategory} =useSelector((state) => state.newsSlice)
    const navigate = useNavigate();
    const token =localStorage.getItem("token")
    console.log("token",token);    

    if(!token)
    {
        navigate("/login");
        return null;
    }

    const handleCategorySelect =(category)=> {
        dispatch(selectedCategory(category));
    };
    return(
        <>
            <NavBar onCategorySelect={handleCategorySelect} />
            <NewsListing category={selectedCategory} />
        </>
    );
}

export default Home;