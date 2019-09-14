import React from "react";
//button to submit user input - send to api
function SaveButton(props) {
    return (
        <button className="save-btn" {...props} role="button" tabIndex="0">
        &#x2605;
      </button>
    );
}

export default SaveButton;