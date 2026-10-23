import CheckboxForm from "./components/CheckboxForm";
import MultiStateForm from "./components/MultipleStateForm";
import SelectForm from "./components/SelectForm";
import SimpleInputForm from "./components/SimpleInputForm";
import SingleStateForm from "./components/SingleStateForm";
import SubmitForm from "./components/SubmitForm";
import TextAreaForm from "./components/TextAreaForm";

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