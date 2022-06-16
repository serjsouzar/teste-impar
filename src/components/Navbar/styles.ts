import styled from "styled-components";

export const Container = styled.div`
  background: var(--rebeccaPurple);

  div {
    display: inline-block;
    position: fixed;
    margin-top: 10px;
    margin: 10px;
    padding: 0.5px;
  }

  #rocket {
    margin: 2px;
    padding: 2px;
  }

  h2 {
    color: #fff;
    font-weight: lighter;
    display: inline;
  }

  nav {
    display: flex;
    align-items: center;
  }

  header {
    background-color: var(--indigo);
    margin-bottom: 0;
    display: grid;
  }
`;

//export const ContentHeader = styled.header``;
