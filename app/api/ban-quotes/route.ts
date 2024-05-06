export const dynamic = "force-dynamic"; // static by default, unless reading the request

const BAN_QUOTES = [
  "Soy el zorro de la avaricia, Ban de los 7 pecados capitales.",
  "Los verdaderos pecados, jamás pueden ser expiados.",
  "No importa que lado tan horrible tengas, yo te voy a robar.",
  "Si hay un comienzo, entonces también hay un final.",
  "Un Pecado Verdadero, no puede ser borrado sin importar lo que haga.",
  "Aunque mi vida no haya sido del todo buena, si vivo lo suficiente... Algo bueno podría pasarme... O algo así.",
  "Algún día, definitivamente te haré mía.",
  "¿Puedo interpretar tu silencio como un sí?",
  "No ser perfecto no quita que no valgamos la pena.",
];

export function GET(request: Request) {
  const randomNumber = Math.floor(Math.random() * BAN_QUOTES.length);
  const randomBanQuote = BAN_QUOTES[randomNumber];
  return new Response(`${randomBanQuote} - Ban`);
}
