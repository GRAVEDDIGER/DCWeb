import { useState } from "react";
const initialForm = { title: "", description: "", images: [] };

function useForm() {
  const [formData, setFormData] = useState(initialForm);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return [formData, handleChange, setFormData];
}

export default useForm;
