import { useEffect } from "react";
import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GeneticHtml";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { RouterLink } from "../../components/RouterLink";

export function NotFound(){
    useEffect(() => {
            document.title = 'Página não encontrada - Chronos Pomodoro'
        }, []);

    return(
        <MainTemplate>
            <Container>
                <GenericHtml>
                  <Heading>404 — Ops! Essa página sumiu ⏱️</Heading>

                        <p>
                        Parece que você tentou acessar uma página que não existe (ou que nunca
                        existiu). Talvez ela tenha sido engolida por um bug, caiu em um loop infinito
                        ou simplesmente resolveu tirar uma pausa estratégica. ☕💻
                        </p>

                        <p>
                        A boa notícia é que você não quebrou nada. Isso acontece até com os melhores
                        cronômetros. Dá pra voltar tranquilamente para a{' '}
                        <RouterLink href='/'>página inicial</RouterLink>, conferir o{' '}
                        <RouterLink href='/history/'>histórico</RouterLink> ou usar o menu pra retomar
                        o foco.
                        </p>

                        <p>
                        Se você chegou aqui por curiosidade, parabéns — encontrou um cantinho
                        escondido do Chronos. Se foi sem querer, relaxa: um clique e você já está de
                        volta ao fluxo normal do tempo.
                        </p>

                        <p>
                        <em>
                            "Nem todo caminho leva a um destino… às vezes leva a um 404."
                        </em> 😅⏳
                        </p>
                </GenericHtml>
            </Container>
        </MainTemplate>
    );
}