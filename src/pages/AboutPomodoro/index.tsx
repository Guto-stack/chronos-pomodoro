import { useEffect } from "react";
import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GeneticHtml";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

export function AboutPomodoro(){
    useEffect(() => {
        document.title = 'Entenda a Técnica Pomodoro - Chronos Pomodoro'
    }, []);

    return(
        <MainTemplate>
            <Container>
                <GenericHtml>
                    <Heading> 
                        A técnica Pomodoro
                    </Heading>
                </ GenericHtml>
            </Container>
        </MainTemplate>
    );
}