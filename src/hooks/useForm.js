import { useState } from "react";

export default function useForm(initialValues) {
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const resetForm = () => {
    setForm(initialValues);
    setErrors({});
  };

  return { form, errors, setErrors, handleChange, resetForm };
}