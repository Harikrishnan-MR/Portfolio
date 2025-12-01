// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import renderLogo from './assets/tech_logo/render.png';

// Experience Section Logo's
import sedinLogo from './assets/company_logo/sedin_technologies.jpg';
import aiclLogo from './assets/company_logo/AICL.png';

// Education Section Logo's
import mccLogo from './assets/education_logo/mcc_logo.jpg';
import msecLogo from './assets/education_logo/msec_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import moneymangerLogo from './assets/work_logo/moneymanager.jpeg';
import movierecLogo from './assets/work_logo/movie_rec.png';
import smsLogo from './assets/work_logo/SMS.jpg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Render', logo: renderLogo }
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: sedinLogo,
      role: "Software Developer Intern",
      company: "Sedin Technologies",
      date: "March 2025 - June 2025",
      desc: "Developed dynamic and scalable web applications using the Java-Full stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
        "Springboot",
        "Docker",
        "Hiberbate",
        "PostgreSQL"
      ],
    },
    {
      id: 1,
      img: aiclLogo,
      role: "Frontend Developer",
      company: "AICL Training",
      date: "July 2024 - August 2024",
      desc: "Contributed to innovative projects as a Frontend Developer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
  ];
  
  export const education = [
  {
    id: 0,
    img: msecLogo,
    school: "Meenakshi Sundararajan Engineering College, Chennai",
    date: "2021 - 2025",
    grade: "CGPA: 7.50",
    desc: "I completed my Bachelor of Technology in Information Technology from Meenakshi Sundararajan Engineering College, Chennai. During my engineering journey, I gained strong foundations in programming, data structures, databases, software engineering, and full-stack development. I worked on several academic and personal projects that strengthened my practical understanding of modern technologies and development practices.",
    degree: "Bachelor of Technology - B.Tech (Information Technology)",
  },
  {
    id: 1,
    img: mccLogo,
    school: "Madras Christian College Higher Secondary School, Chennai",
    date: "2020 - 2021",
    grade: "87%",
    desc: "I completed my Higher Secondary Certificate (HSC) from Madras Christian College Hr. Sec. School, Chennai. My curriculum included core subjects in the science stream, which strengthened my analytical thinking and problem-solving abilities.",
    degree: "Higher Secondary Certificate (HSC) - Science",
  },
  {
    id: 2,
    img: mccLogo,
    school: "Madras Christian College Higher Secondary School, Chennai",
    date: "2018 - 2019",
    grade: "81%",
    desc: "I completed my Secondary School Leaving Certificate (SSLC) from Madras Christian College Hr. Sec. School, Chennai. This phase helped build my academic foundation and interest in technology.",
    degree: "Secondary School Leaving Certificate (SSLC)",
  },
];

  
  export const projects = [
    {
      id: 0,
      title: "GitHub Profile Finder",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/Harikrishnan-MR/Github-Profile-Finder.git",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Student Management System",
      description:
        "A full-stack student management system built using Java that allows administrators and faculty to manage student records efficiently. The platform supports adding, updating, and tracking student details, courses, and performance data while providing clear dashboards and reports to streamline academic management and decision-making.",
      image: smsLogo,
      tags: ["React JS", "Springboot","HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Harikrishnan-MR/Movie-Recommendation-App.git",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Money Manager",
      description:
        "A personal finance web application (backend + frontend) that helps users track incomes, expenses, categories, view a dashboard, filter transactions, export reports to Excel, and email reports.",
      image: moneymangerLogo,
      tags: ["React JS", "Springboot","HTML", "CSS", "JavaScript"],
      github: "hhttps://github.com/Harikrishnan-MR/Money-manger.git",
      webapp: "https://moneymanage1216.netlify.app/",
    },
  ];  