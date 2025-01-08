import { sendEmail } from "@/app/_utils/sendGrid.utils";
import handleServerError from "@/app/_utils/serverErr.utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    //body
    const body = await req.json();
    console.log("body", body);

    //middleware - validation with yup
    //try and catch block here, frontend error

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
