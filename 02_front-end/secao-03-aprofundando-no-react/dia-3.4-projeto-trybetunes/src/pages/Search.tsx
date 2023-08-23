import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';
import { AlbumType } from '../types';

type Props = {
  setArtistaPesquisado: (artista: string) => void
  setListaAlbum: (albuns: AlbumType[]) => void
  artistaPesquisado: string
  listaAlbum: AlbumType[]
};

function Search({
  artistaPesquisado, listaAlbum, setArtistaPesquisado, setListaAlbum } : Props) {
  const [name, setName] = useState<string>('');
  const [carregando, setCarregando] = useState<boolean>(false);

  const habilitarBotao = name.length >= 2;

  const handleSubmit = async (): Promise<void> => {
    setCarregando(true);
    const response = await searchAlbumsAPI(name);
    setArtistaPesquisado(name);
    setName('');
    setCarregando(false);
    setListaAlbum(response);
  };

  return (
    <section>
      {carregando ? <Loading /> : (
        <form onSubmit={ handleSubmit }>
          <label htmlFor="nomeArtista">Nome do artista</label>
          <input
            data-testid="search-artist-input"
            type="text"
            id="nomeArtista"
            value={ name }
            onChange={ (
              e: ChangeEvent<HTMLInputElement>,
            ) => setName(e.target.value) }
          />

          <button
            data-testid="search-artist-button"
            disabled={ !habilitarBotao }
            type="submit"
          >
            Pesquisar

          </button>

        </form>)}
      { artistaPesquisado && listaAlbum.length > 0 && (
        <div>
          <p>
            Resultado de álbuns de:
            {' '}
            { artistaPesquisado }
          </p>
          <ul>
            {listaAlbum.map((album) => (
              <li key={ album.collectionId }>
                <Link
                  to={ `/album/${album.collectionId}` }
                  data-testid={ `link-to-album-${album.collectionId}` }
                >
                  { album.collectionName }
                </Link>
              </li>))}
          </ul>
        </div>)}

      { artistaPesquisado && listaAlbum.length === 0 && (
        <p>Nenhum álbum foi encontrado</p>
      )}

    </section>
  );
}

export default Search;
