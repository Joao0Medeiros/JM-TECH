import React from "react";
import {
  Wrench,
  MonitorCheck,
  Cable,
  ClipboardCheck,
  HardDrive,
  Globe,
  MessageCircle,
} from "lucide-react";

import "./App.css";

const WHATSAPP =
  "https://wa.me/5511948226625?text=Olá,%20vim%20pelo%20site%20e%20preciso%20de%20um%20orçamento";

const services = [
  {
    icon: MonitorCheck,
    title: "Atualização de Drivers",
    description: "Melhore desempenho e estabilidade do seu sistema.",
  },
  {
    icon: Wrench,
    title: "Manutenção de Software",
    description: "Limpeza, otimização e correção de erros.",
  },
  {
    icon: HardDrive,
    title: "Manutenção de Hardware",
    description: "Diagnóstico, limpeza e instalação de peças.",
  },
  {
    icon: Cable,
    title: "Organização de Cabos",
    description: "Ambiente limpo e funcional.",
  },
  {
    icon: ClipboardCheck,
    title: "Teste de Equipamento",
    description: "Verificação completa do seu computador.",
  },
  {
    icon: Globe,
    title: "Criação de Sites",
    description:
      "Sites modernos, profissionais e integrados com WhatsApp.",
  },
];

export default function App() {
  return (
    <main className="site">
      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Tecnologia que funciona, <span>resultado que conecta</span>
          </h1>

          <p>
            Manutenção completa de computadores e criação de sites profissionais
            para empresas e prestadores de serviço.
          </p>

          <a href={WHATSAPP} target="_blank" className="btn">
            <MessageCircle size={18} /> Chamar no WhatsApp
          </a>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="services">
        <h2>Nossos Serviços</h2>

        <div className="grid">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div className="card" key={i}>
                <Icon size={32} />
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="about">
        <h2>Por que escolher a JM Tech?</h2>

        <ul>
          <li>🚗 Atendimento no local (vou até você)</li>
          <li>⚡ Serviço rápido e profissional</li>
          <li>💻 Hardware + Software + Sites</li>
          <li>📲 Atendimento direto pelo WhatsApp</li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section className="cta">
        <h2>Precisa de ajuda agora?</h2>

        <p>Chame no WhatsApp e resolva seu problema hoje mesmo.</p>

        <a href={WHATSAPP} target="_blank" className="btn">
          Falar no WhatsApp
        </a>
      </section>

      <footer>
        © 2026 JM Tech Solutions — Atendimento em Barueri e região
      </footer>
    </main>
  );
}
