/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { useId } from "react";
import { InputRoot, Label, Input, Line } from "./styles";

// eslint-disable-next-line react/prop-types
function TextInput({ label, register, name, ...props }) {
  const id = useId();

  console.log(props)

  return (
    <InputRoot>
      {
        label && <Label id={id}> {label} </Label>
      }
      <Input id={id} {...props} {...register(name)} />
      <Line />
    </InputRoot>
  )
}

export default TextInput;
