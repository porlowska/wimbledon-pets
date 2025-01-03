import Button from "@/app/_components/Button";
import Input from "@/app/_components/form/Input";
import Textarea from "@/app/_components/form/Textarea";
const ContactForm = () => {
  return (
    <form
      //data-netlify="true"
      name="book-now"
      //action="#"
      //method="POST"
      className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
    >
      <input type="hidden" name="book-now" value="book-now" />
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <Input inputLabel={"Your Name"} type={"text"} />
          <Input inputLabel={"Pet(s) name"} type={"text"} />

          <div className="sm:col-span-2">
            <Input inputLabel={"Email"} type={"email"} />
          </div>

          <Input inputLabel={"Phone number"} type={"tel"} />
          <Input inputLabel={"Postcode"} type={"text"} />

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