import { useState } from 'react';
import checkedHeartImg from '../images/checked_heart.png';
import emptyHeartImg from '../images/empty_heart.png';

type Props = {
  trackId: number,
  trackName: string,
  previewUrl: string,
};

function MusicCard({ trackId, trackName, previewUrl }:Props) {
  const [favorita, setFavorita] = useState<boolean>(false);

  const imagemCoracao = (<img
    src={ favorita ? checkedHeartImg : emptyHeartImg }
    alt="favorite"
  />);

  // const imagemCoracao = favorita
  //   ? <img src={ checkedHeartImg } alt="favorite" />
  //   : <img src={ emptyHeartImg } alt="favorite" />;

  return (
    <li>
      <h5>{ trackId }</h5>
      <h5>{ trackName }</h5>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        {' '}
        <code>audio</code>
        .
      </audio>

      <label
        data-testid={ `checkbox-music-${trackId}` }
      >
        <input
          id={ `checkbox-music-${trackId}` }
          type="checkbox"
          onChange={ (
            e: React.ChangeEvent<HTMLInputElement>,
          ) => setFavorita(e.target.checked) }
        />
        { imagemCoracao }
      </label>
    </li>
  );
}

export default MusicCard;
