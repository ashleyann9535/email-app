import React, {useState} from "react";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import {CopyToClipboard} from 'react-copy-to-clipboard';


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

  let pPronoun = updatePossessivePronoun(props.gender);

  function returnInputs(text) {
    let updatedText = text
      .replace("{name}", CapitalName)
      .replace("{pronoun}", pronoun)
      .replace("{possessivePronoun}", pPronoun);
    return updatedText;
  }

  const [copy, setCopy] = useState(false);

  function makeCopy(){
    setCopy(true);
  }

   

  return (
    <div className="Email">
      <h5>{CapitalName}</h5>
      <p > {returnInputs(props.text)} </p>
      <CopyToClipboard text={returnInputs(props.text)} onCopy={makeCopy}>
      <button ><FileCopyIcon /></button>
      </CopyToClipboard>
    </div>
  );
}

export default Email;
