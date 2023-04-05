import { ConstantMessage } from "./validation";

export const validateLogin =(values) =>{
    const error ={};
    const warning = ConstantMessage.adminLogin

    if(!values.username.trim()){
        error.username = warning.username;

    }
    
    
      if (!values.password.trim()) {
        error.password = warning.password;
      }
      return error;
};