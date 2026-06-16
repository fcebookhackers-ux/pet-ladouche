import { createFileRoute } from "@tanstack/react-router";
import heroDog from "@/assets/ladouche-01.webp";
import serviceBanho from "@/assets/banho-aromatico.jpg";
import serviceTosa from "@/assets/service-tosa.jpg";
import serviceSpa from "@/assets/ritual-spa.png";
import apaixonadoPorPets from "@/assets/apaixonado-por-pets.jpg";
import ladouche02 from "@/assets/ladouche-02.jpg";
import ladouche03 from "@/assets/ladouche-03.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Douche — Banho & Tosa boutique para o seu pet | Ribeirão Preto" },
      {
        name: "description",
        content:
          "Spa boutique de banho e tosa em Ribeirão Preto. Cuidado artesanal, ambiente calmo e produtos premium para o bem-estar do seu pet.",
      },
      { property: "og:title", content: "La Douche — Banho & Tosa boutique para o seu pet" },
      {
        property: "og:description",
        content:
          "Cuidado artesanal, ambiente calmo e produtos premium para o bem-estar do seu pet em Ribeirão Preto.",
      },
      { property: "og:image", content: heroDog },
      { name: "twitter:image", content: heroDog },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600&family=Caveat:wght@500;600&display=swap",
      },
    ],
  }),
  component: Landing,
});

const WHATSAPP_URL =
  "https://wa.me/5516981619404?text=Olá!%20Gostaria%20de%20agendar%20um%20banho%20na%20La%20Douche";
const INSTAGRAM_URL = "https://www.instagram.com/_ladouche_/";

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Gallery />
      <Pricing />
      <Visit />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight">La Douche</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            · pet boutique
          </span>
        </a>
        <ul className="hidden items-center gap-8 text-sm md:flex">
          <li><a className="hover:text-primary transition-colors" href="#servicos">Serviços</a></li>
          <li><a className="hover:text-primary transition-colors" href="#sobre">Sobre</a></li>
          <li><a className="hover:text-primary transition-colors" href="#galeria">Galeria</a></li>
          <li><a className="hover:text-primary transition-colors" href="#valores">Valores</a></li>
        </ul>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border border-foreground/15 bg-background/70 px-5 py-2.5 text-sm backdrop-blur transition hover:border-primary hover:text-primary md:inline-flex"
        >
          Agendar banho
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-warm grain">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-32 md:grid-cols-12 md:gap-8 md:pt-40 lg:px-10">
        <div className="md:col-span-6 lg:col-span-6">
          <p className="font-script text-2xl text-terracotta">bonjour, mon ami</p>
          <h1 className="mt-3 font-display text-5xl leading-[0.95] text-balance md:text-7xl lg:text-[5.5rem]">
            Um banho que é<br />
            <em className="italic text-primary">um carinho</em>
            <span className="text-primary">.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Boutique de banho e tosa em Ribeirão Preto. Atendimento sem pressa, produtos premium e
            um cantinho calmo onde o seu pet é tratado como convidado especial.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:scale-[1.02] hover:bg-primary/90"
            >
              Agendar pelo WhatsApp
              <span aria-hidden>→</span>
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3.5 text-sm transition hover:border-foreground/40"
            >
              Ver serviços
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-6">
            <Stat n="7+" label="anos de boutique" />
            <Stat n="2k+" label="patinhas felizes" />
            <Stat n="5★" label="no Instagram" />
          </dl>
        </div>

        <div className="relative md:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src={heroDog}
              alt="Cachorrinho branco enrolado em toalha em um banheiro com detalhes dourados"
              width={1536}
              height={1920}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-56 rotate-[-4deg] rounded-2xl bg-card p-4 shadow-card md:block">
            <p className="font-script text-xl text-primary">— Mia, poodle</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              "Saí cheirosa, com lacinho novo e nem latido reclamando. Voltarei!"
            </p>
          </div>
          <div className="absolute -right-4 top-8 hidden rounded-full border border-border bg-card/90 px-4 py-2 text-xs backdrop-blur md:block">
            ✦ produtos veganos & cruelty-free
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-3xl text-primary">{n}</dt>
      <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</dd>
    </div>
  );
}

