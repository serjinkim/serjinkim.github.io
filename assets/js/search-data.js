// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-research",
          title: "research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-thank-you",
          title: "thank you",
          description: "A note of gratitude to the people who shaped my journey.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/thankyou/";
          },
        },{id: "post-coming-soon",
        
          title: "coming soon",
        
        description: "the blog is under construction — just like my driving skills",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/coming-soon/";
          
        },
      },{id: "projects-why-do-ceos-get-fired",
          title: 'Why do CEOs get fired?',
          description: "A machine learning study predicting forced CEO turnover using US firm and executive data (1992–2022)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-f1-passion-project",
          title: 'F1 Passion Project',
          description: "A data-driven exploration of Formula 1 — coming soon",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
