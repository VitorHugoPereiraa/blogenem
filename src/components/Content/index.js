import React from 'react';
import Button from 'react-bootstrap/Button'

import './style.css';

function Content() {
    return (
        <section className='section-content'>
            <span>
                <h1 className='section-title'>Enem 2020:</h1>
            </span>

            <div className='div-content'>
                <p className='content'>O Exame Nacional do Ensino Médio (Enem) é hoje a principal porta de entrada no ensino superior do Brasil. A prova viabiliza o acesso às instituições de educação públicas e privadas (sendo critério para conquista de bolsas de estudo e financiamento estudantil do governo federal). O resultado também é usado para o ingresso direto em universidades que utilizam a avaliação de forma integral ou como complemento aos seus vestibulares próprios para entrada em seus cursos de graduação.</p>
                <p className='content'>As provas do Exame Nacional do Ensino Médio (Enem) 2020 serão aplicadas em janeiro e fevereiro de 2021, anunciou o Ministério da Educação (MEC) nesta quarta-feira (8).</p>
                <p className='content'>Por ter substituído o tradicional vestibular em milhares de faculdades e universidades dentro do país e fora dele - o resultado do Enem 2020 também é aceito em universidades portuguesas (confira a lista completa das instituições parceiras) - passou a fazer parte do calendário escolar de estudantes que estão concluindo o ensino médio e demais brasileiros que desejam ingressar no ensino superior.</p>
                <p className='content'>O anúncio foi feito pelo secretário-executivo do MEC, Antonio Paulo Vogel, e o presidente do Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (Inep), Alexandre Lopes, durante coletiva de imprensa, em Brasília.</p>
                <p className='content'>A nova data foi definida mais de quatro meses após a suspensão das aulas presenciais e fechamentos das escolas em todo o Brasil por causa da disseminação do coronavírus.</p>
            </div>

            <div className='div-button'>
                <a href='/more-info'>
                    <Button className='button-main' variant="outline-primary" size='lg'>MAIS INFORMAÇÕES</Button>{' '}
                </a>
            </div>
        </section>
    );
}

export default Content;