import { Container } from './styles'; /*Vem de dentro da própria pasta Dashboard/styles.ts */
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';

export function Dashboard() {
    return(
        <Container>
            <Summary />
            <TransactionsTable/>
        </Container>
    );
}