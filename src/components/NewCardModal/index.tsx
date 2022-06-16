import Modal from "react-modal";
import { Container } from "./styles";
import {MouseEvent} from 'react';

interface NewCardModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
};

const clickHandler = (e: MouseEvent): void => {
  e.preventDefault();
  alert("Funcionalidade não implementada");
}

export function NewCardModal({isOpen, onRequestClose}: NewCardModalProps) {
  return (
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    overlayClassName="react-modal"
    className="react-modal-content"
    >
      <Container>
    <h2>Criar Card</h2>
    <hr/>
    <h5>Digite um nome para o card</h5>
    <input
    placeholder="Digite o titulo"
    />
    <h5>Inclua uma imagem para aparecer no card</h5>
    <input
    placeholder="Nenhum arquivo selecionado"
    />
    <button id="file" onClick={clickHandler}>Escolher arquivo</button>
    <hr/>
    <button id="card" type="submit" onClick={clickHandler}>Criar Card</button>
    </Container>
  </Modal>
  );
}
