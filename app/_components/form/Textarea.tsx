type TextareaProps = {
  textareaLabel: string;
  rows: number;
  defaultValue?: string | "";
};
const Textarea= ({textareaLabel, defaultValue, rows}:TextareaProps) => {
  return (
    <div>
      <label
        htmlFor={textareaLabel}
        className="block text-sm/6 font-medium text-gray-900"
      >
        {textareaLabel}
      </label>
      <div className="mt-2">
        <textarea
          id={textareaLabel}
          name={textareaLabel}
          rows={rows}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          defaultValue={defaultValue}
        />
      </div>
    </div>
  );
}
export default Textarea;
