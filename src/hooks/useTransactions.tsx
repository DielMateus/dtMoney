import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; /*Pega todos os campos menos os que eu tô passando(id, createdAt) */


interface TransactionsProviderProps {
    children: ReactNode; /*ReacNode aceita qualquer tipo de dado válido no React ex: tag(jsx), tag(html),texto diretamente */
}

interface TransactionsContextData {
    transactions: Transaction[];
    // Função 
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

 const TransactionsContext = createContext<TransactionsContextData>(
    /*Passa um objeto vazio e força uma tipagem/formato do tipo/formato TransactionsContextData*/
    {} as TransactionsContextData
    );

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    // Aqui é onde vai acontecer todo o carregamento de dados no React da minha aplicação
    const [transactions, setTransactions] = useState<Transaction[]>([]); /*O meu estado vai armazenar um array de Transaction, que foi preciso criar a Interface Transaction */

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    // Aqui onde eu recupero as informações cadastradas via modal pelo AXIOS
    async function createTransaction(TransactionInput: TransactionInput){
         const response = await api.post('/transactions', {
            ...TransactionInput,
            createdAt: new Date(),
         })
         
         const { transaction } = response.data;

         setTransactions([
            ...transactions,
            transaction,
         ])
    }

    return (
        // passa somente o {children}.  value={{transactions, createTransaction}} /*Uma chave indica que eu quero inserir JS e outra que vou passar um Objeto */
        <TransactionsContext.Provider value={{transactions, createTransaction}}> 
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionsContext);

    return context;
}