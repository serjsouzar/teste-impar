import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Card, SearchStyle } from "./styles";

interface CardProps {
  newCardModalOpen: () => void;
}

interface PokemonProps {
  name: string;
  sprites: any;
}

export function Cards({ newCardModalOpen }: CardProps) {
  const [allPokemon, setAllPokemon] = useState<PokemonProps[]>([]);
  const [pokemon, setPokemon] = useState<PokemonProps[]>([]);
  const [text, setText] = useState("");

  function PokeSearch(searchText: string) {
    if (searchText == "") {
      setPokemon(allPokemon);
      return;
    }

    let _filteredPokemon: PokemonProps[] = pokemon.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchText.toLowerCase());
    });

    setPokemon(_filteredPokemon);
  }

  async function GetAllPokemon() {
    //função para chamar a api com a listagem
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
      .then((response) => {
        response.data.results.map((p: any) => {
          SetPokemonInfo(p);
        });
        //setPokemon(response.data.results);  //setando pokemon da busca
        //setAllPokemon(response.data.results); //setando todos os pokemon para listagem
      });
  }

  function SetPokemonInfo(pokemon: any) {
    axios.get(pokemon.url).then((r) => {
      setPokemon((pokemon) => [...pokemon, r.data]); 
      setAllPokemon((pokemon) => [...pokemon, r.data]);
    });
  }

  useEffect(() => {
    PokeSearch(text);
  }, [text]);

  useEffect(() => {
    const fetchData = async () => {
      await GetAllPokemon();
    };
    fetchData();
  }, []);

  return (
    <>
      <SearchStyle>
        <input
          type="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Pesquise por Pokémons"
        />
      </SearchStyle>

      <Container>
        <h1>Resultado da busca</h1>
        <button type="button" onClick={newCardModalOpen}>
          Novo Card
        </button>
      </Container>

      <Card>
        {pokemon &&
          pokemon.map((poke) => {
            let _name = poke.name;
            let _imgSrc = poke.sprites.front_default;
            return (
              <div id="card__layout">
                <p id="card__title">{_name}</p>
                {poke.sprites && (
                  <img id="card__img" width={100} height={100} src={_imgSrc} />
                )}
                <div>
                  <button>Excluir</button>
                  <button>Editar</button>
                </div>
              </div>
            );
          })}
      </Card>
    </>
  );
}
