import CheckboxForm from "./components/CheckboxForm";
import SelectForm from "./components/SelectForm";
import SimpleInputForm from "./components/SimpleInputForm";
import TextAreaForm from "./components/TextAreaForm";

export default function App() {
  return (
    <div>
      <CheckboxForm />
      <SimpleInputForm />
      <TextAreaForm />
      <SelectForm />
    </div>
  )
}