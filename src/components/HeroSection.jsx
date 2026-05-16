import { ArrowRight, PlayCircle, TrendingUp, Users, Zap } from 'lucide-react'
import '../styles/HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background decorativo */}
      <div className="hero-bg-glow" aria-hidden="true" />
      <div className="hero-bg-grid" aria-hidden="true" />

      <div className="container-xl">
        <div className="row align-items-center gy-5">

          {/* Conteúdo esquerdo */}
          <div className="col-lg-6">
            <div className="animate-fade-up">
              <span className="badge-control mb-4 d-inline-block">
                Plataforma de gestão digital
              </span>
            </div>

            <h1 className="hero-title animate-fade-up animate-delay-1">
              Gerencie tudo em <span className="hero-title-accent">um só lugar</span>
            </h1>

            <p className="hero-subtitle animate-fade-up animate-delay-2">
              Controle total sobre seus processos, métricas e equipes. Simples, rápido e eficiente.
            </p>

            <div className="hero-actions animate-fade-up animate-delay-3">
              <a href="#servicos" className="btn-control btn">
                Ver serviços <ArrowRight size={16} className="ms-2" />
              </a>
              <a href="#" className="btn-control-outline btn d-inline-flex align-items-center gap-2">
                <PlayCircle size={17} />
                Assistir demonstração
              </a>
            </div>

            {/* Mini stats */}
            <div className="hero-stats animate-fade-up animate-delay-4">
              <div className="hero-stat">
                <TrendingUp size={16} className="hero-stat-icon" />
                <span className="hero-stat-value">+240%</span>
                <span className="hero-stat-label">produtividade</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <Users size={16} className="hero-stat-icon" />
                <span className="hero-stat-value">12 mil+</span>
                <span className="hero-stat-label">usuários ativos</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <Zap size={16} className="hero-stat-icon" />
                <span className="hero-stat-value">99.9%</span>
                <span className="hero-stat-label">uptime</span>
              </div>
            </div>
          </div>

          {/* Painel visual à direita */}
          <div className="col-lg-6 animate-fade-up animate-delay-3">
            <div className="hero-visual">
              <div className="hero-card-main">
                <div className="hero-card-header">
                  <span className="hero-card-title">Visão Geral – Abril 2026</span>
                  <span className="hero-card-badge">● Ao vivo</span>
                </div>
                <div className="hero-chart-bars">
                  {[60, 80, 45, 95, 70, 88, 55, 92, 75, 100, 68, 85].map((h, i) => (
                    <div
                      key={i}
                      className="hero-bar"
                      style={{ '--bar-h': `${h}%`, '--bar-delay': `${i * 0.05}s` }}
                    />
                  ))}
                </div>
                <div className="hero-card-footer">
                  <div className="hero-metric">
                    <span className="hero-metric-value">R$ 250k</span>
                    <span className="hero-metric-label">receita do mês</span>
                  </div>
                  <div className="hero-metric">
                    <span className="hero-metric-value success">+18.%</span>
                    <span className="hero-metric-label">vs. mês anterior</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
