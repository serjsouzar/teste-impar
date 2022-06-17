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
  h1 {
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

  #card__layout {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    margin: 50px;
    padding: 50px;
    border-radius: 0.25rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    #card__title {
      display: flex;
      width: 60px;
      margin: 0;
      margin-top: -1rem;
      align-items: center;
      padding-bottom: 2.3rem;
      color: var(--indigo);
    }

    #card__img {
      margin-bottom: 1rem;
    }

    hr {
      margin-top: -1.5rem;
    }

    #btn {
      width: 100%;
      margin: 0;
      border: 0;
      padding: 0;
      margin-bottom: -3rem;
      display: inline-block;
    }

    button {
      align-items: center;
      margin-left: -1rem;
      display: inline;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`;

export const SearchStyle = styled.header`
  max-width: 1120px;
  width: auto;
  height: auto;

  padding: 3rem 3rem 3rem 2rem;
  display: grid;
  justify-content: center;

  input {
    width: auto;
    border: 2px solid #d7d7d7;
    border-color: var(--indigo);
    background: #ffffff;
    border-radius: 0.25rem;
    padding: 0 15rem;
    height: 5rem;
    justify-content: left;
    margin-top: -1rem;
    text-align: center;

    ::placeholder {
      margin-right: -5rem;
      text-align: left;
      margin-left: -4rem;
      font-size: 1.2rem;
    }
  }

  div {
    margin-bottom: -8rem;
  }
`;
