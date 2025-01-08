import toast from "react-hot-toast";

type ErrorType = {
  code: number;
  name: string;
  message?: string;
  stack?: string;
};
const handleError = (err: any) => {
  const errDescription: ErrorType = {
    code: err.status || 500,
    name: err.name || "Unknown Error",
    message: err.message || "An Unknown Error has occured",
    stack: err.stack || "No stack trace",
  };
  switch (errDescription.code) {
    case 400:
      toast.error(
        errDescription.message ||
          "Ups! Someting went wrong, please try again later"
      );
      break;
    case 401:
      toast.error("Wrong username or password! Please try again later!");
      break;
    case 403:
      toast.error("Ups! Someting went wrong, please try again later");
      break;
    default: //500 error developers need to be informed
      toast.error(
        "Ups! Someting went really wrong, please contact our develoeprs"
      );
     console.error("Error Details:", err);
      break;
  }
};

export default handleError;
