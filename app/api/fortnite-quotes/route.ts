export const dynamic = "force-dynamic"; // static by default, unless reading the request

const QUOTES = [
  "No importa si el arma es legendaria, aun así puede que no sea la correcta para ti.",
  "Lo que quieres no es un amigo que haga muchas kills, sino uno que te levante cada que lo necesitas.",
  "Incluso los mejores y más experimentados se pierden en la tormenta de vez en cuando.",
  "¿Cómo esperas tener altura si no te tomas el tiempo para construir?",
  "Todos tienen un límite de cosas que podemos cargar, pero tarde o temprano debes soltar lo que te importa seguir adelante.",
  "Que estés en la tormenta no significa que todo esté perdido.",
  "EPIC nunca te pedirá tu contraseña, pero ella sí.",
  "No importa que tan fuerte parezca la tormenta, nunca podrá apagar una fogata bien establecida.",
  "Puedes cambiar la skin pero no al jugador.",
  "Al inicio nadie ve tú progres, solo cuando vas ganando es cuando te observan los demás.",
  "Mientras más alto construyas, más te van a disparar.",
  "No importa si pierdes o ganas, todos vamos al mismo Lobby al final de la partida.",
  "Destruir estructuras de los demás, nunca te dará más materiales.",
  "Hay millones de planetas en ele universo, pero solo aquí existe el FORTNITE.",
  "Mientras más pequeño sea el círculo, mejor es la gente.",
  "FORTNITE siempre estará para ti uwu",
  "Las tormentas siempre comienzan grandes pero terminan pequeñas.",
  "No importa el Loot sino como lo usas.",
  "Un escudo no te cuidará de la tormenta.",
  "Los tesoros en la oscuridad brillan más.",
  "Si destruyen tu construcción, siempre puedes comenzar de nuevo.",
  "La gente te ataca cuando estás más vulnerable.",
  "Las construcciones son como las amistades, si tardan en formase, son más resistentes.",
  "Los mini escudos son como tus amigos, y los pots grandes como tu novia. Siempre van primero los minis.",
  "Algunos aterrizan sobre terreno alto, mientras otros deben construir su camino a la cima.",
  "Vale más un buen KIT de sanación que 5 vendajes.",
];

export function GET(request: Request) {
  const randomNumber = Math.floor(Math.random() * QUOTES.length);
  const randomQuote = QUOTES[randomNumber];
  return new Response(randomQuote);
}
