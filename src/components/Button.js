// membuat component simple
import React from "react";

const Button = ({
  handleOnClick,
  title
}) => {
  return (
    <button type="button" onClick={handleOnClick}> {title} </button>
  )
}

export default Button;