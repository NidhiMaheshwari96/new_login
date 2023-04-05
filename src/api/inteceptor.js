import axios from "axios";
 
var instance = axios.create({
    timeout : 12000,
    headers: {
        Accept : "application/json",
        "Content-type" : "multipart/form-data",
    },
});

instance.interceptors.request.use(
    async (config) => {
      console.log("config", config);
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  export default instance;