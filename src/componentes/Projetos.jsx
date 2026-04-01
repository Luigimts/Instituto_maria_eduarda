function Projetos() {
  const projetos = [
    {
      titulo: "Boxe & Esporte",
      descricao:
        "Treinamentos de boxe e atividades esportivas que promovem disciplina, saúde e autoconfiança para jovens da comunidade.",
    },
    {
      titulo: "Ações Sociais",
      descricao:
        "Iniciativas comunitárias que vão além do esporte, oferecendo apoio, educação e acolhimento às famílias.",
    },
    {
      titulo: "Eventos",
      descricao:
        "Competições, encontros e eventos que conectam a comunidade e dão visibilidade ao potencial de cada jovem.",
    },
  ];

  return (
    <section id="projetos" style={{ padding: "80px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Nossos Projetos
      </h2>

      <div
        style={{
          display: "grid",
          gap: "20px",
        }}
      >
        {projetos.map((proj, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #333",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>{proj.titulo}</h3>
            <p>{proj.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;