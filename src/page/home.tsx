import { Header } from '../components/header/index'
import { SummaryTable } from '../components/summaryTable'
import { Container } from './style'

export function Home() {
    return (
        <Container>
            <Header />
            <SummaryTable />
        </Container>
    )
}