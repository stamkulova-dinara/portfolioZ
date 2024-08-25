import mathGameImg from "../../public/images/math-game.jpg";
import myImage from "../../public/images/nurzada.jpeg";
import countriesImg from "../../public/images/countries.jpg";
import happyImg from "../../public/images/happy.png";
import seoflowImg from "../../public/images/seoflow.png"

export const heroData = {
  img: myImage,
  hi: "Hello! I am",
  name: "Zada Baktybek",
  expertise: ["Front-End", "React Developer"],
  about:
    "As a Front-End Developer, I am committed to creating visually stunning and user-friendly websites. I look forward to exploring new opportunities to enhance my skills.",
  btnText: "Get my resume",
};

export const aboutData = {
  title: "About My",
  cards: [
    {
      title: "Past",
      text: "I discovered my passion for programming when I was just 17 years old. At first, it was just a hobby, but I quickly became interested in web development and the creative possibilities it offered. Over the years, I continued to develop my skills and fell more in love with building websites.",
    },
    {
      title: "Present",
      text: "Now, as a Frontend Developer, I am pursuing my dream of becoming a professional programmer. I also work as a freelance web developer, which has allowed me to apply my skills in real-world projects and gain practical experience.",
    },
    {
      title: "Future",
      text: "Looking ahead, I'm excited about the future of programming and the endless opportunities it presents. I'm confident that my passion for the field, coupled with my skills, will enable me to make meaningful contributions to the industry in the years to come.",
    },
  ],
};

export const SkillsData = {
  title: "Skills",
  categories: [
    {
      title: "Front End",
      skills: [
        "HTML",
        "JavaScript",
        "TypeScript",
        "React",
        "Next",
        "Redux",
        "Firebase",
      ],
    },
    {
      title: "Styling & Design",
      skills: [
        "CSS",
        "SASS",
        "BootStrap",
        "Tailwind CSS",
        "CSS Module",
        "Figma",
        "Styled-Components",
      ],
    },
    {
      title: "Miscellaneous",
      skills: [
        "Git",
        "Webpack",
        "REST APIs",
      ],
    },
  ],
};

export const contactData = {
  title: "Want To",
  cards: [
    {
      title: "offer job opportunity?",
      text: "I am open to discussing potential job opportunities or collaborations. With experience in web development and software engineering, I am interested in roles that allow me to work on exciting and challenging projects. If you have a project or role in mind, feel free to reach out and let's discuss!",
    },
    {
      title: "Connect?",
      text: "Networking is key in the tech industry, and I'm always looking to meet new people and expand my professional circle. Whether you're a fellow developer, designer, or entrepreneur, I'd love to chat and learn more about your work. Let's grab a virtual coffee and see where the conversation takes us!",
    },
    {
      title: "Build something?",
      text: "I have a passion for developing innovative web applications that solve complex problems. Whether it's building a custom e-commerce platform or a cutting-edge web app, I'm always ready for a new challenge. Let's create something amazing together!",
    },
  ],
  links: [
    {
      label: "Email",
      url: "mailto:zadabaktybek07@gmail.com",
    },
    {
      label: "GitHub",
      url: "https://github.com/Zada0101",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/zada-baktybek/",
    },
    {
      label: "Resume",
      url: "/Docs/resume.pdf",
    },
  ],
};

export const ProjectsData = {
  title: "Projects",
  Projects: [
    {
      name: "Math Game",
      image: mathGameImg,
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Webpack",
      ],
      description:
        "Math Game - online that practice math skills using fun interactive content.",
      demoUrl: "https://polite-griffin-e2d32a.netlify.app/",
      codeUrl: "",
    },
    {
      name: "H(app)y",
      image: happyImg,
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Webpack",
      ],
      description:
        "",
      demoUrl: "https://happy-application.netlify.app/",
      codeUrl: "",
    },
    {
      name: "Countries",
      image: countriesImg,
      technologies: [
        "TypeScript",
        "CSS",
        "React",
        "Apollo"
      ],
      description:
        "",
      demoUrl: "https://gentle-dodol-2c4f7c.netlify.app/",
      codeUrl: "",
    },
    {
      name: "SEOFlow",
      image: seoflowImg,
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      description:
        "This responsive, single-page website.",
      demoUrl: "https://zada0101.github.io/SEOFlow/",
      codeUrl: "",
    },
  ],
};
