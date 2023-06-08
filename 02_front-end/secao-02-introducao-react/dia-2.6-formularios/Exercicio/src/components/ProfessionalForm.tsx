import { useState } from 'react';
import { FormStateType } from '../types';

type ProfessionalFormProps = {
  formState: FormStateType,
  onChange: React.ChangeEventHandler
};

function ProfessionalForm(props: ProfessionalFormProps) {
  const { formState, onChange } = props;
  const [alertWasDisplayed, setAlertWasDisplayed] = useState(false);

  const handleMouseEnter = () => {
    if (!alertWasDisplayed) {
      global.alert('Preencha com cuidado esta informação.');
      setAlertWasDisplayed(true);
    }
  };

  const {
    resume,
    role,
    roleDescription,
  } = formState;
  return (
    <fieldset>
      <legend>Dados profissionais:</legend>
      <label htmlFor="resume">
        Resumo do currículo
        <textarea
          name="resume"
          id="resume"
          maxLength="1000"
          required
          value={ resume }
          onChange={ onChange }
        />
      </label>
      <label htmlFor="role">
        Cargo
        <input
          type="text"
          name="role"
          id="role"
          maxLength="40"
          required
          value={ role }
          onChange={ onChange }
          onMouseEnter={ handleMouseEnter }
        />
      </label>
      <label htmlFor="roleDescription">
        Descrição do cargo
        <textarea
          name="roleDescription"
          id="roleDescription"
          maxLength="500"
          required
          value={ roleDescription }
          onChange={ onChange }
        />
      </label>
    </fieldset>
  );
}

export default ProfessionalForm;
