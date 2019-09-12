import React from "react";
//button to submit user input - send to api
function Button({ type = "default", className, children, onClick }) {
    return (
        <button onClick={onClick} className={["btn btn-danger", `btn-${type}`, className].join(" ")}>
            {children}
        </button>
    );
}

export default Button;