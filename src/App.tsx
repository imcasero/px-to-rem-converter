import { FormComponent } from "./components/Form.component";

function App() {
  return (
    <main className="w-full flex justify-center items-center h-screen flex-col gap-8 text-white">
      <h1 className="text-shark-50 text-3xl font-semibold ">
        PX to REM converter
      </h1>
      <FormComponent />
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="font-light text-sm text-shark-200">
          Rem is a relative unit in CSS based on the font size of the root
          element htlm
        </p>
        <p className="font-light text-sm text-shark-200">1rem = 16px</p>
      </div>
    </main>
  );
}

export default App;
