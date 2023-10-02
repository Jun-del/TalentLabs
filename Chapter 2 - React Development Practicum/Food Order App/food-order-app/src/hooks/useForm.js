import { useState } from "react";

export function useForm(initialValues, validationSchema) {
  // values = { fieldName: "value" }
  const [values, setValues] = useState(initialValues);

  // formErrors = { fieldName: "error message" }
  const [formErrors, setFormErrors] = useState({});

  function handleInputChange(fieldName, value) {
    setValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));

    // validation schema = { fieldName: { validate: () => {} } }
    const fieldValidation = validationSchema[fieldName];

    if (fieldValidation && typeof fieldValidation.validate === "function") {
      const error = fieldValidation.validate(value);

      if (error) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: error,
        }));
      } else {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: undefined,
        }));
      }
    }
  }

  function resetForm() {
    setValues(initialValues);
    setFormErrors({});
  }

  return {
    values,
    setValues,
    formErrors,
    setFormErrors,
    handleInputChange,
    resetForm,
  };
}
