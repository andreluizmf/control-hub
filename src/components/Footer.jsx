import {
  LayoutDashboard,
  Computer,
  BanknoteX,
  Bird,
  Mail,
} from 'lucide-react'

import '../styles/Footer.css'

const links = {
  Empresa: ['Sobre nós', 'Blog', 'Imprensa'],
  Suporte: ['Documentação', 'Comunidade', 'Contato'],
}

export default function Footer() {
  return (
    <footer className="footer-control" id="contato">
      <div className="container-xl">

        <div className="footer-top row gy-4">

          {/* Marca */}
          <div className="col-lg-4">
            <div className="footer-brand">

              <div className="logo-icon me-2">
                <LayoutDashboard size={18} strokeWidth={2.2} />
              </div>

              <span className="logo-text">
                Control<strong>Hub</strong>
              </span>
            </div>

            <p className="footer-tagline">
              Centralize o controle da sua operação em
              um único lugar.
            </p>

            <div className="footer-socials">

              <a href="#" className="footer-social-btn" aria-label="Computer">
                <Computer size={18} />
              </a>

              <a href="#" className="footer-social-btn" aria-label="GitHub">
                <BanknoteX size={18} />
              </a>

              <a href="#" className="footer-social-btn" aria-label="Instagram">
                <Bird size={18} />
              </a>

              <a href="#" className="footer-social-btn" aria-label="Email">
                <Mail size={18} />
              </a>

            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([categoria, itens]) => (
            <div key={categoria} className="col-6 col-md-2">

              <h6 className="footer-nav-title">
                {categoria}
              </h6>

              <ul className="footer-nav-list">
                {itens.map((item) => (
                  <li key={item}>
                    <a href="#" className="footer-nav-link">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>

        <div className="section-divider my-4" />

        {/* Parte inferior */}
        <div className="footer-bottom">

          <p className="footer-copy">
            © 2025 ControlHub. Desenvolvido por André Fávero e Guilherme Otto. Todos os direitos reservados.
          </p>

          <p className="footer-authors">
            Projeto acadêmico · React + Vite + Bootstrap + Lucide Icons
          </p>

        </div>

      </div>
    </footer>
  )
}