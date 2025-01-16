import { NextResponse } from "next/server";

const handleServerError = (err: any) => {

  const code = err.response?.statusCode || 500;

  if (err.name === "ValidationError") {
    // Handle Yup validation errors
    return NextResponse.json(
      { error: err.message, details: err.errors || [] },
      { status: 400 }
    );
  }

  switch (code) {
    case 400:
      return NextResponse.json({ error: err.message }, { status: 400 });
    case 401:
      return NextResponse.json({ error: err.message }, { status: 401 });
    case 403:
      return NextResponse.json({ error: err.message }, { status: 403 });
    default: //500 error developers need to be informed
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
  }
};

export default handleServerError;
