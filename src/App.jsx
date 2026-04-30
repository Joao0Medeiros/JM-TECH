import React from 'react'
import { motion } from 'framer-motion'
import {
  Cpu, ShieldCheck, Wrench, MonitorCheck, Cable, ClipboardCheck,
  Phone, Mail, MapPin, MessageCircle, Star, Clock, CheckCircle2,
  HardDrive, Home, Building2, Sparkles, ArrowRight, BadgeCheck
} from 'lucide-react'
import logo from './assets/logo-jm-tech.png'

const WHATSAPP_URL = 'https://wa.me/5511948226625?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20t%C3%A9cnico%20no%20local.%20Vim%20pelo%20site%20da%20JM%20Tech%20Solutions.'

const services = [
  { icon: MonitorCheck, title: 'Atualização de Drivers', description: 'Atualização e correção de drivers para melhorar desempenho, estabilidade e compatibilidade.' },
  { icon: Wrench, title: 'Manutenção de Software', description: 'Limpeza, otimização, remoção de lentidão, ajustes e correção de erros no sistema.' },
  { icon: HardDrive, title: 'Manutenção de Hardware', description: 'Diagnóstico físico, limpeza interna, troca de peças, SSD, memória, fonte e superaquecimento.' },
  { icon: Cable, title: 'Reintegração de Cabos', description: 'Organização, reconexão, identificação de falhas e padronização dos cabos do equipamento.' },
  { icon: ClipboardCheck, title: 'Teste de Equipamento', description: 'Validação completa do funcionamento para garantir segurança e confiabilidade.' },
  { icon: Home, title: 'Atendimento no Local', description: 'Eu vou até sua casa ou empresa para resolver com mais praticidade e rapidez.' },
]

const benefits = [
  'Atendimento em residência ou empresa',
  'Manutenção completa: hardware + software',
  'Diagnóstico profissional e transparente',
  'Contato direto pelo WhatsApp',
  'Suporte em Barueri/SP e região',
  'Solução prática para o dia a dia',
]

