import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { api } from './../../services/api';
import { Container, TransactionTypeContainer, RadioBox } from './styles';



interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void; /*Não retorna nada */
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit'); /*O estado inicial da modal vai estar selecionado o botão ENTRADA */

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault(); /*prevenir o funcionamento padrão */

        const data = {
            title, 
            value, 
            category, 
            type,
        };
        api.post('/transactions', data)
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar modal" />
            </button>

            {/*Este container abaixo transformamos em um formulário, está em styles.ts  */}
            <Container onSubmit={handleCreateNewTransaction}> 
                <h2>Cadastrar transação</h2>

                <input
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)} /*toda vez que for digitado o valor no campo, mantem o estado e reflete no input */
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))} /*pega a classe do react do Construtor e converte para numero */
                />

                <TransactionTypeContainer>
                    {/* isActive não é uma propriedade do HTML é um nome que eu quero dar */}
                    <RadioBox
                     type="button" onClick={() => { setType('deposit'); }} isActive={type === 'deposit'} activeColor="green">
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox type="button" onClick={() => { setType('withdraw'); }} isActive={type === 'withdraw'} activeColor="red">
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}