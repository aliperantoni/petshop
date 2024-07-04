import React from "react";
import '../assets/css/components/cartao.css';

const Sobre = () => {
    return (
        <main>
            <div className="container">
                <h2 className="titulo-pagina">Sobre a AUmigão</h2>
            </div>
            <section className="container flex flex--centro">
                <article className="cartao">
                Bem-vindo ao AUmigão, sua pet-shop de confiança! Fundada com amor e dedicação há uma década, nossa história começa com a paixão por animais e o desejo de oferecer o melhor para cada peludo e seu humano. Localizada no coração da cidade, a AUmigão cresceu de uma pequena loja para um espaço acolhedor onde cada cliente é parte da nossa família. Nossos fundadores, João e Maria, começaram com o objetivo de criar um ambiente onde qualidade, cuidado e compromisso com o bem-estar animal se destacam. Hoje, continuamos a honrar esses valores, oferecendo produtos premium, serviços especializados e um sorriso caloroso a todos que entram pela nossa porta. Seja bem-vindo à AUmigão, onde cada latido e miado é recebido com alegria e carinho!
                </article>
            </section>
        </main>
    )
}

export default Sobre;