const process = [
  { title: 'Contato', description: 'Você chama no WhatsApp e explica o problema.' },
  { title: 'Diagnóstico', description: 'Faço a análise inicial e combino o atendimento.' },
  { title: 'Atendimento', description: 'Vou até o local e realizo o serviço técnico.' },
  { title: 'Teste final', description: 'Tudo é validado antes da finalização.' },
]

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-300">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-slate-300">{text}</p>}
    </div>
  )
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050914] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#1463ff33,transparent_35%),radial-gradient(circle_at_bottom_right,#00a6ff22,transparent_35%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.12] bg-[linear-gradient(90deg,white_1px,transparent_1px),linear-gradient(white_1px,transparent_1px)] bg-[size:56px_56px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050914]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <img src={logo} alt="JM Tech Solutions" className="h-12 w-12 rounded-2xl bg-white object-cover p-1" />
            <div>
              <p className="text-lg font-black tracking-wide">JM TECH</p>
              <p className="text-xs uppercase tracking-[0.28em] text-blue-300">Solutions</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-300 md:flex">
            <a className="hover:text-white" href="#servicos">Serviços</a>
            <a className="hover:text-white" href="#local">Atendimento</a>
            <a className="hover:text-white" href="#contato">Contato</a>
          </nav>

          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500">
            <MessageCircle className="h-5 w-5" /> WhatsApp
          </a>
        </div>
      </header>

      <section id="inicio" className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-200">
            <Sparkles className="h-4 w-4" /> Suporte técnico com atendimento no local
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Tecnologia que funciona, <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">suporte que vai até você.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Manutenção completa de computadores: hardware, software, drivers, cabos e testes de equipamento com atendimento em residência ou empresa.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-black text-white shadow-xl shadow-blue-600/25 transition hover:-translate-y-1 hover:bg-blue-500">
              Solicitar atendimento <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#servicos" className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-black text-white transition hover:bg-white/10">
              Ver serviços
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {[
              ['Hardware', 'e software'],
              ['No local', 'casa/empresa'],
              ['Barueri', 'e região'],
            ].map(([a, b]) => (
              <div key={a} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                <p className="text-xl font-black text-blue-200">{a}</p>
                <p className="text-sm text-slate-400">{b}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
          <div className="absolute -inset-8 rounded-[3rem] bg-blue-600/20 blur-3xl" />
          <div className="relative rounded-[2.5rem] border border-blue-300/20 bg-[#0a1428]/90 p-8 shadow-2xl shadow-blue-950/70 backdrop-blur">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600/20 to-cyan-400/5 p-8 text-center">
              <img src={logo} alt="Logo JM Tech" className="mx-auto h-36 w-36 rounded-[2rem] bg-white object-cover p-3 shadow-2xl" />
              <h2 className="mt-6 text-3xl font-black">JM Tech Solutions</h2>
              <p className="mt-2 text-blue-200">Soluções em manutenção e suporte técnico</p>
            </div>

            <div className="mt-6 grid gap-3">
              {benefits.slice(0, 4).map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-300" />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="servicos" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionTitle eyebrow="Serviços" title="Manutenção técnica completa" text="Um site de empresa precisa deixar claro o que você resolve. Aqui estão os serviços principais da JM Tech Solutions." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-blue-300/40 hover:bg-blue-500/10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-200 group-hover:bg-blue-600/30">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section id="local" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2.5rem] border border-blue-300/20 bg-gradient-to-br from-blue-600/25 to-white/[0.04] p-8 md:p-10">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-600 shadow-xl shadow-blue-600/25">
              <Home className="h-8 w-8" />
            </div>
            <h2 className="text-4xl font-black">Atendimento no local</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Você não precisa sair de casa. Eu vou até sua residência ou empresa para realizar o diagnóstico, manutenção e testes do equipamento.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-5"><Home className="mb-3 h-6 w-6 text-blue-200" /><b>Residência</b><p className="mt-2 text-sm text-slate-300">Mais comodidade para você.</p></div>
              <div className="rounded-2xl bg-white/5 p-5"><Building2 className="mb-3 h-6 w-6 text-blue-200" /><b>Empresa</b><p className="mt-2 text-sm text-slate-300">Suporte para seu ambiente de trabalho.</p></div>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10">
              <BadgeCheck className="h-8 w-8 text-blue-200" />
            </div>
            <h2 className="text-4xl font-black">Como funciona</h2>
            <div className="mt-8 space-y-5">
              {process.map((step, i) => (
                <div key={step.title} className="flex gap-4 rounded-2xl bg-white/5 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black">{i + 1}</div>
                  <div>
                    <h3 className="font-black">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionTitle eyebrow="Diferenciais" title="Imagem de empresa, atendimento de confiança" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <CheckCircle2 className="h-6 w-6 shrink-0 text-blue-300" />
              <p className="font-semibold text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="rounded-[2.5rem] border border-blue-300/20 bg-[#0a1428] p-8 shadow-2xl shadow-blue-950/50 md:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-300">Contato</p>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">Solicite seu orçamento</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Fale diretamente comigo e explique o problema. Atendimento técnico em Barueri/SP e região.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-black shadow-xl shadow-blue-600/25 transition hover:bg-blue-500">
                <MessageCircle className="h-5 w-5" /> Chamar no WhatsApp
              </a>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl bg-white/5 p-5"><p className="text-sm text-slate-400">Responsável técnico</p><p className="mt-1 text-xl font-black">João Felipe Melo Medeiros</p></div>
              <a className="flex items-center gap-4 rounded-3xl bg-white/5 p-5 transition hover:bg-white/10" href="tel:+5511948226625"><Phone className="h-6 w-6 text-blue-300" /><span className="font-semibold">(11) 94822-6625</span></a>
              <a className="flex items-center gap-4 rounded-3xl bg-white/5 p-5 transition hover:bg-white/10" href="mailto:joaofmedeiros26@hotmail.com"><Mail className="h-6 w-6 text-blue-300" /><span className="font-semibold">joaofmedeiros26@hotmail.com</span></a>
              <div className="flex items-center gap-4 rounded-3xl bg-white/5 p-5"><MapPin className="h-6 w-6 text-blue-300" /><span className="font-semibold">Barueri/SP e região</span></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
        © 2026 JM Tech Solutions — Tecnologia que funciona, suporte que resolve.
      </footer>
    </main>
  )
}
