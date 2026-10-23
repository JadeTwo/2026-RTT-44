import CheckboxForm from "./components/CheckboxForm.tsx";
import MultiStateForm from "./components/MultipleStateForm.tsx";
import SelectForm from "./components/SelectForm.tsx";
import SimpleInputForm from "./components/SimpleInputForm.tsx";
import SingleStateForm from "./components/SingleStateForm.tsx";
import SubmitForm from "./components/SubmitForm.tsx";
import TextAreaForm from "./components/TextAreaForm.tsx";

export default function App() {

  return (
    <div>
      <SingleStateForm />
      <MultiStateForm />
      <SubmitForm />
      <CheckboxForm />
      <SimpleInputForm />
      <TextAreaForm />
      <SelectForm />
    </div>
  )
}