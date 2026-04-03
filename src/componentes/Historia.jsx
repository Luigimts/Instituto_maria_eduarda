import "./Historia.css";
 

 const Historia = () => {
  return (
<section className="historia">
  <div className="historia-container">
    
    <h2>Nossa História</h2>

    <p className="historia-texto">
      Tudo começou com a vontade de transformar vidas através do esporte.
      Hoje, seguimos firmes levando disciplina, respeito e esperança
      para jovens que precisam de oportunidade.
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
      “Aqui não formamos atletas. Formamos pessoas.”
    </p>

  </div>
</section>
  );
};
  
export default Historia;