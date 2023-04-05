import instance from "./inteceptor";
import { store } from "../store";



export const Post = async (url , fromData , type =0) =>{
 
     const options =  {
        headers : {
            Accept: type ? "multipart/form-data" : "application/json",
      "Content-Type": type ? "multipart/form-data" : "application/json",
        },
     };

     const token = store.getState().counter.token;
     console.log(token,"check");

     if (token) {
        options.headers.Authorization = `Bearer ${token}`;
      }
      return instance
        .post(url, fromData, options)
        .then(function (response) {
          console.log("success", response);
          return response.data;
        })
        
    };

    export const get = async(url, type =0) => {
  const option ={
    headers: {
      Accept: type ? "multipart/form-data" : "application/json",
      "Content-Type": type ? "multipart/form-data" : "application/json",
    },
  };

   const token = store.getState().counter.token;
     console.log(token,"check");

  return instance
    .get(url,option)
    .then(function (response) {
      console.log("success", response);
      return response.data;
    })
    
}

 

export const put = async(url, formData, type =0) => {
  const option ={
    headers: {
      Accept: type ? "multipart/form-data" : "application/json",
      "Content-Type": type ? "multipart/form-data" : "application/json",
    },
  };

  const token = store.getState().counter.token;
     console.log(token,"check");

  return instance
    .put(url, formData)
    .then(function (response) {
      console.log("success", response);
      return response.data;
    })

 }



export const deleteApi = async(url, type =0) => {
  const option ={
    headers: {
      Accept: type ? "multipart/form-data" : "application/json",
      "Content-Type": type ? "multipart/form-data" : "application/json",
    },
  };

  const token = store.getState().counter.token;
     console.log(token,"check");

  return instance
    .delete(url,option)
    .then(function (response) {
      console.log("success", response);
      return response.data;
    })
    
}
     