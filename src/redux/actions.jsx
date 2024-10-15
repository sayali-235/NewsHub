import { type } from "@testing-library/user-event/dist/type";

export const SET_CATEGORY = "SET_CATEGORY";
export const SET_NEWS = "SET_NEWS";
export const SET_SELECTED_ARTICLE = "SET_SELECTED_ARTICLE";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const SET_FORMDATA ="SET_FORMDATA";
export const SET_ERRORS="SET_ERRORS";
export const SET_IMAGE_SRC ="SET_IMAGE_SRC"

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: category,
});

export const setNews = (news) => ({
  type: SET_NEWS,
  payload: news,
});

export const setSelectedArticle = (article) => ({
  type: SET_SELECTED_ARTICLE,
  payload: article,
});

export const toggleModal = (showModal) => ({
  type: TOGGLE_MODAL,
  payload: showModal,
});

export const setFormData =(formData) =>({
  type :SET_FORMDATA,
  payload: formData,
})

export const setErrors =(errors) => ({
  type : SET_ERRORS,
  payload:errors,
})


export const setImageSrc =(imageSrc) =>({
  type:SET_IMAGE_SRC,
  payload: imageSrc,
})
