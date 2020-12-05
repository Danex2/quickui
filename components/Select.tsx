type SelectProps = {
  disabledOption: string;
  options: string[];
  onChange: any;
};

export default function Select({
  disabledOption,
  options,
  onChange,
}: SelectProps) {
  return (
    <select
      className="w-auto form-select"
      defaultValue={"DEFAULT"}
      onChange={onChange}
    >
      <option value="DEFAULT" disabled>
        {disabledOption}
      </option>
      {options.map((option) => (
        <option key={option} value={option.toUpperCase()}>
          {option.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
