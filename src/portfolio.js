/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Marcos Paulo",
  title: "Hi, I'm Marcos",
  subTitle:
    "An Engineer with a lot of experience developing New Businesses and Products with any technology available. It can be Desktop, Web or Mobile, the goal is to deliver great products to great customers.",
  resumeLink: "https://www.linkedin.com/in/marcospaulopinto/",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/marcosphpinto",
  linkedin: "https://www.linkedin.com/in/marcospaulopinto/",
  gmail: "marcosphpinto@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "The tools in my toolbox",
  subTitle: "THE STUFF THAT I'VE USED UNTIL NOW",
  skills: [
    emoji("⚡ Building great products with the best practices in every stack")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "nosql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Heroku",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "VBA",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "PowerBi",
      fontAwesomeClassname: "fas fa-chart-line"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Centro Universitário da FEI",
      logo: require("./assets/images/feiLogo.png"),
      subHeader: "Mechanical Engineering",
      duration: "January 2012 - July 2017"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Product", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "20%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Product Owner",
      company: "Doc88",
      companylogo: require("./assets/images/doc88Logo.png"),
      date: "December 2020 – March 2021",
      desc: "CCEE Integration"
    },
    {
      role: "Sales - ESCO",
      company: "Comerc Energia",
      companylogo: require("./assets/images/comercLogo.png"),
      date: "March 2018 - November 2020",
      desc: "Development of Energy Efficiency Projects"
    },
    {
      role: "Sales - Trading",
      company: "Comerc Energia",
      companylogo: require("./assets/images/comercLogo.png"),
      date: "January 2016 – March 2018",
      desc: "Energy Trading to Final Consumer"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS THAT I HELPED DEVELOP",
  projects: [
    {
      projectName: "O-SI",
      projectDesc:
        "Integration between medical devices and medical record system for a mobile health platform",
      footerChip: [
        {
          name: "DynamoDB"
        },
        {
          name: "NodeJs"
        },
        {
          name: "AWS Lambda"
        }
      ],
      footerLink: [
        {
          name: "Company",
          url: "https://www.o-si.com/"
        }
      ]
    },
    {
      projectName: "Contaluz",
      projectDesc: "Development of an Energy Management App",
      footerChip: [
        {
          name: "MongoDB Atlas"
        },
        {
          name: "Python"
        },
        {
          name: "Flask"
        },
        {
          name: "Flutter"
        },
        {
          name: "AWS EC2"
        }
      ]
    },
    {
      projectName: "EYEXPLORER",
      projectDesc: "Simulation of an Underwater Remotely Operated Vehicle",
      footerChip: [
        {
          name: "Ansys Suite"
        }
      ]
    },
    {
      projectName: "Comerc Trading - Proposal Center",
      projectDesc: "Development of a Management and Proposal Submission System",
      footerChip: [
        {
          name: "Excel"
        },
        {
          name: "VBA"
        },
        {
          name: "PowerBI"
        }
      ],
      footerLink: [
        {
          name: "Company",
          url: "https://www.comerc.com.br/"
        }
      ]
    },
    {
      projectName: "Aeroturbine Simulator",
      projectDesc:
        "Computational Simulation of an Aeroturbine's Thermodynamic Cycle",
      footerChip: [
        {
          name: "EES"
        }
      ],
      footerLink: [
        {
          name: "Article",
          url: "https://fei.edu.br/sites/sicfei/2015/Mec%C3%A2nica/SIMULA%C3%87%C3%83O%20COMPUTACIONAL%20DO%20CICLO%20TERMODIN%C3%82MICO%20DE%20UMA%20TURBINA%20A%20G%C3%81S.pdf"
        }
      ]
    },
    {
      projectName: "Voss - Prototype Products' Manufacture Management System",
      projectDesc: "Coordenation between IT and stakeholders",
      footerChip: [
        {
          name: "Totvs Protheus"
        },
        {
          name: "SAP"
        }
      ],
      footerLink: [
        {
          name: "Company",
          url: "https://www.voss.com.br/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "marcosphpinto@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
