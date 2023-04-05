import  React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";

export const DefaultInput = (props) => {
    return (
      <>
        <div>
          <label htmlFor={props.id}>{props.name}</label>
          <input
            type={props.type}
            className="form-control default-input-class"
            placeholder={props.placeholder}
            name={props.name}
            id={props.id}
            ref={props.refr}
            value={props.value}
            onBlur={props.onBlur}
            onChange={props.onChange}
            required={props.required}
            readOnly={props.readOnly}
            disabled={props.disabled}
            maxLength={props.maxLength}
            multiple={props.multiple}
            accept={props.accept}
          />
          {/* <ErrorMessage name={props.name} /> */}
        </div>
      </>
    );
  };