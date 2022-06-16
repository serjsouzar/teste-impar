import logoImg from "../../assets/logo.svg";
import { Container } from "./styles";

export function Navbar() {
  return (
    <>
      
      <Container>
        <nav>
          <img
            src={logoImg}
            id="rocket"
            alt="teste impar"
            width={50}
            height={50}
          />
          <h2>Teste Ímpar</h2>
        </nav>
        
      </Container>
    </>
  );
}
