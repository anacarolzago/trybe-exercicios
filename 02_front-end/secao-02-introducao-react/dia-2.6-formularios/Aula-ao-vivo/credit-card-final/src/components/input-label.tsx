import React from "react";
import "./input-label.css";

type InputLabelProps = {
  id: string;
  value: string;
  title: string;
  type: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputLabel(props: InputLabelProps) {
  const {
    id,
    value,
    title,
    type,
    placeholder,
    onChange = () => {},
  } = props;

  return (
    <div className="form__group">
      <label htmlFor={id}>{title}</label>
      <input
        className="form__control"
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputLabel;
