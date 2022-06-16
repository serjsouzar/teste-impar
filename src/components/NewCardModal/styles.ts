import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--indigo);
    font-size: 1.5rem;
  }

  h5 {
    margin-top: 1rem;
  }

  input {
    margin-top: 0.5rem;
    width: 100%;
    padding: 0 1rem;
    height: 3rem;
  }

  hr {
    border-color: #fff;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  #file {
    width: 200px;
    border-color: var(--darkGoldenRod);
    height: 2.5rem;
    float: right;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--darkGoldenRod)
    ;
    border-radius: 0.25rem;

    transition: filter 0.2s; //suavizar a transição do &hover+filter

    &:hover {
      filter: brightness(0.7);
    }
  }

  #card {
    width: 200px;
    border: 0;
    height: 2.5rem;
    text-align: center;
    padding-top: 9px;
    justify-content: center;
    margin: auto;
    display: flex;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    color: #fff;
    background-color: var(--darkGoldenRod);
    border-radius: 0.25rem;

    transition: filter 0.2s; //suavizar a transição do &hover+filter

    &:hover {
      filter: brightness(0.7);
    }
  }
`;