function Marquee() {
  const items = ["Banho relaxante", "Tosa higiênica", "Tosa na tesoura", "Hidratação", "Perfume", "Lacinho do dia", "Corte de unhas", "Limpeza de ouvido"];
  return (
    <div className="border-y border-border/60 bg-secondary/40 py-5">
      <div className="flex animate-[scroll_30s_linear_infinite] gap-12 whitespace-nowrap font-display text-xl text-muted-foreground">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
            <span className="text-primary">✿</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { to { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}

function Services() {
  const services = [
    {
      img: serviceBanho,
      tag: "Le bain",
      title: "Banho aromático",
      desc: "Águas mornas, shampoo dermatológico e secagem com toque calmo, no ritmo do seu pet.",
    },
    {
      img: serviceTosa,
      tag: "La coupe",
      title: "Tosa boutique",
      desc: "Tosa higiênica, na máquina ou tesoura, modelada por quem entende cada raça e cada bigode.",
    },
    {
      img: serviceSpa,
      tag: "Le spa",
      title: "Ritual spa",
      desc: "Hidratação profunda, escovação, perfume suave e o lacinho do dia para sair desfilando.",
    },
  ];

  return (
    <section id="servicos" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <p className="font-script text-xl text-terracotta">nos services</p>
          <h2 className="mt-2 text-4xl md:text-5xl">Cada detalhe pensado<br /><em className="italic text-primary">para o seu pet</em>.</h2>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          Atendemos cães e gatos de pequeno e médio porte com agendamento individual — sem fila,
          sem estresse, sem pressa.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card transition hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-3 p-7">
              <span className="font-script text-lg text-primary">{s.tag}</span>
              <h3 className="text-2xl">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center lg:px-10">
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-[2rem] bg-gradient-sunset">
            <img
              src={apaixonadoPorPets}
              alt="Poodle posando após a tosa"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover mix-blend-multiply"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 max-w-[14rem] rounded-2xl bg-background p-5 shadow-card">
            <p className="font-display text-3xl text-primary">la · douche</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              do francês, “o banho”
            </p>
          </div>
        </div>

        <div>
          <p className="font-script text-xl text-terracotta">notre histoire</p>
          <h2 className="mt-2 text-4xl md:text-5xl">
            Pequena, autoral e<br /><em className="italic text-primary">apaixonada por pets.</em>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            A La Douche nasceu da vontade de oferecer um banho diferente: silencioso, perfumado
            e feito com tempo. Atendemos um pet por vez, sem gaiolas de espera, com música
            baixa e profissional dedicada do início ao fim.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Agendamento individual — seu pet não cruza com outros",
              "Produtos premium, dermatologicamente testados",
              "Ambiente climatizado com aromas suaves",
              "Profissional formada em estética animal",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [heroDog, serviceBanho, serviceSpa, serviceTosa, ladouche02, ladouche03];
  return (
    <section id="galeria" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="font-script text-xl text-terracotta">le journal</p>
          <h2 className="mt-2 text-4xl md:text-5xl">Direto do nosso<br /><em className="italic text-primary">Instagram</em>.</h2>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden text-sm underline decoration-primary decoration-2 underline-offset-4 hover:text-primary md:inline"
        >
          @_ladouche_
        </a>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        {imgs.map((src, i) => (
          <a
            key={i}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className={`group relative overflow-hidden rounded-2xl ${
              i === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"
            }`}
          >
            <img
              src={src}
              alt="Foto da galeria La Douche"
              loading="lazy"
              width={800}
              height={800}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-ink/0 transition group-hover:bg-foreground/20" />
          </a>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Le petit",
      size: "Pets até 7kg",
      price: "75",
      includes: ["Banho aromático", "Secagem", "Corte de unhas", "Limpeza de ouvido", "Perfume & laço"],
    },
    {
      name: "Le moyen",
      featured: true,
      size: "Pets de 8 a 15kg",
      price: "95",
      includes: ["Tudo do Petit", "Tosa higiênica", "Escovação caprichada", "Hidratação leve"],
    },
    {
      name: "Le grand",
      size: "Pets acima de 15kg",
      price: "129",
      includes: ["Tudo do Moyen", "Tosa completa na tesoura", "Hidratação profunda"],
    },
  ];

  return (
    <section id="valores" className="bg-gradient-warm py-24 lg:py-32 grain">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-script text-xl text-terracotta">tarifs</p>
          <h2 className="mt-2 text-4xl md:text-5xl">Valores transparentes,<br /><em className="italic text-primary">carinho ilimitado</em>.</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Valores de referência para banho completo. Tosa na tesoura, desembolo e pets com pelos
            longos podem ter ajuste — combinado antes, sempre.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl border p-8 transition ${
                p.featured
                  ? "border-primary bg-card shadow-soft md:-translate-y-3"
                  : "border-border bg-card/70"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-primary-foreground">
                  mais querido
                </span>
              )}
              <h3 className="font-display text-2xl">{p.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{p.size}</p>
              <p className="mt-6 font-display text-5xl text-primary">
                R$ {p.price}
                <span className="text-base text-muted-foreground"> /sessão</span>
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {p.includes.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 inline-block h-1 w-1 rounded-full bg-primary" />
                    {i}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm transition ${
                  p.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-foreground/15 hover:border-primary hover:text-primary"
                }`}
              >
                Reservar horário
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-12 rounded-[2.5rem] bg-foreground p-10 text-background shadow-card md:grid-cols-2 md:p-16">
        <div>
          <p className="font-script text-2xl text-[#f86e14]">à bientôt</p>
          <h2 className="mt-2 text-4xl text-background md:text-5xl">
            Venha nos visitar em<br /><em className="italic text-[#f86e14]">Ribeirão Preto</em>.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-background/70">
            Atendimento somente com hora marcada. Reserve pelo WhatsApp ou mande uma DM no nosso
            Instagram — respondemos pessoalmente.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#f86e14] px-6 py-3 text-sm text-white transition hover:opacity-90"
            >
              WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3 text-sm text-background transition hover:border-[#f86e14] hover:text-[#f86e14]"
            >
              @_ladouche_
            </a>
          </div>
        </div>

        <dl className="space-y-6 border-t border-background/15 pt-8 text-sm md:border-l md:border-t-0 md:pl-12 md:pt-0">
          <Info label="Endereço" value="Av. Senador César Vergueiro 879, Ribeirão Preto" />
          <Info label="Horário" value="Segunda a sábado · 9h às 18h" />
          <Info label="Atendimento" value="Apenas com agendamento" />
          <Info label="Pagamento" value="Pix, débito e crédito" />
        </dl>
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.3em] text-background/50">{label}</dt>
      <dd className="mt-1 font-display text-xl text-background">{value}</dd>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center lg:px-10">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-2xl">La Douche</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            pet boutique · ribeirão preto
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} La Douche Pet Shop. Feito com carinho para patinhas felizes.
        </p>
      </div>
    </footer>
  );
}
