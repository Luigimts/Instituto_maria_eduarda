import "./Projeto.css";
import { Calendar, Users, Flame } from "lucide-react";

const Projeto = () => {
  return (
    <section id="projetos" className="projeto">
      <div className="container">

        <h2>Mais do que treino. Um caminho.</h2>

        <p className="intro">
          Aqui, o esporte é ferramenta de transformação.
          Cada treino desenvolve o físico, a mente e o caráter.
        </p>

        
        <div className="projeto-grid">

          <div className="bloco fade">
            <Calendar size={32} color="#a855f7" />
            <h3>Como funciona</h3>
            <p>Sexta-feira às 16:00</p>
            <p>Unidos da Tijuca – Borel</p>
          </div>

          <div className="bloco fade">
            <Users size={32} color="#a855f7" />
            <h3>Quem pode participar</h3>
            <p>7 a 17 anos → gratuito</p>
            <p>18+ → R$ 70,00</p>
          </div>

          <div className="bloco fade">
            <Flame size={32} color="#a855f7" />
            <h3>O que ensinamos</h3>
            <p>Muay Thai • Kickboxing</p>
          </div>

          <div className="bloco fade">
            <h3>Disciplina e formação</h3>
            <p>Respeito • Disciplina • Postura</p>
          </div>

          <div className="bloco destaque fade">
            <h3>Nosso objetivo</h3>
            <p>Chegar a 100 alunos com mais estrutura.</p>
          </div>

        </div>

        <p className="final">
          Transformando vidas todos os dias.
        </p>

      </div>
    </section>
  );
};

export default Projeto;