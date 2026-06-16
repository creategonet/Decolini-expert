export type NavigationItem = {
  label: string;
  href: string;
};

export type Benefit = {
  title: string;
  text: string;
};

export type Step = {
  number: string;
  title: string;
  text: string;
};

export type Service = {
  text: string;
};

export type BeforeAfterPair = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  ariaLabel: string;
};

export type Testimonial = {
  title: string;
  text: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const navigationItems: NavigationItem[] = [
  { label: "Beneficii", href: "#beneficii" },
  { label: "Cum lucrăm", href: "#cum-lucram" },
  { label: "Servicii", href: "#servicii" },
  { label: "Întrebări", href: "#intrebari" },
];

export const socialProofItems = [
  { text: "100% dintre clienți ne recomandă" },
  { text: "7 recenzii - toate pozitive" },
  { text: "3.100+ urmăritori pe Facebook" },
];

export const problemCards = [
  { text: "Costuri mari" },
  { text: "Demolări" },
  { text: "Mizerie" },
  { text: "Risc pentru faianță" },
];

export const solutionSteps = [
  { number: "01", text: "Reparăm" },
  { number: "02", text: "Acoperim" },
  { number: "03", text: "Aplicăm strat nou" },
  { number: "04", text: "Cada arată din nou curată și lucioasă" },
];

export const benefits: Benefit[] = [
  {
    title: "Arată ca nouă",
    text: "Suprafață albă, lucioasă, fără ciobituri sau pete de rugină.",
  },
  {
    title: "Gata într-o singură zi",
    text: "Îți folosești baia foarte repede, fără renovare lungă.",
  },
  {
    title: "Fără demolări și fără mizerie",
    text: "Nu spargem nimic și nu stricăm gresia sau faianța din jur.",
  },
  {
    title: "Cost mult mai mic",
    text: "Costă mult mai puțin decât o cadă nouă montată, fără demolare și remontare.",
  },
  {
    title: "Mai ușor de curățat",
    text: "Suprafață mai rezistentă și mai ușor de întreținut decât înainte.",
  },
];

export const howItWorksSteps: Step[] = [
  {
    number: "01",
    title: "Ne trimiți poze cu cada",
    text: "Trimite câteva imagini clare pe telefon, ca să vedem starea căzii: ciobituri, pete, rugină, zgârieturi sau zone tocite.",
  },
  {
    number: "02",
    title: "Primești o estimare",
    text: "Îți spunem ce soluție recomandăm, cât poate dura lucrarea și care este costul aproximativ.",
  },
  {
    number: "03",
    title: "Venim și facem lucrarea",
    text: "Pregătim suprafața, reparăm defectele și aplicăm stratul nou de recondiționare.",
  },
];

export const services: Service[] = [
  { text: "Recondiționare / reglazurare căzi de baie - strat nou, alb, lucios" },
  { text: "Reparare ciobituri, zgârieturi și fisuri" },
  { text: "Acoperire pete de rugină și suprafețe tocite" },
  { text: "Căzi de fontă, acril și fibră de sticlă" },
  { text: "(opțional) Schimbare de culoare" },
];

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    before: "/cada-before-1.jpg",
    after: "/cada-after-1.jpg",
    beforeAlt: "Cadă înainte de recondiționare - suprafață deteriorată",
    afterAlt: "Cadă recondiționată - suprafață albă și lucioasă",
    ariaLabel: "Compară înainte și după pentru cada 1",
  },
  {
    before: "/cada-before-2.jpg",
    after: "/cada-after-2.jpg",
    beforeAlt: "Cadă înainte de recondiționare - suprafață deteriorată",
    afterAlt: "Cadă recondiționată - suprafață albă și lucioasă",
    ariaLabel: "Compară înainte și după pentru cada 2",
  },
  {
    before: "/cada-before-3.jpg",
    after: "/cada-after-3.jpg",
    beforeAlt: "Cadă înainte de recondiționare - suprafață deteriorată",
    afterAlt: "Cadă recondiționată - suprafață albă și lucioasă",
    ariaLabel: "Compară înainte și după pentru cada 3",
  },
  {
    before: "/cada-before-4.jpg",
    after: "/cada-after-4.jpg",
    beforeAlt: "Cadă înainte de recondiționare - suprafață deteriorată",
    afterAlt: "Cadă recondiționată - suprafață albă și lucioasă",
    ariaLabel: "Compară înainte și după pentru cada 4",
  },
];

export const testimonials: Testimonial[] = [
  {
    title: "Mihaela Semian recomandă DECOLINI EXPERT - Amenajări Suceava.",
    text: "Recomand DECOLINI EXPERT! O echipa profesionista, cu oameni seriosi si harnici",
  },
  {
    title: "Vasy Iuga recomandă DECOLINI EXPERT - Amenajări Suceava.",
    text: "Mulțumim frumos Decolini... Octavian, un băiat de nota 10 care se implica 100% în ceea ce face.. Foarte mulțumiți de lucrare și vom continua împreună numaidecât... Preț pe manopera foarte bun și calitatea lucrării foarte bună..",
  },
  {
    title: "Marius Baltă recomandă DECOLINI EXPERT - Amenajări Suceava.",
    text: "Echipă de oameni foarte muncitori,disciplinați,punctuali si atenți!!\nRecomand 100%!!!",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Cât durează?",
    answer:
      "De obicei terminăm într-o singură zi de lucru, fără mizerie și fără să-ți dăm baia peste cap. După ce aplicăm stratul nou, cada are nevoie de un timp de uscare pe care ți-l spunem exact, în funcție de produs și de condițiile din baia ta.",
  },
  {
    question: "Costă mai puțin decât o cadă nouă?",
    answer:
      "Da, semnificativ mai puțin. Și nu doar la prețul căzii - economisești și demolarea celei vechi, scosul ei pe scări, montarea uneia noi și, de cele mai multe ori, spartul și refacerea gresiei și a faianței din jur. Practic plătești doar recondiționarea, nu o renovare întreagă. Pentru majoritatea clienților, diferența de cost e de câteva ori mai mică.",
  },
  {
    question: "Cât rezistă?",
    answer:
      "Mulți ani la o întreținere normală - vorbim despre o suprafață făcută să țină, nu despre o soluție de moment. La final îți lăsăm și câteva sfaturi simple de curățare (ce produse folosești și ce eviți), ca stratul nou să rămână neted și lucios cât mai mult timp. Cu puțină grijă, uiți că ai avut vreodată o cadă veche.",
  },
  {
    question: "Merge pe orice tip de cadă?",
    answer:
      "Lucrăm căzi de fontă, acril și fibră de sticlă - cele mai întâlnite tipuri din casele și apartamentele de la noi. Indiferent de material, venim, vedem starea exactă a căzii tale și îți spunem direct și onest dacă merită recondiționată sau nu.",
  },
  {
    question: "Faceți deplasarea?",
    answer:
      "Da, venim la tine, ne uităm pe cadă la fața locului și îți dăm o ofertă clară, fără surprize. Așa vezi exact ce primești și cât costă, înainte să te decizi. E cel mai simplu mod să afli dacă recondiționarea e soluția potrivită pentru cada ta.",
  },
];

export const footerServices =
  "Recondiționare căzi · Reglazurare căzi · Reparare ciobituri · Acoperire rugină · Căzi fontă · Căzi acril · Căzi fibră de sticlă";
