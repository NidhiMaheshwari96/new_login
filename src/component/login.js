import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyImage from "./images/image.jpeg";
import Button from "react-bootstrap/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DefaultInput } from "./inputs";
import { validateLogin } from "./validators";
import * as Yup from "yup";
import { Post } from "../api/api";
import { useDispatch } from "react-redux";
import { loginSuccess , loginFailed } from "../redux/authSlice";
import { Navigate } from "react-router-dom";


function Login() {
  const dispatch = useDispatch();
  

  const login =(values) =>{
    let formData = {
      username : values.username,
      password : values.password,

    };
     Post('https://dummyjson.com/auth/login',formData,0).then((data=>{
              console.log(data)
              dispatch(loginSuccess(data.token));
              window.location.replace('/');
              console.log(data.token, "token")

            }))
             .catch( (error)=> {
              console.log(error)
              dispatch(loginFailed(error.message));
                // setisError(true)
              });

              
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
    .required("Required")
    .min(4, "Username must be at least 4 characters")
    .max(20, "Username cannot be longer than 20 characters"),
  password: Yup.string()
    .required("Required")
    .min(6, "Password must be at least 6 characters"),
  });
  return (
    <div>
      <Container fluid className="CustomContainer backgroundImage">
        <Row className="CustomRow" style={{ margin: "100px" }}>
          <h3 style={{ textAlign: "center" }}> Login Form</h3>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              login(values);
              setSubmitting(false);
            }}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit}>
                <div>
                  <DefaultInput 
                    type={"username"}
                    placeholder={"Username"}
                    name={"username"}
                    value={props.values.username}
                    onChange={props.handleChange("username")}
                    onBlur={() => props.setFieldTouched("username", true)}
                    error={props.touched.username && props.errors.username}
                  />
                 {props.touched.username && props.errors.username ? (
                <div className="error_msg"><ErrorMessage  className="error_msg" name="username" /></div>
              ) : null}

                </div>

                <div>
                  <DefaultInput
                    type={"password"}
                    placeholder={"Password"}
                    name={"password"}
                    value={props.values.password}
                    onChange={props.handleChange("password")}
                    onBlur={() => props.setFieldTouched("password", true)}
                    // error={props.touched.password && props.errors.password}
                  />
                  {props.touched.password && props.errors.password ? (
                <div className="error_msg"><ErrorMessage  className="error_msg" name="password" /></div>
              ) : null}
                  {/* <ErrorMessage name="password" /> */}
                  <button
                    type="submit"
                    className={"btn btn-primary"}
                    disabled={props.isSubmitting}
                  >
                    Login
                  </button>
                </div>

                
              </Form>
            )}
          </Formik>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
