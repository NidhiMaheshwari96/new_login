import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Button, Card, Form, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Post } from "../api/api";
import { get } from "../api/api";
import { deleteApi } from "../api/api";

function Employee() {
  const [userData, setuserData] = useState([]);

  useEffect(() => {
    get("https://dummy.restapiexample.com/api/v1/employees")
      .then((data) => {
        handleResponse(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleResponse = (data) => {
    setuserData(data);
  };

  const deleteData = (id) => {
    if (window.confirm("Are you sure")) {
      let formData = {
        id: id,
      };

      deleteApi(
        `https://dummy.restapiexample.com/public/api/v1/delete/${id}`,
        formData
      ).then((data) => {
        handleDelete(data);
      });
    }
  };

  const handleDelete = (data) => {
    setuserData(
      userData.filter((product) => {
        return product.id !== data.id;
      })
    );
  };

  return (
    <div className="home">
      <div className="homeContainer">
        <Card>
          <div className="datatable">
            <div className="datatableTitle">
              Add New Admin
              <Link to="/employee/add" className="link">
                Add New
              </Link>
            </div>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>employee_name</th>
                  <th>employee_salary</th>
                  <th>employee_age</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(userData) &&
                  userData.map((ele) => {
                    return (
                      <tr key={ele.id}>
                        <td>{ele.id}</td>
                        <td>{ele.employee_name}</td>
                        <td>{ele.employee_salary}</td>
                        <td>{ele.employee_age}</td>
                        <td>
                          <ButtonGroup aria-label="Basic example">
                            <Link
                              className="btn btn-primary"
                              to={`/employee/edit/${ele.id}`}
                            >
                              Edit
                            </Link>
                            <Button
                              size="sm"
                              variant="danger"
                              onClick={() => deleteData(ele.id)}
                            >
                              Delete
                            </Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Employee;
