"use client";
import { useState } from "react";
import Button from "@/app/_components/Button";
import Input from "@/app/_components/form/Input";
import Textarea from "@/app/_components/form/Textarea";
import { contactFormSchema } from "@/app/_utils/contactForm.validation.utils";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    ownerName: "",
    petName: "",
    email: "",
    phone: "",
    postcode: "",
    message: "",
  });

  function handleSubmit(e: any) {
    e.preventDeafult;
  }

  return (
    <form
      name="book-now"
      className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <Input
            inputLabel={"Your Name"}
            type={"text"}
            required
            value={formData.ownerName}
            onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Input inputLabel={"Pet(s) name"} type={"text"} required />

          <div className="sm:col-span-2">
            <Input inputLabel={"Email"} type={"email"} required />
          </div>

          <Input inputLabel={"Phone number"} type={"tel"} />
          <Input inputLabel={"Postcode"} type={"text"} required />

          <div className="sm:col-span-2">
            <Textarea
              textareaLabel={"Message"}
              rows={5}
              helperText="Please provide infromations as: how many pets, what dates and services do you require, and if you have desired house sitter."
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
