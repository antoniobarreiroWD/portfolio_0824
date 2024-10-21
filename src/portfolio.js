const header = {
  homepage: "https://github.com/antoniobarreiroWD",
  title: "ABM",
};

const about = {
  name: "Antonio Barreiro",
  role: "Full Stack Developer",
  social: {
    linkedin: "https://www.linkedin.com/in/antonio-barreiro-b240b8104/",
    github: "https://github.com/antoniobarreiroWD",
  },
};

const projects = [
  {
    name: "LitLoop",
    description:
      "LitLoop es una aplicación que permite a los usuarios buscar, consultar información y adquirir libros. También pueden guardar sus favoritos en su perfil. La plataforma utiliza la API de Google Books para obtener los datos.",
    stack: ["React", "Javascript", "Node.Js", "MongoDB"],
    sourceCode: "https://github.com/antoniobarreiroWD/litloop__front",
    sourceCodeBackend: "https://github.com/antoniobarreiroWD/litloop__back",
    livePreview: "https://litloop-front.vercel.app/",
  },
  {
    name: "Legal Medicine ",
    description:
      "Esta aplicación satisface las necesidades administrativas y legales de los trabajadores de medicina forense. Permite a los usuarios autorizados crear, actualizar y derivar procedimientos a otros departamentos para su posterior gestión.",
    stack: ["React", "Javascript", "Node.Js", "MongoDB"],
    sourceCode: "https://github.com/antoniobarreiroimmune/front_dpl",
    sourceCodeBackend: "https://github.com/antoniobarreiroimmune/project_dpl",
    videoLink: "https://youtu.be/pw_3_IJtreA",
  },
  {
    name: "Las Aventuras de Mairim",
    description:
      "Este proyecto es mi primera aproximación a la creación de videojuegos. Se trata de un juego de plataformas 2D en el que el jugador debe superar obstáculos y enemigos para llegar al final del nivel.",
    stack: ["Phaser", "Javascript"],
    sourceCode:
      "https://github.com/antoniobarreiroimmune/first_phaser_game.git",
    livePreview: "https://antoniobarreirowd.github.io/first_phaser_game/",
  },
  {
    name: "Poke Combat",
    description:
      "Valiéndonos de la PokeApi, creamos un juego en el que los usuarios pueden simular un combate entre dos pokemon.",
    stack: ["React", "Javascript", "CSS"],
    sourceCode: "https://github.com/antoniobarreiroimmune/pokeCombat",
    livePreview: "https://poke-combat.vercel.app/",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Angular",
  "Astro",
  "Git",
  "Node.js",
  "Express",
  "MongoDB",
  "APIs",
  "Phaser",
];

const contact = {
  email: "antoniobarreiro@icloud.com",
};

export { header, about, projects, skills, contact };
