export const portfolioData = {
  skills: {
    frontend: ["React", "Next.js", "Tailwind CSS", "Bootstrap"],
    backend: ["Express.js", "Node.js", "PHP"],
    cloudDeployment: ["AWS", "Docker", "NGINX"],
    databases: ["MySQL", "MongoDB"]
  },
  projects: [
    {
      name: "Task Planner",
      image: "/images/task_planner.png",
      imageAlt: "Project Image preview",
      description: "A full-stack productivity app for managing personal tasks with secure authentication, profile management, and a protected task APIs.",
      tech: ["React", "Tailwind", "Node.js", "Express.js", "MySQL", "AWS", "NGINX"],
      links: {
        live: "https://taskplannertest.duckdns.org/",
        repo: "https://github.com/maingiNatasha/task-planner"
      }
    },
    {
      name: "Authentication System",
      image: "/images/authenticator.png",
      imageAlt: "Project Image preview",
      description: "A reusable, production-ready authentication system designed to be used as a starter template for full-stack web projects.",
      tech: ["React", "Tailwind", "Node.js", "Express.js", "MySQL", "AWS", "Docker", "NGINX"],
      links: {
        live: "#",
        repo: "https://github.com/maingiNatasha/fullstack-auth-starter"
      }
    },
    {
      name: "Mini RDBMS",
      image: "/images/image_not_available.png",
      imageAlt: "No Image preview",
      description: "A small relational database management system implemented from scratch with a SQL-like interface and an interactive REPL. It demonstrates core database concepts such as parsing, schema enforcement, indexing, and query execution.",
      tech: ["React", "Tailwind", "Node.js", "Express.js", "SQL", "JavaScript"],
      links: {
        live: "#",
        repo: "https://github.com/maingiNatasha/mini-RDBMS"
      }
    },
    {
      name: "Company Website",
      image: "/images/landing_page.png",
      imageAlt: "Project Image preview",
      description: "A Company landing page frontend static website that displays information about a company, its recent blogs and how to get in touch with them.",
      tech: ["React", "Nextjs", "Tailwind"],
      links: {
        live: "https://next-react-static-web-app.vercel.app",
        repo: "https://github.com/maingiNatasha/next-react-static-web-app"
      }
    },
    {
      name: "Blog App",
      image: "/images/blog_app.png",
      imageAlt: "Project Image preview",
      description: "A Simple frontend blog website that displays information mostly on travel blogs posted by different authors.",
      tech: ["React", "Tailwind"],
      links: {
        live: "https://blog-app-rust-nu.vercel.app",
        repo: "https://github.com/maingiNatasha/blog-app"
      }
    },
    {
      name: "Task Creator Web App",
      image: "/images/task_creator.png",
      imageAlt: "Project Image preview",
      description: "A Simple fullstack web application that one can use for creating, modifying, viewing and managing tasks.",
      tech: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB"],
      links: {
        live: "https://task-mern-natasha.netlify.app",
        repo: "https://github.com/maingiNatasha/task-mern"
      }
    },
  ],
  contact: {
    email: "mainginatasha@gmail.com",
    phone: "+254717872584",
    links: {
      github: "https://github.com/maingiNatasha",
      linkedin: "https://www.linkedin.com/in/natasha-maingi-026a4a254/"
    }
  }
};

export default portfolioData;

