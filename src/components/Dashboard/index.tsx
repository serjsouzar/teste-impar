import { useState } from "react";
import { Cards } from "../Cards";
import { Container } from "./styles";
import { NewCardModal } from "../NewCardModal";

export function Dashboard() {
  const [isCardModalOpen, setCardModalIsOpen] = useState(false);

  function handleOpenModal() {
    setCardModalIsOpen(true);
  }

  function handleCloseModal() {
    setCardModalIsOpen(false);
  }

  return (
    <>
      <Container>
        <Cards newCardModalOpen={handleOpenModal}/>
      </Container>

      <NewCardModal isOpen={isCardModalOpen} onRequestClose={handleCloseModal} />
    </>
  );
}
