import { NextResponse } from "next/server";

const handleServerError = (err: any) => {
  //SendGrid Error
  const code = err.response?.statusCode;
  switch (code) {
    case 400:
      return NextResponse.json({ error: err.message }, { status: 400 });
    case 401:
      return NextResponse.json({ error: err.message }, { status: 401 });
    case 403:
      return NextResponse.json({ error: err.message }, { status: 403 });
    default: //500 error developers need to be informed
      return NextResponse.json(
        { error: "Internal Sercer Error" },
        { status: 500 }
      );
  }
};

export default handleServerError;
