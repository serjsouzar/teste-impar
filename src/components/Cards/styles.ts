import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -8rem;

  button {
    font-size: 1rem;
    color: #fff;
    background-color: var(--darkGoldenRod);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s; //suavizar a transição do &hover+filter

    &:hover {
      filter: brightness(0.7);
    }
  }
  h1{
    color: var(--indigo);
    font-weight: lighter;
  }
`;

export const Card = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 0;
  padding-top: 0;

  #card__layout{
    display: flex;
    flex-direction: column;
    background: #ccc;
    margin: 50px;
    padding: 50px;
    border-radius: 0.25rem;
    
    
    #card__title{
      display: flex;
      width: 65px;
      margin: 0;
      justify-content: center;
      padding-bottom: 2rem;
    }

    
  }
`

export const SearchStyle = styled.header`
  max-width: 1120px;
  width: auto;
  height: auto;
  
  padding: 3rem 3rem 3rem 2rem;
  display: grid;
  justify-content: center;

  input {
    
    border: 2px solid #d7d7d7;
    border-color: var(--indigo);
    background: #e7e9ee;
    border-radius: 0.25rem;
    padding: 0 15rem;
    height: 5rem;
    justify-content: left;
    margin-top: -1rem;
    text-align: center; 
  }
  div {
    margin-bottom: -8rem ;
  }
`
