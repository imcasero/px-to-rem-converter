import { useForm, Controller } from "react-hook-form";
import { InputComponent } from "./Input.component";
import { ArrowComponent } from "./Arrow.component";

const roundToDecimalPlaces = (num: number, places = 3) => {
  if (isNaN(num)) return 0;
  return parseFloat(num.toFixed(places));
};

export const FormComponent = () => {
  const defaultValues = {
    px: 16,
    rem: 1,
  };

  const { control, setValue } = useForm({
    defaultValues,
  });

  const handleChangePx = (value: string) => {
    const numValue = parseFloat(value.trim());
    if (isNaN(numValue) || numValue < 0) {
      setValue("rem", 0, { shouldDirty: true });
    } else {
      setValue("rem", roundToDecimalPlaces(numValue / 16), {
        shouldDirty: true,
      });
    }
  };

  const handleChangeRem = (value: string) => {
    const numValue = parseFloat(value.trim());
    if (isNaN(numValue) || numValue < 0) {
      setValue("px", 0, { shouldDirty: true });
    } else {
      setValue("px", roundToDecimalPlaces(numValue * 16), {
        shouldDirty: true,
      });
    }
  };

  return (
    <form className="flex gap-6 items-center justify-center w-full">
      <Controller
        name="px"
        control={control}
        render={({ field }) => (
          <InputComponent
            id="px"
            value={field.value?.toString() || ""}
            unit="px"
            onChange={(e) => {
              const value = e.target.value;
              field.onChange(value);
              handleChangePx(value);
            }}
          />
        )}
      />
      <div className="h-full flex items-end">
        <ArrowComponent width="2rem" height="2rem" className="mb-1" />
      </div>
      <Controller
        name="rem"
        control={control}
        render={({ field }) => (
          <InputComponent
            id="rem"
            value={field.value?.toString() || ""}
            unit="rem"
            onChange={(e) => {
              const value = e.target.value;
              field.onChange(value);
              handleChangeRem(value);
            }}
          />
        )}
      />
    </form>
  );
};
