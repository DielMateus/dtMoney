import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from './../../services/api';


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionsTable() {
    const [transactions, setTransactions] = useState<Transaction[]>([]); /*O meu estado vai armazenar um array de Transaction, que foi preciso criar a Interface Transaction */

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-BR', { /*Formatar o tipo da moeda */
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format( /*Formatar datas */
                                        new Date(transaction.createdAt)
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Container>
    );
}