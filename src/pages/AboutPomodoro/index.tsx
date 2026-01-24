import { useEffect } from "react";
import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GeneticHtml";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { RouterLink } from "../../components/RouterLink";

export function AboutPomodoro(){
    useEffect(() => {
        document.title = 'Entenda a Técnica Pomodoro - Chronos Pomodoro'
    }, []);

    return(
        <MainTemplate>
            <Container>
                <GenericHtml>
                    <Heading>A Técnica Pomodoro 🍅</Heading>

                        <p>
                        A Técnica Pomodoro é um jeito simples e eficiente de organizar o tempo e
                        manter o foco. Ela foi criada por <strong>Francesco Cirillo</strong> e funciona
                        dividindo o trabalho em blocos curtos de concentração, sempre intercalados
                        com pausas.
                        </p>

                        <p>
                        Em vez de passar horas tentando se concentrar, você foca por um período
                        definido, descansa um pouco e volta com a mente mais leve. Isso ajuda a evitar
                        distrações, cansaço mental e aquela sensação de estar sempre atrasado.
                        </p>

                        <h2>Como funciona o Pomodoro?</h2>

                        <p>
                        O método tradicional é bem direto e fácil de seguir no dia a dia:
                        </p>

                        <ul>
                        <li>
                            <strong>Escolha uma tarefa</strong> que precisa ser feita.
                        </li>
                        <li>
                            <strong>Trabalhe nela por 25 minutos</strong> com foco total.
                        </li>
                        <li>
                            <strong>Faça uma pausa rápida</strong> para respirar e relaxar.
                        </li>
                        <li>
                            Depois de alguns ciclos, <strong>faça uma pausa maior</strong> pra recarregar
                            de verdade.
                        </li>
                        </ul>

                        <h2>
                        E o que o <strong>Chronos Pomodoro</strong> tem de diferente? 🚀
                        </h2>

                        <p>
                        O Chronos segue a ideia original do Pomodoro, mas traz algumas facilidades que
                        deixam tudo mais organizado e sem dor de cabeça. A ideia é você se preocupar
                        apenas em focar — o resto o app cuida.
                        </p>

                        <h3>⚙️ Tempos do seu jeito</h3>

                        <p>
                        Nem todo mundo funciona bem com os mesmos minutos. Aqui, você pode ajustar o
                        tempo de foco, descanso curto e descanso longo como quiser. É só ir na{' '}
                        <RouterLink href='/settings/'>página de configurações</RouterLink> e deixar tudo
                        com a sua cara.
                        </p>

                        <h3>🔁 Ciclos automáticos</h3>

                        <p>
                        A cada ciclo finalizado, o Chronos já entende o que vem a seguir e organiza
                        tudo pra você. Assim, você não precisa ficar contando ciclos ou pensando se é
                        hora de focar ou descansar.
                        </p>

                        <p>
                        <strong>Como funciona no Chronos:</strong>
                        </p>

                        <ul>
                        <li>
                            Ciclos <strong>ímpares</strong>: foco total no trabalho.
                        </li>
                        <li>
                            Ciclos <strong>pares</strong>: descanso curto.
                        </li>
                        <li>
                            No <strong>8º ciclo</strong>, rola um descanso longo pra fechar o processo e
                            começar de novo com mais energia.
                        </li>
                        </ul>

                        <h3>🍅 Visual dos ciclos</h3>

                        <p>
                        Logo abaixo do cronômetro, você vai ver bolinhas coloridas que mostram em qual
                        ciclo você está:
                        </p>

                        <ul>
                        <li>🟡 Amarelo: foco.</li>
                        <li>🟢 Verde: descanso curto.</li>
                        <li>🔵 Azul: descanso longo.</li>
                        </ul>

                        <p>
                        Isso ajuda a entender rapidamente o que está acontecendo e o que vem depois,
                        sem precisar anotar nada ou fazer contas de cabeça.
                        </p>

                        <h3>📊 Histórico automático</h3>

                        <p>
                        Todas as tarefas e ciclos ficam salvos no{' '}
                        <RouterLink href='/history/'>histórico</RouterLink>. Assim, você consegue
                        acompanhar seu progresso, ver o que rendeu mais e melhorar sua rotina com o
                        tempo.
                        </p>

                        <h2>Por que usar o Chronos Pomodoro?</h2>

                        <ul>
                        <li>✅ Mais foco, menos distração.</li>
                        <li>✅ Pausas na medida certa.</li>
                        <li>✅ Tudo organizado automaticamente.</li>
                        <li>✅ Flexível pra se adaptar à sua rotina.</li>
                        </ul>

                        <p>
                        <strong>Pronto pra começar?</strong> Volte para a{' '}
                        <RouterLink href='/'>página inicial</RouterLink> e inicie seu próximo Pomodoro
                        agora mesmo 🍅🚀
                        </p>

                        <p>
                        <em>"Um ciclo de cada vez. Foco, pausa e segue."</em> 🧘‍♂️💪
                        </p>

                </ GenericHtml>
            </Container>
        </MainTemplate>
    );
}