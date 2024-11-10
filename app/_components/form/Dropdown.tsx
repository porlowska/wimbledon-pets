type DropdownProps = {
  dropdownLabel: string;
  defaultValue: string;
  options: string[];
};
const Dropdown = ({ dropdownLabel, defaultValue, options }: DropdownProps) => {
  return (
    <div>
      <label
        htmlFor={dropdownLabel}
        className="block text-sm/6 font-medium text-gray-900"
      >
        {dropdownLabel}
      </label>
      <select
        id={dropdownLabel}
        name={dropdownLabel}
        defaultValue={defaultValue}
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary"
      >
        {options.map((option, index) => (
          <option key={index}> {option} </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;
