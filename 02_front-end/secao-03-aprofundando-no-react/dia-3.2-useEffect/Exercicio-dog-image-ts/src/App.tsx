import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [imageURL, setImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => setImageURL(data.message))
      .then(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchDog;
  }, []);

  // se está carregando, vamos apenas mostrar o Loading
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('imageUrl', imageURL);
      const dogBreed = imageURL.split('/')[4];
      alert(dogBreed);
    }
  }, [imageURL, isLoading]);

  useEffect(() => {
    const localStorageUrl = localStorage.getItem('imageUrl');
    if (localStorageUrl) {
      setImageURL(localStorageUrl);
      setIsLoading(false);
    } else {
      fetchDog();
    }
  }, []);

  return (
    <div>
      <h1>Doguinhos</h1>
      {/* Adiciona um botão para buscar mais um _doguinho_. */}
      <button type="button" onClick={ fetchDog }>
        Novo doguinho!

      </button>
      <div>
        <img src={ imageURL } alt="Dog aleatório" />
      </div>
    </div>
  );
}

export default App;
