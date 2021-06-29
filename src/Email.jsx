import React from "react";


function Email(props) {
  let CapitalName = props.name[0].toUpperCase() + props.name.slice(1);

  function updatePronoun(name) {
    if (name === "Female") {
      return "she";
    } else if (name === "Male") {
      return "he";
    } else {
      return "they";
    }
  }

  let pronoun = updatePronoun(props.gender);

  function updatePossessivePronoun(name) {
    if (name === "Female") {
      return "her";
    } else if (name === "Male") {
      return "his";
    } else {
      return "their";
    }
  }

  let possivePronoun = updatePossessivePronoun(props.gender);

  function returnInputs(text) {
    let updatedText = text
      .replace("{name}", CapitalName)
      .replace("{pronoun}", pronoun)
      .replace("{possessivePronoun}", possivePronoun);
    return updatedText;
  }

  return (
    <div className="Email">
      <h5>{CapitalName}</h5>
      <p> {returnInputs(props.text)} </p>
    </div>
  );
}

export default Email;
