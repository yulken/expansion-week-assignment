import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Modal } from './styles';

const Main: React.FC = () => {
  const [isBlurry, setBlurry] = useState(true);
  const [isVisible, setVisible] = useState(true);
  const [isDisplayed, setDisplay] = useState(true);

  const handleBlurContent = (): void => {
    setBlurry(false);
    setVisible(false);
    setTimeout(() => setDisplay(false), 1000);
  };

  return (
    <>
      <Container isBlurry={isBlurry}>
        <header>
          <div />
          <h1>O poder da colaboração</h1>
        </header>
        <section>
          <main>
            <p>
              Hoje eu irei falar sobre uma Soft Skill muito importante (ou a
              mais importante, na minha opinião) para os programadores: A
              Colaboração.
            </p>
            <p>
              Segundo Vreede e Briggs (2005), colaboração é a “articulação de um
              esforço comum em direção a um objetivo”. É necessário dizer que a
              colaboração não é apenas importante no meio do desenvolvimento. É
              fundamental para o funcionamento ou entrega de qualquer serviço ou
              tarefa relevante.
            </p>
            <p>
              Porém, o desenvolvimento de aplicações demanda, muitas vezes,
              especializações diferentes para que seu resultado seja
              satisfatório. Uma aplicação Web, por exemplo, tem que ser capaz
              de:
            </p>
            <ul>
              <li>Processar requisições HTTP de forma performática</li>
              <li>
                Ter uma interface de usuário com um design agrádavel e intuitivo
              </li>
              <li>Suportar diversos tipos aparelhos</li>
              <li>Fornecer uma boa experiência de usuário</li>
              <li>Ser escalável</li>
              <li>Entre outros...</li>
            </ul>
            <p>
              São muitas especializações diferentes e, em projetos muito
              grandes, mesmo que o desenvolvedor seja capaz de amarrar todas
              essas especificações em um software de qualidade, com as melhores
              práticas, quanto tempo ele levaria nesse processo?
              <br />
              Somente através da colaboração seria possível alcançar todos os
              objetivos citados em um tempo hábil. Ao menos sem comprometer a
              saúde de ninguém!
            </p>
            <figure>
              <video disablePictureInPicture autoPlay loop muted>
                <source src="./videos/dad.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              <figcaption>
                O dev &quot;Lobo Solitário&quot; ajustando CSS 3 horas antes do
                prazo
              </figcaption>
            </figure>
            <h2>O universo colaborativo</h2>
            <p>
              Além disso, não é necessário ser um desenvolvedor muito experiente
              para esbarrar em ferramentas de colaboração mútua na comunidade da
              programação. Por exemplo, é inegável que fórums como o{' '}
              <a href="https://stackoverflow.com/">Stack Overflow</a>, onde é
              possível encontrar respostas para as maiores dúvidas técnicas, são
              essenciais ao programador no processo de desenvolvimento. Sem
              contar também com o universo open source e suas plataformas, como
              o <a href="https://github.com/">GitHub</a>, que fornece extensões,
              ferramentas, bibliotecas e até mesmo novas linguagens de
              programação a fim de colaborar para o mundo do desenvolvimento
            </p>
            <p>
              Com isso, podemos concluir que o desenvolvedor está imerso em um
              universo colaborativo, onde todos se ajudam e todos ganham no
              processo, individualmente e em comunidade.
            </p>
          </main>
        </section>
      </Container>

      <Modal isVisible={isVisible} isDiplayed={isDisplayed}>
        <div>
          <Link to="/">
            <FiArrowRight key="1" onClick={handleBlurContent} />
          </Link>
          <video disablePictureInPicture autoPlay loop muted>
            <source src="./videos/prangers.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div>
            <p>
              &quot;Se quer ir rápido, vá sozinho. Se quer ir longe, vá em
              grupo.&quot;
            </p>
            <p> - Provérbio Africano.</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Main;
