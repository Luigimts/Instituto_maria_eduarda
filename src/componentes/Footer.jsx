import "./Footer.css";

function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          Instituto <span>Maria Eduarda</span>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Instituto Maria Eduarda. Todos os direitos reservados.
        </p>

        <div className="footer-links">
          <a href="#home">Início</a>
          <a href="#historia">História</a>
          <a href="#ajudar">Como Ajudar</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;