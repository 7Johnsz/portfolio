import Image from 'next/image';

export default function Timeline() {
  const events = [
    {
      date: "Dezembro 2023 - Fevereiro 2025",
      title: "PPG Industrial do Brasil",
      role: "Jovem aprendiz de Marketing",
      description: "Envio de materiais de marketing, cadastro de clientes, relacionamento com representantes e vendedores PPG, focal-point do SAC de reclamações e participante do e-mail corporativo de FISPQ’s de refinish.",
      image: "https://raw.githubusercontent.com/7Johnsz/portfolio/refs/heads/main/src/public/ppgbr_logo.jpeg"
    }
  ];

  return (
    <div className="max-w-2xl mx-auto px-[2rem] pt-10 flex justify-center items-center">
      <ul className="relative border-l border-muted pl-4">
        {events.map((event, index) => (
          <li key={index} className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-12 h-12 bg-background border rounded-full -left-6 ring-8 ring-background">
              <Image
                src={event.image}
                alt={event.title}
                className="rounded-full object-cover"
                width={40} 
                height={40} 
              />
            </span>
            <div className="flex flex-col gap-1">
              <time className="text-sm text-muted-foreground">
                {event.date}
              </time>
              <h3 className="text-lg font-semibold text-foreground">
                {event.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {event.role}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {event.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
