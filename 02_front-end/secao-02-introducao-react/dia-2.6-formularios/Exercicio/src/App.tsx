import { useState } from 'react';
import { FormStateType } from './types';

import AddressForm from './components/AddressForm';
import PersonalForm from './components/PersonalForm';
import ProfessionalForm from './components/ProfessionalForm';
import DataDisplay from './components/DataDisplay';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: 'Acre',
  addressType: 'Casa',
  resume: '',
  role: '',
  roleDescription: '',
} as FormStateType;

type ChangeEventType = React
  .ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

function App() {
  const [formState, setFormState] = useState<FormStateType>(INITIAL_STATE);
  const [displayData, setDisplayData] = useState(false);

  const handleChange = (event: ChangeEventType) => {
    const { target } = event;
    const { name, value } = target;

    const newValue = name === 'address' ? value.replace(/[^\w\s]/g, '') : value;

    setFormState((previousState) => ({
      ...previousState,
      [name]: newValue,
    }));
  };

  const handleBlur = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = target;

    if (name === 'city' && /^\d/.test(value)) {
      setFormState((previousState) => ({
        ...previousState,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayData(formState);
  };

  const handleClear = () => {
    setFormState(INITIAL_STATE);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <PersonalForm onChange={ handleChange } formState={ formState } />
      <AddressForm
        onChange={ handleChange }
        onBlur={ handleBlur }
        formState={ formState }
      />
      <ProfessionalForm
        onChange={ handleChange }
        formState={ formState }
      />
      <button type="submit">Enviar</button>
      { displayData && <DataDisplay data={ displayData } /> }
      <button type="reset" onClick={ handleClear }>Limpar</button>
    </form>
  );
}
