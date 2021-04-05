import React, { useState } from "react";

function Form(props) {
  const [student, setStudent] = useState({
    name: "",
    gender: "",
    text: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setStudent((prevValue) => {
      if (name === "studentName") {
        return {
          name: value,
          gender: prevValue.gender,
          text: prevValue.text
        };
      } else if (name === "studentGender") {
        return {
          name: prevValue.name,
          gender: value,
          text: prevValue.text
        };
      } else if (name === "draftEmail") {
        return {
          name: prevValue.name,
          gender: prevValue.gender,
          text: value
        };
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onAdd(student);
    setStudent({
      name: "",
      gender: "",
      text: student.text
    });
  }

  return (
    <div className="Form">
      <h4> Create Your Email </h4>
      <form onSubmit={handleSubmit}>
        <input
          className="inputName"
          onChange={handleChange}
          placeholder="Student's name"
          value={student.name}
          name="studentName"
        />
        <select
          name="studentGender"
          placeholder="gender"
          onChange={handleChange}
          value={student.gender}
        >
          <option value="blank">...</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="other">Other</option>
        </select>
        <br />
        <textarea
          onChange={handleChange}
          name="draftEmail"
          value={student.text}
          cols="70"
          rows="10"
          placeholder="Enter draft email..."
        ></textarea>
        <br />
        <input className="submit" type="submit" placeholder="Submit" />
      </form>
    </div>
  );
}

export default Form;
