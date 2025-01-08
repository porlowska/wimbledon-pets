import { sendEmail } from "@/app/_utils/sendGrid.utils";
import { NextResponse } from "next/server";

export async function POST(req: Request,) {
    //body
    const body = await req.json();
    console.log("body",body);

    //middleware - validation with yup

    const { ownerName, petName, email, phone, postcode, message } = body;

    await sendEmail({
      to: email,
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
    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
}