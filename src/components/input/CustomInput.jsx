import React from "react";
import { ErrorMessage, useField } from "formik";
import "./custominput.scss";

export const TextField = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={className ? className : `formControl `}>
      <label htmlFor={field.name}>{label}</label>
      <input
        {...field}
        {...props}
        className={`formInput shadow-none ${
          meta.touched && meta.error && "is-invalid errorInput"
        } `}
      />
      <div>
        <ErrorMessage
          component="div"
          className="errorMessage"
          name={field.name}
        />
      </div>
    </div>
  );
};

export const FormInput = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  error,
  children,
  label,
  ...props
}) => {
  return (
    <React.Fragment>
      <div className={`formControl `}>
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={className}
          style={error && { border: "solid 1px red" }}
        />
        {error && <div className="formError">{error}</div>}
      </div>
    </React.Fragment>
  );
};
