function Footer() {
  return (

    <section id="Footer">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-lg font-bold uppercase tracking-wider text-foreground">
          Instituto <span className="text-primary">Maria Eduarda</span>
        </div>
        <p className="text-muted-foreground text-sm text-center">
          © {new Date().getFullYear()} Instituto Maria Eduarda. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <a href="#home" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Início</a>
          <a href="#historia" className="text-muted-foreground hover:text-foreground text-sm transition-colors">História</a>
          <a href="#contato" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Contato</a>
        </div>
      </div>
    </section>
  );
}

export default Footer;