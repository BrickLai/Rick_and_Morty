import Buttons from '../components/Buttons';
import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Characters() {
  const [characters, setCharacters] = useState([]);
  
  const navigate = useNavigate();
  
  const sort = () => {
    const sortCharacters = [...characters];
    
    sortCharacters.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    
    setCharacters(sortCharacters);
  };
  
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character`);
        setCharacters(data.results);
      } catch (error) {
        console.log(error);
      };
    };
    
    getData();
  }, []);
  
  return (
    <>
    <Banner />
      <Buttons sort={sort} />
      <div className='grid'>
        {characters.map(character => (
          <div
            key={character.id}
            className='character'
          >
            <figure>
              <img src={character.image} alt={character.name} />
            </figure>
            <div className='character-info'>
              <h2>{character.name}</h2>
              <p>{character.location.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Characters;