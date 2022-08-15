import React from 'react'
import Input from "@material-ui/core/Input";

const style = {
    root: { padding: "5px", backgroundColor: "#434343", color: "#fff" }
  };

export default function InputTodo(props, variant) {
  return (
    <Input
      style={style.root}
      {...props}
      variant={variant}
      placeholder="Type..."
    />
  )
}
