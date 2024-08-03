type InputComponentProps = {
  id: string;
  value: string;
  unit: "rem" | "px";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputComponent = (props: InputComponentProps) => {
  const { id, value, unit, onChange } = props;

  return (
    <div className="flex flex-col text-white justify-center items-center">
      <span className="font-semibold">{unit.toUpperCase()}</span>
      <input
        onChange={onChange}
        type="text"
        id={id}
        value={value}
        className="w-32 bg-shark-950 border border-shark-300 rounded py-2 px-4"
      />
    </div>
  );
};
