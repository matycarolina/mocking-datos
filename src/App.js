import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/users/list/all-data").then(function (response) {
      setData(response.data);
    });
  }, []);

  return (
    <table>
      <tr>
        <th>Nombre</th>
        <th>Email</th>
        <th>Username</th>
      </tr>
      {data.map((user) => {
        return (
          <tr key={user.id}>
            <td>{user.fullName}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default App;
