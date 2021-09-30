import React, { useState, useEffect} from 'react';
import { Main, Layout, Principal, Apresentacao, AreaFaceApi} from './styles';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import bannerPrincipal from '../../img/banner_principal1.png'
import carinha from '../../img/carinha1.png'
import Card from '../../components/Card';
import FaceApi from '../FaceApi';

const Home = () => {
    

    return(
        <Layout>
            <Header/>
            <Main>
            
               <Principal>
                    <div className="texto-apresentacao">
                        <div className="texto">
                            <span>PRODUTOS</span>
                            <h1>Reconhecimento Facial</h1>
                            <strong>Autentique usuários com mais segurança</strong>
                            <p>
                                Nossa tecnologia de reconhecimento facial esta utilizando uma
                                API JavaScript, para detecção e reconhecimento facial no 
                                navegador implementada na parte superior da API principal Tensorflow.js 
                            </p>
                        </div>
                    </div>
                    <div className="img-apresentacao">
                        <img src={bannerPrincipal} alt="banner principal" />
                    </div>
               </Principal>

               <Apresentacao>
                    <div className="cont-apresentacao">
                        <div className="area-title">
                            <h1>Liderado por poderosas tecnologias</h1>
                        </div>
                        
                        <div className="cards-apresentacao">
                            <div className="area-card">
                                <Card
                                    titulo="8S"
                                    subtitulo="Reconhecimento facial"
                                    descricao="Nossa tecnologia de reconhecimento facial reduz o risco de fraudes. 
                                        Através do reconhecimento facial, nós confirmamos que seus usuários são quem realmente eles dizem ser."
                                />
                            </div>

                            <div className="area-card">
                                <Card
                                    titulo="9S"
                                    subtitulo="Reconhecimento de expressão facial"
                                    descricao="Reconhecimento da expressão facial da emoção, com base nas 7 
                                        emoções básicas (alegria, tristeza, raiva, aversão, medo, surpresa e desprezo)."/>
                            </div>

                            <div className="area-card">
                                <Card
                                    titulo="10S"
                                    subtitulo="Idade e Gênero"
                                    descricao="Nosso sistema utiliza uma ferramenta do FaceApi.js para detectar a idade e o gênero da pessoa."
                                />
                            </div>

                            <div className="area-card">
                                <Card
                                    titulo="9S"
                                    subtitulo="Pontos de referência facial"
                                    descricao="Este pacote implementa um detector de pontos de referência
                                        facial de 68 pontos muito leve e rápido, mas preciso."
                                />
                            </div>                            
                        </div>
                    </div>
               </Apresentacao>
               <AreaFaceApi>
                    <FaceApi />
               </AreaFaceApi>
            </Main>
            <Footer/>
        </Layout>
    );

}   
export default Home;