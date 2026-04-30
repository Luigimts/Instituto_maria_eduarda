import "./Historia.css";
import h1 from "../assets/h1.jpg";

const Historia = () => {
  return (
    <section id="historia" className="historia">
      {/* Foto de fundo */}
      <div className="historia-bg">
        <img src={h1} alt="Instituto Maria Eduarda" />
        <div className="historia-overlay" />
      </div>

      <div className="historia-container">

        <h2>Nossa História</h2>

        <p className="historia-texto">
          O Instituto Maria Eduarda nasceu de uma história real, carregada de{" "}
          <strong>amor, dor e propósito</strong>. Mais do que um nome, Maria Eduarda
          representa um motivo para continuar, lutar e transformar vidas. Este projeto
          foi criado para impactar crianças e jovens, oferecendo através do esporte um
          caminho diferente — longe da vulnerabilidade e mais perto de oportunidades.
        </p>

        <div className="historia-cards">

          <div className="card">
            <span>💰</span>
            <h3>Investimento</h3>
            <p>Todo recurso é aplicado diretamente nos alunos.</p>
          </div>

          <div className="card">
            <span>🧾</span>
            <h3>Transparência</h3>
            <p>Prestamos contas de tudo que é feito.</p>
          </div>

          <div className="card">
            <span>📢</span>
            <h3>Impacto</h3>
            <p>Mais que esporte, formamos cidadãos.</p>
          </div>

        </div>

        <p className="frase">
          "Aqui, cada treino é mais do que físico. É disciplina, respeito e construção de futuro."
        </p>

      </div>
    </section>
  );
};

export default Historia;