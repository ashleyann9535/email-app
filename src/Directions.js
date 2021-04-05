import React from "react";

function Directions() {
  return (
    <div className="Directions">
      <h4> How to make your email </h4>
      <ol>
        <li> Type your student's name </li>
        <li> Select your student's gender </li>
        <li>
          {" "}
          Create your email. When needing to input a name use {"{name}"} in its
          place. When inputting a pronoun, use {"{pronoun}"}. For possessive
          pronouns, input {"{possessivePronoun}"}.
        </li>
      </ol>
    </div>
  );
}

export default Directions;
