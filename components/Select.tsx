type SelectProps = {
  defaultValue: string;
  disabledOption: string;
  options: string[];
};

export default function Select({
  defaultValue,
  disabledOption,
  options,
}: SelectProps) {
  return (
    <select className="w-auto form-select" defaultValue={defaultValue}>
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
