import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import { AlbumType } from './types';
import Layout from './components/Layout';

function App() {
  const [artista, setArtista] = useState<string>('');
  const [lista, setLista] = useState<AlbumType[]>([]);

  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route element={ <Layout /> }>

        <Route
          path="/search"
          element={ <Search
            artistaPesquisado={ artista }
            listaAlbum={ lista }
            setArtistaPesquisado={ setArtista }
            setListaAlbum={ setLista }
          /> }
        />

        <Route path="/album/:id" element={ <Album /> } />
      </Route>
    </Routes>
  );
}

export default App;
