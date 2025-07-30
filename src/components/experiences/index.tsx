import Image from 'next/image';

export default function Timeline() {
  const events = [
    {
      date: "Dez 2023 - Fev 2025",
      title: "PPG Industrial do Brasil",
      role: "Jovem aprendiz de Marketing",
      description: "Envio de materiais de marketing, cadastro de clientes, relacionamento com representantes e vendedores PPG, focal-point do SAC de reclamações e participante do e-mail corporativo de FISPQ’s de refinish.",
      image: "https://raw.githubusercontent.com/7Johnsz/portfolio/refs/heads/main/src/public/ppg_logo.png"
    },
    {
      date: "Abr 2025 - Jul 2025",
      role: "Estagiário de Sistemas de Informação",
      description: "Atuação no suporte a áreas específicas do negócio, lidando desde incidentes em produção reportados por usuários até projetos de melhorias estratégicas definidos pela liderança executiva. Colaboração direta com Analistas de Negócios dos Sistemas Core (Oracle R12).",
    },
    {
      date: "Ago 2025 - Atualmente",
      title: "Honda Brasil",
      role: "Estagiário de TI",
      description: "Atuação no desenvolvimento de produtos digitais para a área de vendas da Honda, participação de daily meetings dos squads, realização na análise de dados, auxiliar na construção de use-cases e testes.",
      image: "https://raw.githubusercontent.com/7Johnsz/portfolio/refs/heads/main/src/public/honda_brasil_logo.jpeg"
    }
  ];

  return (
    <div className="max-w-2xl mx-auto px-[2rem] pt-20 flex justify-center items-center">
      <ul className="relative border-l border-muted pl-4">
        {events.map((event, index) => (
          <li key={index} className="mb-10 ml-6">
            {event.image ? (
              <span className="absolute flex items-center justify-center w-12 h-12 bg-background border rounded-full -left-6 ring-8 ring-background">
                <Image
                  src={event.image}
                  alt={event.title}
                  className="rounded-full object-cover"
                  width={40} 
                  height={40} 
                />
              </span>
            ) : null}
            <div className="flex flex-col gap-1">
              <time className="text-sm text-muted-foreground">
                {event.date}
              </time>

              {event.title ? (  
                <h3 className="text-lg font-semibold text-foreground">
                  {event.title}
                </h3>
              ) : null}

              <p className="text-sm text-muted-foreground font-bold mt-0.5">
                {event.role}
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                {event.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
