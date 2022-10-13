import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

// Por questões de acessibilidade e por que a documentação recomenda vamos executar o root fora da função App, a modal estará por cima
Modal.setAppElement('#root');

export function App() {

  // Aqui vamos criar a modal através do React Modal
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); /*Se o modal de transação estiver aberto ficará como true e o set é pra mudar o estado da variável */

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true); /*Setar a informação que o modal está aberto */
  }

  function handleCloseNewTransactionModal() { /*quando clicar na parte branca da modal ou em ESC vai fechar a modal */
    setIsNewTransactionModalOpen(false); /*Setar a informação que o modal está fechado */
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalOpen} /*Estava dando erro por que temos que passar o estado dizendo que estará aberto: isNewTransactionModalOpen  */
        onRequestClose={handleCloseNewTransactionModal} /*quando o usuário clicar em fechar(clicar na parte branca ou em ESC) */
      >
        <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}

