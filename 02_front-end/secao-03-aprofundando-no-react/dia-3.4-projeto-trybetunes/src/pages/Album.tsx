import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../services/musicsAPI';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';

type AlbumType = {
  artistName: string;
  collectionName: string;
};

type SongType = {
  trackId: number,
  trackName: string,
  previewUrl: string,
  kind: string;
};

function Album() {
  const [album, setAlbum] = useState<AlbumType>();
  const [musicas, setMusicas] = useState<SongType[]>();
  const [carregando, setCarregando] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    const pegaMusicas = async () => {
      if (!id) {
        return;
      }
      setCarregando(true);
      const response = await getMusics(id);
      setAlbum(response[0]);
      const musics = response.slice(1);
      setMusicas(musics as SongType[]);
      setCarregando(false);
    };

    pegaMusicas();
  }, [id]);

  if (carregando) {
    return <Loading />;
  }

  return (
    <section>
      <h2 data-testid="artist-name">{album?.artistName}</h2>
      <h3 data-testid="album-name">{album?.collectionName}</h3>
      <ul>
        {musicas?.map((musica) => (<MusicCard
          key={ musica.trackId }
          trackId={ musica.trackId }
          trackName={ musica.trackName }
          previewUrl={ musica.previewUrl }
        />))}
      </ul>
    </section>
  );
}

export default Album;
