import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { init } from "emailjs-com";
init("uj7AIsyetfYhPuS2u");
import { useState } from "react";

export default function useFreeConsultant() {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    descripion: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setLoading] = useState(false);
  Swal.fire("Oops!", "Failed to submit form, Please Try again!", "error");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send("service_3w6ef7e", "template_t1ulwhe", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        descripion: formData.descripion,
      })
      .then(() => {
        setLoading(false);
        setFormData(initialState);
        Swal.fire(
          "Great!",
          "Free consultation booked successfully!",
          "success"
        );
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        Swal.fire("Oops!", "Failed to submit form, Please Try again!", "error");
      });
  };
  return { setFormData, isLoading, handleSubmit, formData };
}
