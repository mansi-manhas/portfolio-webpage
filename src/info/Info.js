import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";
import mock_dashboard_ui from "../img/mock_dashboard_ui.png";
import result_summary_ui from "../img/result_summary_ui.png";
import ecommerce from "../img/ecommerce.png";

import a from "../img/articles/a.png";
import b from "../img/articles/b.png";
import c from "../img/articles/c.png";
import d from "../img/articles/d.png";
import e from "../img/articles/e.png";
import f from "../img/articles/f.png";
import g from "../img/articles/g.png";
import h from "../img/articles/h.png";
import i from "../img/articles/i.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["#8d53ff", "#ca6be6"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Mansi",
  lastName: "Manhas",
  initials: "", // the example uses first and last, but feel free to use three or more if you like.
  position: "a frontend software engineer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in India",
    },
    {
      emoji: "🏠",
      text: "working remotely",
    },
    {
      emoji: "💼",
      text: "software engineer with 6+ years of experience",
    },
    {
      emoji: "📧",
      text: "mansi7771@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://linkedin.com/in/mansimanhas",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://github.com/mansi-manhas",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://mansimanhas.medium.com/",
      icon: "fa fa-medium",
      label: "medium",
    },
    {
      link: "https://instagram.com/_mansimanhas/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "figma",
    ],
    exposedTo: ["nodejs", "python", "adobe illustrator"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "theater",
      emoji: "🎭",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Dashboard UI using React.js, TypeScript & Styled-components",
      source: "https://github.com/mansi-manhas/dashboard", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock_dashboard_ui,
    },
    {
      title: "Results Summary Component using HTML, CSS and Flexbox",
      live: "https://guileless-mooncake-82a471.netlify.app/",
      source:
        "https://github.com/mansi-manhas/result-summary-component-using-css-grid-and-flexbox", // this should be a link to the **repository** of the project, where the code is hosted.
      image: result_summary_ui,
    },
    {
      title: "Central Agile Dashboard & Automating Subtask Creation in Jira",
      source: "https://github.com/mansi-manhas/jira-board-daily-scrum", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "E-Commerce application using Next.js, Prisma, and Stripe payments",
      live: "https://ecommerce-website-using-nextjs-planetscale-prisma-and-stripe.vercel.app/",
      source:
        "https://github.com/mansi-manhas/ecommerce-website-using-nextjs-planetscale-prisma-and-stripe/tree/main", // this should be a link to the **repository** of the project, where the code is hosted.
      image: ecommerce,
    },
    {
      title: "SQL Query Editor View",
      live: "https://zingy-tiramisu-ab4818.netlify.app/",
      source: "https://github.com/mansi-manhas/sql-query-editor-view",
      image: mock2,
    },
    {
      title: "Auto-Suggestions React.js Components",
      source:
        "https://github.com/mansi-manhas/react-autocomplete-autosuggestion-component",
      image: mock3,
    },
    {
      title: "Command Line React App",
      source: "https://github.com/mansi-manhas/command-line-react-app",
      image: mock4,
    },
    {
      title: "React Native Crypto Tracker Mobile UI",
      source: "https://github.com/mansi-manhas/crypto-tracker-react-native",
      image: mock5,
    },
  ],
  articles: [
    {
      title: "React.js Performance Optimization Techniques",
      source:
        "https://levelup.gitconnected.com/react-js-performance-optimization-techniques-39728d89e56e",
      image: a,
    },
    {
      title: "The Ultimate Guide For Creating Amazing Web Designs",
      source:
        "https://medium.com/geekculture/the-ultimate-guide-for-creating-amazing-web-designs-141c366ec51f",
      image: b,
    },
    {
      title:
        "Mastering Low-Level Design Technical Interviews: Tips and Resources",
      source:
        "https://levelup.gitconnected.com/mastering-low-level-design-technical-interviews-tips-and-resources-1df00522d334",
      image: c,
    },
    {
      title:
        "How to build Auto Complete React component and improve its performance using debounce",
      source:
        "https://javascript.plainenglish.io/how-to-build-auto-complete-react-component-and-improve-its-performance-using-debounce-df8a8b933371",
      image: d,
    },
    {
      title: "Flatten a Nested Object in JavaScript",
      source:
        "https://mansimanhas.medium.com/flatten-a-nested-object-in-javascript-bd643707c5af",
      image: e,
    },
    {
      title: "What are the different ways to hide elements in HTML and CSS?",
      source:
        "https://medium.com/geekculture/what-are-the-different-ways-to-hide-elements-in-html-and-css-52ab1ea302aa",
      image: f,
    },
    {
      title: "Basic HTML and CSS Topics for Frontend Developers in 2023",
      source:
        "https://javascript.plainenglish.io/basic-html-and-css-topics-for-frontend-developers-in-2022-e38457f53361",
      image: g,
    },
    {
      title: "How Do You Implement Promise Methods in JavaScript?",
      source:
        "https://javascript.plainenglish.io/how-would-you-implement-promise-methods-in-javascript-227707f880ad",
      image: h,
    },
    {
      title:
        "How Do You Implement debounce() and throttle() Functions in JavaScript?",
      source:
        "https://javascript.plainenglish.io/how-would-you-implement-debounce-and-throttle-functions-in-javascript-73a1192376",
      image: i,
    },
  ],
};
