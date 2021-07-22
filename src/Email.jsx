import React, { useState } from "react";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CloseIcon from "@material-ui/icons/Close";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from '@material-ui/icons/CheckBox';

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

  function makeFirstUpper(p) {
    let str = p;
    let re = /([.]\s+)(.)|([?]\s+)(.)|([!]\s+)(.)/g;

    let newStr = str.replace(re, (match) => {
      console.log({ match });
      return match.toUpperCase();
    });

    return newStr;
  }

  const [copy, setCopy] = useState(false);

  function makeCopy() {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  }

  function handleDelete() {
    props.onDelete(props.id);
  }

  const [done, setDone] = useState(false);

  function handleComplete() {
    setDone(!done); 
  }

  return (
    <div className="Email">
      <button className="close" onClick={handleDelete}>
        <CloseIcon />
      </button>
      <span className="complete" onClick={handleComplete}>
        {done ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon />}
      </span>
      <h5>{CapitalName}</h5>
      <p> {makeFirstUpper(returnInputs(props.text))} </p>
      <CopyToClipboard text={returnInputs(props.text)} onCopy={makeCopy}>
        <button className="copy">{copy ? "Copied!" : <FileCopyIcon />}</button>
      </CopyToClipboard>
    </div>
  );
}

export default Email;
