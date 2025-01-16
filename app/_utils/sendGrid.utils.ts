import sgMail from "@sendgrid/mail";
import handleServerError from "./serverErr.utils";
import toast from "react-hot-toast";

type sendGridType = {
  to: string | string[];
  templateId: string;
  dynamicTemplateData: DynamicTemplateType;
};
type DynamicTemplateType = {
  [key: string]: string | number;
};

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export const sendEmail = async ({
  to,
  templateId,
  dynamicTemplateData,
}: sendGridType) => {
  try {
    const msg = {
      to,
      from: process.env.COMPANY_EMAIL as string,
      templateId,
      dynamic_template_data: dynamicTemplateData,
    };

    await sgMail.send(msg);
  } catch (err: any) {
    handleServerError(err);
  }
};
