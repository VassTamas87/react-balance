import React from "react";
import { useField, ErrorMessage } from "formik";

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={`mb-3 form-control ${
          meta.touched && meta.error ? "is-invalid" : ""
        }`}
      />
      <ErrorMessage
        name={props.name}
        className="invalid-feedback"
        component="div"
      />
    </>
  );
};

export default InputField;
