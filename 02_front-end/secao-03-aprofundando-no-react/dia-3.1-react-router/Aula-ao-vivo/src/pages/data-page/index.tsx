import { useParams, useNavigate } from 'react-router-dom';
import './data-page.css';

function DataPage() {
  const { dataType } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="data_page_container">
      <h1>Dados do usuário</h1>
      Tipo de dados:
      {' '}
      {dataType}
      <button className="back__button" onClick={ handleBack }>
        Voltar
      </button>
    </div>
  );
}

export default DataPage;
