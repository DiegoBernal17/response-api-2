import type { VercelRequest, VercelResponse } from "@vercel/node";

const LOVE_QUOTES = [
  "Las tentaciones como tú merecen pecados como yo.",
  "¿Qué hace una estrella tan abajo del cielo?",
  "Acabo de ver un ángel, no estoy seguro de estar en la tierra.",
  "Eres paz, calma, armonía, el arcoíris cuando llueve, mi sol cuando el cielo está gris...",
  "Algunos de mis amigos beben alcohol, otros fuman hierba, varios toman vino. Todos tienen su vicio, el mío eres tú.",
  "Te nombro la octava maravilla del mundo.",
  "No me preguntes por qué, pero mi mente se pasa el día hablando de ti.",
  "Podría pasarme la vida entera admirando tu belleza, ¿quieres que te lo demuestre?",
  "En mi vida eres eso, que no puedo explicar con palabras, que solo puedo sentir y demostrarte.",
  "¿Cómo explicar que muero un poquito cada día por las ganas de verte?",
  "Robaste mi corazón pero te dejaré tenerlo.",
  "Cuanto más te veo, más te quiero ver.",
  "Deberíamos darnos un tiempo. Tú me das tu presente, yo te doy mi futuro.",
  "He hecho de tu sonrisa un refugio.",
  "¿Tienes hora? Es que quiero recordar el momento exacto en el que te conocí de ti.",
  "Entonces te vi, y todas las canciones de amor tuvieron sentido.",
  "Dejé de buscar cuál era el significado de la vida en cuanto vi tu sonrisa.",
  "Mi color favorito es verte.",
  "Lo primero que pensé cuando te conocí fue que mi suerte empezaba a mejorar.",
  "Hay rincones en el mundo que son pura magia. Tú, por ejemplo.",
  "En tus ojos veo algo más bonito que las estrellas.",
  "No pierdas el tiempo buscando a tu media naranja, ¡aquí estoy!",
  "Eres como la chancla de mi madre: te veo venir y se me acelera el corazón.",
  "¿Acaba de salir el sol o me has sonreído?",
  "Tus ojos están como para perderse en ellos.",
  "Todos tienen un destino y el mío fue cuando te encontré.",
  "Por tentaciones como tú hay tantos pecadores como yo.",
  "Te cruzaste en mi camino y se me olvidó a dónde iba.",
  "Sabes que me gusta el café, pero hoy prefiero tener té.",
  "He decidido gastar mi batería del móvil contigo.",
  "Eres mi notificación favorita.",
  "Me gustaría tener 10 vidas para poder conocerte 10 veces.",
  "Mi lugar favorito en el mundo es este lugar.",
  "Si tuviera cuatro monedas de 50 céntimos para darle a las cuatro mujeres más bellas del mundo, tú tendrías dos euros.",
  "Perdí mi osito de peluche, ¿me abrazarías en su lugar?",
  "Siempre pensé que Disneylandia era el lugar más feliz de la Tierra, pero eso era antes de tener la oportunidad de estar aquí.",
  "Iba a decir algo muy bonito... pero cuando te vi, me quedé sin palabras.",
];

export function GET(request: Request) {
  const randomNumber = Math.floor(Math.random() * LOVE_QUOTES.length);
  const randomBanQuote = LOVE_QUOTES[randomNumber];
  return new Response(`${randomBanQuote} - Ban`);
}
