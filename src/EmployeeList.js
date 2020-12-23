import React, { useRef, useState } from "react";
import Employee from "./Employee";
import "./Employee.css";

function EmployeesList() {
  let [Employees, setEmployees] = useState([
    {
      name: "Yazeen Jasim",
      email: "test@mail.com",
      phone: "070000000",
      skills: "React, Javascript, C++, Java, Python, GCP",
      profilePicture: "https://i.imgur.com/t9HFQvX.png",
    },
    {
      name: "Geralt of Rivia",
      email: "test@mail.com",
      phone: "070000000",
      skills: "Angular, CSS, HTML, Javascript",
      profilePicture: "https://i.imgur.com/Q9qFt3m.png",
    },
    {
      name: "Yennefer Of Vengerberg",
      email: "test@mail.com",
      phone: "070000000",
      skills: "Go, python, Nodejs",
      profilePicture: "https://i.imgur.com/ebHfuth.png",
    },
  ]);

  function AddEmployee() {
    setEmployees(function (prevState) {
      console.log(prevState);
      return [
        ...prevState,
        {
          name: "Triss Merigold",
          email: "yazeenj@outlook.com",
          phone: "070000000",
          skills: "Vue, firebase, git, c#",
          profilePicture: "https://i.imgur.com/TUhCrsY.png",
        },
      ];
    });
  }

  return (
    <>
      <h3>Employee List</h3>
      <button className="button" onClick={AddEmployee}>
        Add Employee
      </button>
      {Employees.map(function ({ name, email, phone, skills, profilePicture }) {
        return (
          <Employee
            key={phone} //should be unique
            name={name}
            email={email}
            phone={phone}
            skills={skills}
            profilePicture={profilePicture}
          />
        );
      })}
    </>
  );
}



export default EmployeesList;
