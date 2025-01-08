import handleError from "@/app/_utils/error.utils";
import { sendEmail } from "@/app/_utils/sendGrid.utils";
import handleServerError from "@/app/_utils/serverErr.utils";
import { NextResponse } from "next/server";
import * as yup from "yup";

const contactFormSchema = yup.object().shape({
  ownerName: yup
    .string()
    .min(2, "Must be at least 2 characters")
    .max(50, "Must be at most 50 characters")
    .required("Your name is required"),
  petName: yup
    .string()
    .min(2, "Must be at least 2 characters")
    .max(20, "Must be at most 20 characters")
    .required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^\+?[0-9]{6,15}$/, "Phone number must be between 6 and 15 digits"),
  postcode: yup
    .string()
    .required("Postcode is required")
    .min(3, "Must be at least 3 characters")
    .max(10, "Must be at most 10 characters"),
  message: yup.string().min(3, "Message must be at least 3 characters"),
});

export async function POST(req: Request) {
  try {
    //body
    const body = await req.json();
    console.log("body", body);

    //middleware - validation with yup
    await contactFormSchema.validate(body, { abortEarly: false });

    const { ownerName, petName, email, phone, postcode, message } = body;

    await sendEmail({
      to: [
        email,
        process.env.ADMIN_EMAIL as string,
        process.env.COMPANY_EMAIL as string,
      ],
      templateId: "d-b3ebab22cbbe4a0e95832cd770a48970",
      dynamicTemplateData: {
        ownerName,
        petName,
        email,
        phone,
        postcode,
        message,
      },
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err: any) {
    return handleServerError(err);
  }
}
