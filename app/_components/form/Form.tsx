"use client";
import { useState } from "react";
import Button from "@/app/_components/Button";
import Input from "@/app/_components/form/Input";
import Textarea from "@/app/_components/form/Textarea";
import axios from "axios";
import { contactFormSchema } from "@/app/_utils/contactForm.validation.utils";
import toast from "react-hot-toast";
import handleError from "@/app/_utils/error.utils";

const ContactForm = () => {
  
  const [formData, setFormData] = useState({
    ownerName: "",
    petName: "",
    email: "",
    phone: "",
    postcode: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit=async(e: any)=> {
    e.preventDefault();
    const loadingToast = toast.loading("Sending message...");
    try {
      await contactFormSchema.validate(formData, {abortEarly: false});

      const response = await axios.post("/api/book-now",formData)
      toast.dismiss(loadingToast);
      toast.success("Messgae sent successfully");
      setFormData({
    ownerName: "",
    petName: "",
    email: "",
    phone: "",
    postcode: "",
    message: "",
  })
  }catch(err:any){
    toast.dismiss(loadingToast);
    handleError(err)
  }

  return (
    <form
      name="book-now"
      className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
      onSubmit={handleSubmit}
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <Input
            inputLabel={"Your Name"}
            type={"text"}
            required
            value={formData.ownerName}
            onChange={handleChange}
            name={"ownerName"}
          />
          <Input
            inputLabel={"Pet(s) name"}
            type={"text"}
            required
            value={formData.petName}
            onChange={handleChange}
            name={"petName"}
          />

          <div className="sm:col-span-2">
            <Input
              inputLabel={"Email"}
              type={"email"}
              required
              value={formData.email}
              onChange={handleChange}
              name={"email"}
            />
          </div>

          <Input
            inputLabel={"Phone number"}
            type={"tel"}
            value={formData.phone}
            onChange={handleChange}
            name={"phone"}
          />
          <Input
            inputLabel={"Postcode"}
            type={"text"}
            required
            value={formData.postcode}
            onChange={handleChange}
            name={"postcode"}
          />

          <div className="sm:col-span-2">
            <Textarea
              textareaLabel={"Message"}
              rows={5}
              helperText="Please provide infromations as: how many pets, what dates and services do you require, and if you have desired house sitter."
              name={"message"}
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Button
            isLink={false}
            text={"Send message"}
            variant={2}
            btnType="submit"
          />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
