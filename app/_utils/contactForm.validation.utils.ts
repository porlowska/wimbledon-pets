import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  ownerName: yup
    .string()
    .min(2, "Must be at least 2 characters")
    .max(50, "Must be at most 50 characters")
    .required("Your name is required"),
  petName: yup
    .string()
    .min(2, "Must be at least 2 characters")
    .max(20, "Must be at most 20 characters")
    .required("Pet name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(
      /^\+?[0-9]{6,15}$/,
      "Phone number must be between 6 and 15 digits"
    ),
  postcode: yup
    .string()
    .required("Postcode is required")
    .min(3, "Must be at least 3 characters")
    .max(10, "Must be at most 10 characters"),
  message: yup.string().min(3, "Message must be at least 3 characters"),
});
