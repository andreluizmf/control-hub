import { CheckCircle2, ArrowRight } from 'lucide-react'
import '../styles/SecaoDestaque.css'

const diferenciais = [
  'Implantação em até 24 horas sem interromper sua operação',
  'Dados armazenados em servidores no Brasil com criptografia de ponta a ponta',
  'Integrações nativas com mais de 200 ferramentas do mercado',
  'Interface sem código para criação de regras e automações',
]

export default function SecaoDestaque() {
  return (
    <section className="destaque-section" id="solucoes">
      <div className="container-xl">
        <div className="row align-items-center gy-5">

          {/* Imagem / Card visual */}
          <div className="col-lg-5 animate-fade-up animate-delay-1">
            <div className="destaque-visual">
              <div className="destaque-card">
                <div className="destaque-card-top">
                  <span className="destaque-badge">● Ativo</span>
                  <span className="destaque-time">Agora</span>
                </div>
                <h4 className="destaque-card-title">Painel Unificado</h4>
                <p className="destaque-card-desc">
                  Uma única interface para gerenciar pessoas, processos e
                  dados. Sem abas duplicadas, sem planilhas paralelas.
                </p>
                <div className="destaque-progress-list">
                  {['Onboarding', 'Relatórios', 'Automações'].map((item, i) => (
                    <div key={item} className="destaque-progress-item">
                      <span>{item}</span>
                      <div className="destaque-progress-bar">
                        <div
                          className="destaque-progress-fill"
                          style={{ width: `${[88, 72, 95][i]}%` }}
                        />
                      </div>
                      <span className="destaque-progress-pct">{[88, 72, 95][i]}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="destaque-badge-float">
                <CheckCircle2 size={14} className="me-1" style={{ color: 'var(--color-success)' }} />
                Aprovado pelos nossos clientes
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="col-lg-6 offset-lg-1 animate-fade-up animate-delay-2">
            <span className="badge-control mb-3 d-inline-block">Por que escolher</span>
            <h2 className="destaque-title">
              A plataforma de controle operacional feita para escalar seu negócio
            </h2>
            <p className="destaque-subtitle">
              O Control Hub é a solução definitiva para empresas que buscam
              otimizar seus processos, centralizar suas operações e tomar decisões
              baseadas em dados.
            </p>

            <ul className="destaque-list">
              {diferenciais.map((item) => (
                <li key={item} className="destaque-list-item">
                  <CheckCircle2
                    size={18}
                    strokeWidth={2.2}
                    className="destaque-check"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="#" className="btn-control btn mt-2">
              Começar agora <ArrowRight size={16} className="ms-2" />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
