import { HandHeart, Users, Handshake } from "lucide-react"
import "../Ajuda.css"

const options = [
  {
    icon: HandHeart,
    title: "Faça uma Doação",
    description:
      "Sua contribuição financia treinos, equipamentos e oportunidades reais para jovens que precisam.",
    cta: "Doar Agora",
    link: "https://wa.me/552193401195",
  },
  {
    icon: Users,
    title: "Seja Voluntário",
    description:
      "Doe seu tempo e talento. Cada hora dedicada faz diferença na vida de uma criança.",
    cta: "Quero Participar",
    link: "https://wa.me/552193401195",
  },
  {
    icon: Handshake,
    title: "Torne-se Parceiro",
    description:
      "Empresas e organizações podem criar parcerias de impacto real com o Instituto.",
    cta: "Fale Conosco",
    link: "mailto:instituto@email.com",
  },
]

function Ajuda() {
  return (
    <section className="ajuda">
      <h2>Como Ajudar</h2>

      <div className="ajuda-grid">
        {options.map((option, i) => (
          <div className="card" key={i}>
            
            
            <option.icon size={40} />

            
            <h3>{option.title}</h3>

            
            <p>{option.description}</p>

            
            <a href={option.link} target="_blank" rel="noopener noreferrer">
              <button className="btn">
                {option.cta}
              </button>
            </a>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Ajuda