import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/users/list/all-data").then(function (response) {
      setData(response.data);
    });
  }, []);

  return (
    <Table striped responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => {
          return (
            <tr>
              <th scope="row">{user.id}</th>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default App;
