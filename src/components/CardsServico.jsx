import {
  BarChart3,
  Users2,
  Workflow,
  FileText,
} from 'lucide-react'
import CardServico from './CardServico'
import '../styles/CardsServico.css'

const servicos = [
  {
    icone: <BarChart3 size={22} strokeWidth={2} />,
    titulo: 'Analytics Avançado',
    descricao: 'Dashboards interativos com relatórios em tempo real, exportação de dados e insights automatizados.',
    cor: '#3b82f6',
    tag: 'Dados',
  },
  {
    icone: <Users2 size={22} strokeWidth={2} />,
    titulo: 'Gestão de Equipes',
    descricao: 'Controle de permissões e acompanhamento de performance por colaborador.',
    cor: '#8b5cf6',
    tag: 'RH',
  },
  {
    icone: <Workflow size={22} strokeWidth={2} />,
    titulo: 'Automação de Processos',
    descricao: 'Crie fluxos de trabalho e integre mais de 200 ferramentas.',
    cor: '#06b6d4',
    tag: 'Workflow',
  },
  {
    icone: <FileText size={22} strokeWidth={2} />,
    titulo: 'Relatórios & BI',
    descricao: 'Gere relatórios executivos agendados, dashboards compartilháveis e apresentações automáticas.',
    cor: '#ec4899',
    tag: 'Relatórios',
  },
]

export default function CardsServico() {
  return (
    <section className="cards-section" id="servicos">
      <div className="container-xl">

        {/* Cabeçalho da seção */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6 text-center">
            <span className="badge-control mb-3 d-inline-block">Serviços</span>
            <h2 className="cards-section-title">
              Tudo que sua operação precisa
            </h2>
            <p className="cards-section-subtitle">
              Módulos integrados e prontos para uso — sem configuração complexa,
              para que você possa focar no que realmente importa: crescer seu negócio.
            </p>
          </div>
        </div>

        {/* Grid de cards */}
        <div className="row g-4">
          {servicos.map((servico, index) => (
            <div
              key={servico.titulo}
              className={`col-12 col-sm-6 col-lg-3 animate-fade-up animate-delay-${(index % 4) + 1}`}
            >
              <CardServico {...servico} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
