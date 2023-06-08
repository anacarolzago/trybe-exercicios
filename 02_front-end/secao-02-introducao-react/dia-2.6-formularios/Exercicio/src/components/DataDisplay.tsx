// src/components/DataDisplay.tsx
import { FormStateType } from '../types';

function DataDisplay({ formState }: { formState: FormStateType }) {
  const {
    name, email, cpf, address, city, countryState,
    addressType, resume, role, roleDescription,
  } = data;

  return (
    <div>
      <h2>Dados enviados</h2>
      <h3>Pessoal</h3>
      <div>
        Name:
        {' '}
        <span>
          { name }
        </span>
      </div>
      <div>
        Email:
        { ' ' }
        <span>
          { email }
        </span>
      </div>
      <div>
        CPF:
        { ' ' }
        <span>
          { cpf }
        </span>
      </div>
      <div>
        Endereço:
        { ' ' }
        <span>
          { address }
        </span>
      </div>
      <div>
        Cidade:
        { ' ' }
        <span>
          { city }
        </span>
      </div>
      <div>
        Estado:
        { ' ' }
        <span>
          { countryState }
        </span>
      </div>
      <div>
        Tipo de residência:
        { ' ' }
        <span>
          { addressType }
        </span>
      </div>
      <h3>Profissional</h3>
      <div>
        Currículo:
        { ' ' }
        <span>
          { resume }
        </span>
      </div>
      <div>
        Cargo:
        { ' ' }
        <span>
          { role }
        </span>
      </div>
      <div>
        Descrição do cargo:
        { ' ' }
        <span>
          { roleDescription }
        </span>
      </div>
    </div>
  );
}

export default DataDisplay;
