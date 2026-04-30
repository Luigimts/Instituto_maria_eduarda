import { useState } from "react"
import { HandHeart, Users, Handshake } from "lucide-react"
import "./Ajuda.css"

const simpleOptions = [
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
]


const formatCPF = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 11)
  return digits
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
}


const formatCNPJ = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 14)
  return digits
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d{1,2})$/, "$1-$2")
}


const formatPhone = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 11)
  return digits
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{1,4})$/, "$1-$2")
}

const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const validateCPF = (cpf) =>
  cpf.replace(/\D/g, "").length === 11

const validateCNPJ = (cnpj) =>
  cnpj.replace(/\D/g, "").length === 14

const validatePhone = (phone) =>
  phone.replace(/\D/g, "").length >= 10

const emptyForm = { nome: "", documento: "", email: "", telefone: "" }
const emptyErrors = { nome: "", documento: "", email: "", telefone: "" }

function ParceirForm() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState(emptyErrors)
  const [docType, setDocType] = useState("cpf") // "cpf" ou "cnpj"
  const [submitted, setSubmitted] = useState(false)

  const handleDocumento = (e) => {
    const raw = e.target.value
    const digits = raw.replace(/\D/g, "")
    const tipo = digits.length <= 11 ? "cpf" : "cnpj"
    setDocType(tipo)
    const formatted = tipo === "cpf" ? formatCPF(raw) : formatCNPJ(raw)
    setForm((f) => ({ ...f, documento: formatted }))
  }

  const handlePhone = (e) => {
    setForm((f) => ({ ...f, telefone: formatPhone(e.target.value) }))
  }

  const validate = () => {
    const newErrors = { ...emptyErrors }
    let valid = true

    if (!form.nome.trim() || form.nome.trim().length < 3) {
      newErrors.nome = "Nome deve ter pelo menos 3 caracteres."
      valid = false
    }

    const docDigits = form.documento.replace(/\D/g, "")
    if (docType === "cpf" && !validateCPF(form.documento)) {
      newErrors.documento = "CPF inválido — deve ter 11 dígitos."
      valid = false
    } else if (docType === "cnpj" && !validateCNPJ(form.documento)) {
      newErrors.documento = "CNPJ inválido — deve ter 14 dígitos."
      valid = false
    } else if (docDigits.length === 0) {
      newErrors.documento = "Informe seu CPF ou CNPJ."
      valid = false
    }

    if (!validateEmail(form.email)) {
      newErrors.email = "E-mail inválido."
      valid = false
    }

    if (!validatePhone(form.telefone)) {
      newErrors.telefone = "Telefone inválido — mínimo 10 dígitos."
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      setForm(emptyForm)
      setErrors(emptyErrors)
    }
  }

  if (submitted) {
    return (
      <div className="parceiro-success">
        <Handshake size={48} color="#a855f7" />
        <h3>Mensagem enviada!</h3>
        <p>Entraremos em contato em breve.</p>
        <button className="btn" onClick={() => setSubmitted(false)}>
          Enviar outro
        </button>
      </div>
    )
  }

  return (
    <form className="parceiro-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label>Nome / Razão Social</label>
        <input
          type="text"
          placeholder="Seu nome ou nome da empresa"
          value={form.nome}
          onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
        />
        {errors.nome && <span className="form-error">{errors.nome}</span>}
      </div>

      <div className="form-group">
        <label>CPF ou CNPJ</label>
        <input
          type="text"
          placeholder="000.000.000-00 ou 00.000.000/0000-00"
          value={form.documento}
          onChange={handleDocumento}
        />
        {errors.documento && <span className="form-error">{errors.documento}</span>}
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <input
          type="email"
          placeholder="seu@email.com"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        />
        {errors.email && <span className="form-error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label>Telefone</label>
        <input
          type="text"
          placeholder="(21) 99999-9999"
          value={form.telefone}
          onChange={handlePhone}
        />
        {errors.telefone && <span className="form-error">{errors.telefone}</span>}
      </div>

      <button type="submit" className="btn btn-full">
        Enviar
      </button>
    </form>
  )
}

function Ajuda() {
  return (
    <section id="ajudar" className="ajuda">
      <h2>Como Ajudar</h2>

      <div className="ajuda-grid">
        {simpleOptions.map((option, i) => (
          <div className="card" key={i}>
            <option.icon size={40} color="#a855f7" />
            <h3>{option.title}</h3>
            <p>{option.description}</p>
            <a href={option.link} target="_blank" rel="noopener noreferrer">
              <button className="btn">{option.cta}</button>
            </a>
          </div>
        ))}

        
        <div className="card card-parceiro">
          <Handshake size={40} color="#a855f7" />
          <h3>Torne-se Parceiro</h3>
          <p>Empresas e organizações podem criar parcerias de impacto real com o Instituto.</p>
          <ParceirForm />
        </div>
      </div>
    </section>
  )
}

export default Ajuda