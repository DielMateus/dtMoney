import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import {TransactionsProvider } from './hooks/useTransactions';
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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard /> {/* Summary está importado dentro do Dashboard, por isso só importa o Dashboard */}
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

