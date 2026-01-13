import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GeneticHtml";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

export function AboutPomodoro(){
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