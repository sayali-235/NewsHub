import React, { useEffect } from "react";
import NavBar from "../Component/NavBar";
import NewsListing from "../Component/NewsListing";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const {category} =useParams();
  const { selectedCategory } = useSelector((state) => state.newsSlice);


  useEffect(() =>{
    if(category)
    {
      dispatch(setCategory(category));
    }
  },[category,dispatch]);
  
  return (
    <>
      <NavBar onCategorySelect= {(category) => dispatch(setCategory(category))} />
      <NewsListing category={selectedCategory} />
    </>
  );
};

export default Home;
