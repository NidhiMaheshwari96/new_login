import React from "react";
import { DefaultInput } from "../../component/common/input";
import { useState, useEffect, useRef } from "react";
import { Post, get, put } from "../../component/utils/api";
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Table,
  Pagination,
} from "react-bootstrap";
import { validateVendorAdd } from "../../component/utils/validates";

import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";

export default function VendorAdd(props) {
  const navigate = useNavigate();

  const { id } = useParams();
  const formRef = useRef(null);
  console.log(id);
  useEffect(() => {
    getSingle();
  }, []);

  const getSingle = () => {
    if (id)
      get(`https://dummy.restapiexample.com/api/v1/employee/${id}`).then(
        (data) => handleSingleData(data)
      );
  };

  const handleSingleData = (data) => {
    console.log(data);
    formRef.current.setFieldValue("id", data.id);
    formRef.current.setFieldValue("title", data.employee_name);
    formRef.current.setFieldValue("price", data.employee_salary);
    formRef.current.setFieldValue("stock", data.employee_age);
  };

  const submit = (values) => {
    let formData = {
      id: values.id,
      employee_name: values.employee_name,
      employee_salary: values.employee_salary,
      employee_age: employee_age,
    };

    if (id)
      put(
        `${`https://dummy.restapiexample.com/api/v1/update/${id}`}`,
        formData,
        1
      ).then((data) => handleResponse(data));
    else
      Post(
        `${"https://dummy.restapiexample.com/api/v1/create"}`,
        formData
      ).then((data) => handleResponse(data));
  };

  const handleResponse = (data) => {
    if (!id) navigator.goBack();
  };

  return (
    <>
      <Container className="container" fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <h1>{id ? "Edit" : "Add"}</h1>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md="2"></Col>
                  <Col md="8">
                    <Formik
                      initialValues={{
                        id: "",
                        employee_name: "",
                        employee_salary: "",
                        employee_age: "",
                      }}
                      validate={validateVendorAdd}
                      onSubmit={(values, { setSubmitting }) => {
                        submit(values);
                        setSubmitting(false);
                      }}
                      innerRef={formRef}
                    >
                      {(props) => (
                        <form onSubmit={props.handleSubmit}>
                          <DefaultInput
                            type={"id"}
                            placeholder={"id"}
                            name={"id"}
                            value={props.values.id}
                            onChange={props.handleChange("id")}
                            onBlur={() => props.setFieldTouched("id", true)}
                            error={props.touched.id && props.errors.id}
                          />

                          <DefaultInput
                            type={"employee_name"}
                            placeholder={"employee_name"}
                            name={"employee_name"}
                            value={props.values.title}
                            onChange={props.handleChange("employee_name")}
                            onBlur={() => props.setFieldTouched("employee_name", true)}
                            error={props.touched.employee_name && props.errors.employee_name}
                          />

                          <DefaultInput
                            type={"employee_salary"}
                            placeholder={"employee_salary"}
                            name={"employee_salary"}
                            value={props.values.price}
                            onChange={props.handleChange("employee_salary")}
                            onBlur={() => props.setFieldTouched("employee_salary", true)}
                            error={props.touched.employee_salary && props.errors.employee_salary}
                          />

                          <DefaultInput
                            type={"employee_age"}
                            placeholder={"employee_age"}
                            name={"employee_age"}
                            value={props.values.stock}
                            onChange={props.handleChange("employee_age")}
                            onBlur={() => props.setFieldTouched("employee_age", true)}
                            error={props.touched.employee_age && props.errors.employee_age}
                          />

                          <Row>
                            <Col md="3"></Col>
                            <Col md="2">
                              <button
                                type="submit"
                                className={"btn btn-success"}
                                disabled={props.isSubmitting}
                              >
                                Submit
                              </button>
                            </Col>
                            {/* <Col md="2">
                            <button
                              type="button"
                              className={"btn btn-warning"}
                              onClick={() => navigate.goBack()}
                            >
                              Go Back
                            </button>
                          </Col> */}
                          </Row>
                        </form>
                      )}
                    </Formik>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
