import { useState } from 'react';
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

/*Recebe essa propriedade onOpenNewTransactionModal  e repassa para o botão no onClick={onOpenNewTransactionModal} */
export function Header({ onOpenNewTransactionModal }: HeaderProps) { /*Quando passo dentro das chaves, quer dizer que estou desestruturando e passando uma única propriedade ou propriedade específica */


  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}