import { TrendingUp, Users, Clock, Award } from 'lucide-react'
import '../styles/MetricasSection.css'

const metricas = [
  {
    icone: <TrendingUp size={28} strokeWidth={1.8} />,
    valor: 'R$ 1.2B',
    label: 'em transações processadas',
    cor: '#3b82f6',
  },
  {
    icone: <Users size={28} strokeWidth={1.8} />,
    valor: '1.400+',
    label: 'empresas ativas na plataforma',
    cor: '#8b5cf6',
  },
  {
    icone: <Clock size={28} strokeWidth={1.8} />,
    valor: '< 80ms',
    label: 'latência média de resposta',
    cor: '#06b6d4',
  },
  {
    icone: <Award size={28} strokeWidth={1.8} />,
    valor: '99%',
    label: 'de disponibilidade garantida',
    cor: '#10b981',
  },
]

export default function MetricasSection() {
  return (
    <section className="metricas-section" id="metricas">
      <div className="container-xl">
        <div className="metricas-grid">
          {metricas.map((m, i) => (
            <div
              key={m.label}
              className={`metrica-item animate-fade-up animate-delay-${i + 1}`}
            >
              <div className="metrica-icon" style={{ '--m-color': m.cor }}>
                {m.icone}
              </div>
              <div className="metrica-valor" style={{ '--m-color': m.cor }}>
                {m.valor}
              </div>
              <div className="metrica-label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
