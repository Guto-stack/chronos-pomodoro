import { useEffect } from "react";
import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GeneticHtml";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

export function NotFound(){
    useEffect(() => {
            document.title = 'Página não encontrada - Chronos Pomodoro'
        }, []);

    return(
        <MainTemplate>
            <Container>
                <GenericHtml>
                   <Heading>404 - Página não encontrada</Heading>
                    <p>Desculpe, a página que você está procurando não existe.</p>
                </GenericHtml>
            </Container>
        </MainTemplate>
    );
}