import L_HTML5 from '../assets/skills/html-5.svg'
import L_CSS3 from "../assets/skills/css3.svg";
import L_SASS from "../assets/skills/sass-1.svg";
import L_BOOTSTRAP from "../assets/skills//bootstrap-4.svg";
import L_REACT from "../assets/skills/react.svg";
import L_REDUX from "../assets/skills/redux.svg";
import L_MATERIALUI from "../assets/skills//material-ui-1.svg";
import L_REACT_BOOTSTRAP from "../assets/skills//react-bootstrap.svg";
import L_GIT from "../assets/skills/git-icon.svg";
import mongoDB from '../assets/skills/mongodb.svg'

import L_GITHUB_PAGES from "../assets/skills/github.svg";
import L_JAVASCRIPT from "../assets/skills/javascript.svg";
import L_NETLIFY from "../assets/skills/netlify-icon.svg"
import L_FIREBASE from "../assets/skills/firebase-icon.svg"
import L_VERCEL from "../assets/skills/logo-vercel.svg"
import L_TAILWIND from "../assets/skills/tailwindcss-icon.svg"



export const skills = {
    Frontend: [
      {
        link: "https://en.wikipedia.org/wiki/HTML5",
        imgAltText: "HTML 5",
        imgSrc: L_HTML5,
        skillName: "HTML5",
      },
      {
        link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
        imgAltText: "CSS 3",
        imgSrc: L_CSS3,
        skillName: "CSS3",
      },
      {
        link: "https://www.javascript.com/",
        imgAltText: "JavaScript",
        imgSrc: L_JAVASCRIPT,
        skillName: "JavaScript",
      },
   
      {
        link: "https://reactjs.org/",
        imgAltText: "React JS",
        imgSrc: L_REACT,
        skillName: "React JS",
      },
      {
        link: "https://redux.js.org/",
        imgAltText: "Redux",
        imgSrc: L_REDUX,
        skillName: "Redux",
      },
      
    ],
    Frameworks:[
        {
            link: "https://material-ui.com/",
            imgAltText: "Material-UI",
            imgSrc: L_MATERIALUI,
            skillName: "Material-UI",
          },
        
          {
            link: "https://getbootstrap.com/",
            imgAltText: "Bootstrap",
            imgSrc: L_BOOTSTRAP,
            skillName: "Bootstrap",
          }
       
          
    ],

    Hosting_Platforms: [
   
      {
        link: "https://www.netlify.com/",
        imgAltText: "Netlify",
        imgSrc: L_NETLIFY,
        skillName: "Netlify",
      },
      {
        link: "https://pages.github.com/",
        imgAltText: "GitHub Pages",
        imgSrc: L_GITHUB_PAGES,
        skillName: "GitHub Pages",
      },
      {
        link: "https://render.com/",
        imgAltText: "Vercel",
        imgSrc: L_VERCEL,
        skillName: "Render",
      }
  
    ],
    Databases: [
      {
        link: "https://firebase.google.com/",
        imgAltText: "Firebase Database",
        imgSrc: mongoDB,
        skillName: "MongoDB Database",
      }
    ],
}