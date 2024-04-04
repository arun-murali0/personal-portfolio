import blog from "@/public/images/blog.jpg";
import movie from "@/public/images/movie.jpg";
import shopping from "@/public/images/shopping.jpg";

export const projectsDetails = [
  {
    title: "Movie-streaming-site",
    image: movie,
    description:
      "This website is build by using React as client side and manages states by using react-redux with FireBase Authentication and authorization and stores movie list and user comments in MONGODB",
    technologies: ["React", "Express", "mongoDb", "FireBase-Auth"],
    url: [
      { live: "https://movies-app-001.netlify.app/" },
      { github: "https://github.com/arun-karthick0/movies-site.git" },
    ],
  },
  {
    title: "Shopping-site",
    image: shopping,
    description:
      "This website is build by using React as client side and manages states by using react-redux with FireBase Authentication and authorization and saves users details in MONGODB And here integrated with Stripe gateWay test mode",
    technologies: ["React", "Express", "mongoDb", "FireBase-Auth"],
    url: [
      {
        live: "https://shopping-site-001.netlify.app/",
        github: "https://github.com/arun-karthick0/shopping-site.git",
      },
    ],
  },
  {
    title: "blog-site",
    image: blog,
    description:
      "This website is build by using React as client side and manages states by using react-redux with FireBase Authentication and authorization and saves posted blog and user comments details in firebase FireStore database",
    technologies: ["React", "FireBase-Auth", "firebase-storage"],
    url: [
      {
        live: "https://blog-site-002.netlify.app/",
        github: "https://github.com/arun-karthick0/blog-.git",
      },
    ],
  },
];
