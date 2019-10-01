let tagsList = [];
let filterIDs = {
  "chk-3ddesign": {
    desc: "3D Design",
    exp: "Projects that include 3D design."
  },
  "chk-accessible": {
    desc: "Accessibility",
    exp: "Websites specifically designed for WCAG / accessibility."
  },
  "chk-analytics": {
    desc: "Analytics",
    exp: "Projects that require analysis of data."
  },
  "chk-animation": {
    desc: "Animation",
    exp: "Projects that have animation, usually HTML5 canvas, or pyGame."
  },
  "chk-automation": {
    desc: "Automation",
    exp: "Projects that automate a process."
  },
  "chk-api": {
    desc: "API",
    exp:
      "Projects that require calling an external API and reading it's response."
  },
  "chk-articles": {
    desc: "Articles",
    exp: "Projects that have an associated article or tutorial."
  },
  "chk-bootstrap": {
    desc: "Bootstrap",
    exp: "Websites using Twitter Bootstrap."
  },
  "chk-css3": {
    desc: "CSS3",
    exp: "Projects in which CSS3 plays a major role."
  },
  "chk-cssgrid": {
    desc: "CSS Grid",
    exp: "Websites that use CSS Grid as the layout manager."
  },
  "chk-complete": { desc: "Complete", exp: "This project has been completed." },
  "chk-d3": { desc: "D3", exp: "Websites that use D3 for data visualization." },
  "chk-database": {
    desc: "Database",
    exp: "Projects which use a database (any technology)."
  },
  "chk-desktop": {
    desc: "Desktop",
    exp: "Desktop programs, mostly Python based, using tkinter or Kivy."
  },
  "chk-electronics": {
    desc: "Electronics",
    exp: "Projects that have an electronics design or implementation component."
  },
  "chk-fcc": {
    desc: "FreeCodeCamp",
    exp: "Projects based on FreeCodeCamp requirements."
  },
  "chk-fullstack": {
    desc: "Full Stack",
    exp: "Websites that have both a front and back end."
  },
  "chk-graphics": {
    desc: "Graphics",
    exp:
      "Projects that include significant graphic design elements (mainly Photoshop)."
  },
  "chk-html": { desc: "HTML5", exp: "Websites that use HTML5." },
  "chk-inprogress": {
    desc: "In Progress",
    exp: "This project is currently under development."
  },
  "chk-iot": {
    desc: "IoT",
    exp:
      "Projects that have real world interactions based on communication with the internet."
  },
  "chk-jquery": {
    desc: "jQuery",
    exp: "Websites using jQuery for development."
  },
  "chk-js": {
    desc: "JS / ES6",
    exp:
      "Websites or projects that have significant amounts of javascript, particulary ES6 or newer."
  },
  "chk-json": { desc: "JSON", exp: "Programs that use JSON data." },
  "chk-mobile": {
    desc: "Mobile First",
    exp: "Websites designed for mobile first, then adjusted for larger screens."
  },
  "chk-node": {
    desc: "Node",
    exp: "Websites or projects with a node.js back end."
  },
  "chk-nosql": {
    desc: "noSQL",
    exp: "Projects using a noSQL database, such as MongoDB."
  },
  "chk-oop": {
    desc: "OOP",
    exp: "Programs developed with the object oriented programmign paradigm."
  },
  "chk-physical": {
    desc: "Physical",
    exp: "Projects that have a physical component."
  },
  "chk-python": {
    desc: "Python",
    exp: "Projects created using the Python programming language."
  },
  "chk-react": { desc: "React", exp: "Websites and projects using React.js." },
  "chk-webdev": {
    desc: "Web Dev",
    exp: "Websites and projects that have web based components."
  },
  "chk-scraping": {
    desc: "Web Scraping",
    exp: "Projects in which data is gathered by parsing websites."
  },
  "chk-sql": {
    desc: "SQL",
    exp: "Projects using a SQL based database (mySQL, SQLite, etc.)."
  },
  "chk-team": { desc: "Team", exp: "Projects with more than one developer." },
  "chk-testing": {
    desc: "Testing",
    exp: "Projects developed with Test Driven Development practices."
  },
  "chk-async": {
    desc: "Asynchronous",
    exp:
      "Projects which read and handle asynchronous data (usually multiple API calls)."
  }
};

for (let item in filterIDs) {
  tagsList.push(item);
}

let projectDB = {
  musashi: {
    title: "Musashi Tribute",
    status: "",
    blurb:
      "A tribute page to Miyamoto Musashi for a FreeCodeCamp project, using css gris and jQuery.",
    about:
      "This page is a combination of two FreeCodeCamp projects; create a tribute page, and create a quote generator. Miyamoto Musashi was the greatest swordsman in the history of Japan, and possibly the world, and he is both tribute-worthy, and eminently quotable. This page was originally done with jQuery and Bootstrap, but Bootstrap has been replaced with CSS Grid.",
    projectLink: "musashi.html",
    aboutLink: "project-musashi.html",
    codeLink: "#",
    image: "musashithumb260.jpg",
    gallery: [
      [
        "chameleon.jpeg",
        "This is a random picture of a chameleon for testing purposes."
      ],
      ["banjorock.jpeg", "They're probably hipsters. Let's move on..."],
      ["jellyfish.jpeg", "Pretty awesome looking, but don't touch it!"],
      [
        "oranges.jpeg",
        "Some oranges. Why? Because the picture came up when I searched on Pexels, and it looked cool."
      ]
    ],
    techblurb:
      "This project was the first project in which jQuery was integrated with a layout system, and also has a lot of graphics work. It was originally done with Bootstrap, but was changed to CSS Grid, and making the site layout work with both desktop and mobile views was the biggest challenge.",
    techlist: ["Photoshop", "jQuery", "CSS Grid"],
    res: [
      "<p><a href='https://www.amazon.com/Book-Five-Rings-Miyamoto-Musashi/dp/1590302486'>A Book of Five Rings</a> by Miyamoto Musashi (Amazon link).</p>",
      "<p><a href='https://en.wikiquote.org/wiki/Miyamoto_Musashi'>Quotes from Miyamoto Musashi</a> on WikiQuote.</p>"
    ],
    tags: [
      "chk-cssgrid",
      "chk-css3",
      "chk-fcc",
      "chk-graphics",
      "chk-html",
      "chk-jquery",
      "chk-js"
    ]
  },
  weather: {
    title: "Weather App",
    status: "",
    blurb:
      "A weather forecast page for a FreeCodeCamp project, using Bootstrap and the OpenWeatherMap API.",
    about:
      "This project was based on a FreeCodeCamp Front End Developer Certificate required project, but has some added features. The site will detect your location based on your IP address (no pop-up location permission box), get your local weather & forecast, and allow you to change between Metric and Imperial units. There is also a daily picture or video from outer space provided by NASA.",
    projectLink: "#",
    aboutLink: "project-weather.html",
    codeLink: "#",
    image: "weatherthumb260.jpg",
    gallery: [
      [
        "chameleon.jpeg",
        "This is a random picture of a chameleon for testing purposes."
      ],
      ["banjorock.jpeg", "They're probably hipsters. Let's move on..."],
      ["jellyfish.jpeg", "Pretty awesome looking, but don't touch it!"],
      [
        "oranges.jpeg",
        "Some oranges. Why? Because the picture came up when I searched on Pexels, and it looked cool."
      ]
    ],
    techblurb: "",
    techlist: [],
    res: [
      "<p><a href='https://ipinfo.io/'>ipinfo.io</a>, an API that returns the users location based on their IP address.</p>",
      "<p><a href='https://openweathermap.org/'>OpenWeatherMap</a>, who provide a free worldwide weather API.</p>",
      "<p><a href='https://www.nasa.gov/'>NASA</a>, with many API resources, including the one that the images in the NASA tab.</p>",
      "<p><a href='https://www.holid.co/>Holid.co</a>, an API that returns current and other holiday data.</p>"
    ],
    tags: [
      "chk-api",
      "chk-bootstrap",
      "chk-css3",
      "chk-fcc",
      "chk-graphics",
      "chk-html",
      "chk-json",
      "chk-js",
      "chk-mobile",
      "chk-sync"
    ]
  },
  wikisearch: {
    title: "Wikipedia Viewer",
    status: "",
    blurb:
      "Based on a FreeCodeCamp project, this page allows other user to search and view WikiPedia articles, or to view a random article. Made using the Wikipedia API.",
    about:
      "This project is one of the FreeCodeCamp projects required for the Front End Web Development certificate. The user can search Wikipedia, and see the results of the searchm and also select to view a random article.",
    projectLink: "wikiviewer.html",
    aboutLink: "project-wikiviewer.html",
    codeLink: "#",
    image: "wikiviewerthumb260.jpg",
    gallery: [
      [
        "chameleon.jpeg",
        "This is a random picture of a chameleon for testing purposes."
      ],
      ["banjorock.jpeg", "They're probably hipsters. Let's move on..."],
      ["jellyfish.jpeg", "Pretty awesome looking, but don't touch it!"],
      [
        "oranges.jpeg",
        "Some oranges. Why? Because the picture came up when I searched on Pexels, and it looked cool."
      ]
    ],
    techblurb: "",
    techlist: [],
    res: [
      "<p><a href='https://www.mediawiki.org/wiki/API:Main_page'>The Wikipedia API</a> which returns requested wikipedia articles.</p>"
    ],
    tags: [
      "chk-api",
      "chk-css3",
      "chk-fcc",
      "chk-html",
      "chk-js",
      "chk-jquery",
      "chk-mobile",
      "chk-cssgrid"
    ]
  },
  tzf: {
    title: "theZachFerguson",
    status:
      "This is my portfolio website, and was built mobile first, entirely from scratch (the only library used is FontAwesome). The layout was done usign CSS Grid and Flexbox, and all interactivity is done using CSS transitions or vanilla ES6 JavaScript. ",
    blurb:
      "My personal website was designed mobile-first, using CSS Grid, front end vanilla javascript, Flexbox, HTML5, and Photoshop.",
    about: "My personal website. This site was designed mobile-first, using HTML5, CSS Grid, Flexbox, front end vanilla JavaScript, and lots of Photoshop. The only library used is FontAwesome. The 'Projects' page allows dynamic filtering of displayed projects; any project meeting a criterion highlighted in blue will be displayed, and those criteria can be filtered by individual selection, or three 'mass selection' buttons, 'Select All', 'Deselect All', and 'Invert Selection'.",
    projectLink: "project-tzf.html",
    aboutLink: "project-tzf.html",
    codeLink: "#",
    image: "tzf260.png",
    gallery: [
      ["tzf-1.jpg", "The project filter showing only projects that include jQuery."],
      ["tzf-2.jpg", "The project filter toggle on mouse-over."],
      ["tzf-3.jpg", "The mobile sized version of the project gallery, with the hamburger menu opened."],
      [
        "oranges.jpeg",
        "Some oranges. Why? Because the picture came up when I searched on Pexels, and it looked cool."
      ]
    ],
    techblurb: "",
    techlist: [],
    res: [],
    tags: [
      "chk-css3",
      "chk-cssgrid",
      "chk-html",
      "chk-js",
      "chk-graphics",
      "chk-mobile"
    ]
  },
  bubbles: {
    title: "Canvas Bubbles",
    status: "",
    blurb:
      "A mouse / touch interactive page resulting from an HTML5 / canvas tutorial by Chris Courses on YouTube.",
    about:
      "This project was my first project using the canvas element, and was based on a tutorial by Chris Courses on YouTube. I adapted this project into another project, a randomly generated <a href='#'>twinkling starfield</a>. This project uses object oriented javascript and the canvas element.",
    projectLink: "bubbles.html",
    aboutLink: "project-bubbles.html",
    codeLink: "#",
    image: "bubbles260.jpg",
    gallery: [
      [
        "chameleon.jpeg",
        "This is a random picture of a chameleon for testing purposes."
      ],
      ["banjorock.jpeg", "They're probably hipsters. Let's move on..."],
      ["jellyfish.jpeg", "Pretty awesome looking, but don't touch it!"],
      [
        "oranges.jpeg",
        "Some oranges. Why? Because the picture came up when I searched on Pexels, and it looked cool."
      ]
    ],
    techblurb: "",
    techlist: [],
    res: [],
    tags: ["chk-html", "chk-js", "chk-mobile", "chk-oop"]
  },
  starfield: {
    title: "Starfield",
    status: "",
    blurb:
      "A randomized twinkling starfield. This is my adaptation of an HTML5 / canvas tutorial by Chris Courses on YouTube.",
    about:
      "This project generates a starfield with randomly sized and colored stars. Some stars also 'twinkle', with changing opacity, with each star having it's own intensity and twinkle cycle.",
    projectLink: "starfield.html",
    aboutLink: "project-starfield.html",
    codeLink: "#",
    image: "starfield260.jpg",
    gallery: [
      ["starfield-1.jpg", "The desktop view of the randomized starfield."],
      ["starfield-2.jpg", "The canvas is the only element. The canvas will auto-resize wo the screen size; for a more populous 'sky', use a smaller screen."],
      ["starfield-3.jpg", "The twinkle function that is applied randomly to 40% of the stars on creation."]
    ],
    techblurb: "",
    techlist: [],
    res: [],
    tags: ["chk-html", "chk-js", "chk-mobile", "chk-oop"]
  },
  tictactoe: {
    title: "Tic Tac Toe",
    status: "",
    blurb:
      "Play Tic Tac Toe against a simple AI, or with a friend. Made with vanilla Javascript.",
    about: "",
    projectLink: "tictactoe.html",
    aboutLink: "project-tictactoe.html",
    codeLink: "#",
    image: "tictactoethumb260.jpg",
    gallery: [
      ["tictactoe-4.jpg","Some of the AI programming; it waits a random amount of time before making a move, to make it seem less mechanical."],
      ["tictactoe-3.jpg", "The appearance of the board divisions is controlled by CSS class updates."],
      ["tictactoe-1.jpg", "Four moves into a player vs AI game."],
      ["tictactoe-2.jpg", "Win condition for player 1 vs the AI."]
    ],
    techblurb: "",
    techlist: [],
    res: [],
    tags: ["chk-html", "chk-js", "chk-mobile"]
  },
  entertainer: {
    title: "Laser Entertainer",
    status: "",
    blurb:
      "A motion detecting automated laser pointer to play with pets. A Pawtomatics project.",
    about: "",
    projectLink: "#",
    aboutLink: "project-entertainer.html",
    codeLink: "#",
    image: "lasertainer260.png",
    gallery: [
      [
        "chameleon.jpeg",
        "This is a random picture of a chameleon for testing purposes."
      ],
      ["banjorock.jpeg", "They're probably hipsters. Let's move on..."],
      ["jellyfish.jpeg", "Pretty awesome looking, but don't touch it!"],
      [
        "oranges.jpeg",
        "Some oranges. Why? Because the picture came up when I searched on Pexels, and it looked cool."
      ]
    ],
    techblurb: "",
    techlist: [],
    res: [],
    tags: [
      "chk-3ddesign",
      "chk-automation",
      "chk-electronics",
      "chk-physical",
      "chk-python"
    ]
  },
  lotterypicker: {
    title: "Lottery Picker",
    status:
      "This project was a collaborative effort between <a href='www.featheredmonkey.com'>Dave Schechterly</a> (design, HTML) and myself (js). The site allows you to randomly generate lottery numbers for Pick 2, 3, 4, and 5, and allows you to force inclusion or exclusion of numbers from the results. The projoct uses CSS Grid, and front-end vanilla javascript.",
    blurb:
      "A collaborative project, created with <a href='www.featheredmonkey.com'>Dave Schechterly</a>, who created the majority of the HTML and CSS, and myself, who did the majority of the Javascript. We created a random lottery number generator for Pick 2, 3, 4, and 5, allowing mandatorily included and excluded numbers, the ability to save numbers and randomly pick more, and to print the saved numbers. This project was updated from Bootstrap 3 to CSS Grid.",
    about: "A collaborative project, created with <a href='www.featheredmonkey.com'>Dave Schechterly</a>, who created the majority of the HTML and CSS, and myself, who did the majority of the Javascript. We created a random lottery number generator for Pick 2, 3, 4, and 5, allowing mandatorily included and excluded numbers, the ability to save numbers and randomly pick more, and to print the saved numbers. This project was updated from Bootstrap 3 to CSS Grid.",
    projectLink: "LotteryPicker_CSSGrid_ver_100917.html",
    aboutLink: "project-lotterypicker.html",
    codeLink: "#",
    image: "lottothumb260.jpg",
    gallery: [
      ["lotto-1.jpg", "Select the numbers you want included."],
      ["lotto-2.jpg", "There is a number picker for Pick 2, 3, 4, and 5. Numbers can be saved, and printed."],
      ["lotto-3.jpg", "Part of the JavaScript controlling saving picked nnumbers."],
      ["lotto-4.jpg", "The HTML for the Pick 3 section of the page."],
      ["lotto-5.jpg", "This Pick 4 shows a 7 being required to be one of the numbers, and 2 and 4 not permitted to be in the results."]
    ],
    techblurb: "",
    techlist: [],
    res: [],
    tags: [
      "chk-css3",
      "chk-team",
      "chk-html",
      "chk-js",
      "chk-graphics",
      "chk-mobile"
    ]
  },
  matchtwo: {
    title: "Match Two",
    status: "completed",
    blurb:
      "A Python 3 and PyGame version of Match Two. A memory game; flip all matching pairs to win.",
    about:
      "This project uses Python 3 and PyGame to make an implementation of the classic match 2 memory game. You can flip two of the 48 tiles at the same time. If the numbers behind them match, they are cleared from the board. Clear all tiles to win.",
    projectLink: "#",
    aboutLink: "project-matchtwo.html",
    codeLink: "https://github.com/zachferguson/MatchTwo",
    image: "matchtwo260.png",
    gallery: [
      [
        "chameleon.jpeg",
        "This is a random picture of a chameleon for testing purposes."
      ],
      ["banjorock.jpeg", "They're probably hipsters. Let's move on..."],
      ["jellyfish.jpeg", "Pretty awesome looking, but don't touch it!"],
      [
        "oranges.jpeg",
        "Some oranges. Why? Because the picture came up when I searched on Pexels, and it looked cool."
      ]
    ],
    techblurb: "",
    techlist: [],
    res: [],
    tags: ["chk-python", "chk-animation"]
  },
  pawtomatics: {
    title: "Pawtomatics",
    status: "",
    blurb:
      "An ongoing website build for a project to provide open source automated pet and animal care products.",
    about: "",
    projectLink: "www.pawtomatics.com",
    aboutLink: "project-pawtomatics.html",
    codeLink: "#",
    image: "pawtomatics260.png",
    gallery: [
      [
        "chameleon.jpeg",
        "This is a random picture of a chameleon for testing purposes."
      ],
      ["banjorock.jpeg", "They're probably hipsters. Let's move on..."],
      ["jellyfish.jpeg", "Pretty awesome looking, but don't touch it!"],
      [
        "oranges.jpeg",
        "Some oranges. Why? Because the picture came up when I searched on Pexels, and it looked cool."
      ]
    ],
    techblurb: "",
    techlist: [],
    res: [],
    tags: [
      "chk-html",
      "chk-database",
      "chk-sql",
      "css-grid",
      "chk-css",
      "chk-iot",
      "chk-js",
      "chk-python",
      "chk-fullstack"
    ]
  },
  cattrap: {
    title: "Feral Cat Trap",
    status: "",
    blurb:
      "An internet connected trap for catch, fix, and release feral cat population control programs and volunteers. A Pawtomatics project.",
    about: "This was a functional proof of concept project. It is an internet connected trap for feral cat 'catch, fix, and release' programs. The purpose is to allow the trapper to see via internet what cat (or other animal) is in the trap, and decide whether to trap it or not; why catch a cat that's lready been fixed? Then, if a cat wasn't trapped, but ate the bait food, the food can be refilled remotely. When an animal breaks the IR LED transmitter//receiver, a picture is uploaded to the server, and a text message and email are sent to the owner of the trap to inform them. From the website, the trapper can trigger the trap, refill the bait, and capture another picture. Unfortunately, this project was completed with CGI scripts, before I discovered websockets, and although the trap itself uses Python 3, my server at the time only supported Python 2, so the final version will be completely redone.",
    projectLink: "#",
    aboutLink: "project-cattrap.html",
    codeLink: "https://github.com/zachferguson/cattrap",
    image: "cattrap260.jpg",
    gallery: [
      ["cattrap-1.jpg", "The prototype trap. The food dispenser magazine is at the rear left, and the Raspberry Pi that controls everything is at the front left. This is a top-down view."
      ],
      ["banjorock.jpeg", "They're probably hipsters. Let's move on..."],
      ["cattrap-3.jpg", "An image of the view the cattrap captured when triggered remotely, but with nothing in it. The top is the 'bait bowl', and the IR proximity detector LEDs are visible at the bottom."],
      ["cattrap-4.jpg", "A picture of my cat triggering the image capture feature. Here, I discovered the final project would need a different camera position."
      ]
    ],
    techblurb: "This project uses a wide variety of libraries and technologies. Text functionality is done with the Twilio API, stepper motor control and other GPIO functionality uses the GPIOZero Raspberry Pi library. The fttlib, smtplib, urllib, and email Python libraries were used to control connection to and data//command receipt from the server.",
    techlist: [],
    res: [
      "<p>The <a href='https://www.twilio.com/'>Twilio API</a>, for texting images of trap occupants.</p>",
      "<p><a href='#'>SQLite</a>, a local SQL compatible database.</p>",
      "<p>The fttlib, smtplib, urllib, and email libraries from the Python Standard Library</p>"
    ],
    tags: [
      "chk-3ddesign",
      "chk-automation",
      "chk-electronics",
      "chk-fullstack",
      "chk-physical",
      "chk-python",
      "chk-iot",
      "chk-database",
      "chk-sql"
    ]
  },
  equipinspect: {
    title: "EquipInspect.com",
    status: "",
    blurb:
      "An ongoing website build for a project to provide inspection criteria and records for automotive lifts. Lift inspections are currently unregulated, but increasingly more required by garage insurance.",
    about: "",
    projectLink: "www.equipinspect.com",
    aboutLink: "project-equipinspect.html",
    codeLink: "#",
    image: "equipinspect260.png",
    gallery: [
      [
        "chameleon.jpeg",
        "This is a random picture of a chameleon for testing purposes."
      ],
      ["banjorock.jpeg", "They're probably hipsters. Let's move on..."],
      ["jellyfish.jpeg", "Pretty awesome looking, but don't touch it!"],
      [
        "oranges.jpeg",
        "Some oranges. Why? Because the picture came up when I searched on Pexels, and it looked cool."
      ]
    ],
    techblurb: "",
    techlist: [],
    res: [],
    tags: [
      "chk-html",
      "chk-database",
      "chk-nosql",
      "css-grid",
      "chk-css3",
      "chk-mobile",
      "chk-react",
      "chk-js",
      "chk-node",
      "chk-fullstack"
    ]
  },
  twitch: {
    title: "TwitchTV Viewer",
    status: "",
    blurb:
      "Check Twitch TV channels to see whats playing. Developed for a FreeCodeCamp project using the TwitchTV API.",
    about: "",
    projectLink: "twitchtvviewer.html",
    aboutLink: "project-twitchviewer.html",
    codeLink: "#",
    image: "twitchthumb260.jpg",
    gallery: [
      [
        "chameleon.jpeg",
        "This is a random picture of a chameleon for testing purposes."
      ],
      ["banjorock.jpeg", "They're probably hipsters. Let's move on..."],
      ["jellyfish.jpeg", "Pretty awesome looking, but don't touch it!"],
      [
        "oranges.jpeg",
        "Some oranges. Why? Because the picture came up when I searched on Pexels, and it looked cool."
      ]
    ],
    techblurb: "",
    techlist: [],
    res: [],
    tags: [
      "chk-html",
      "chk-js",
      "chk-api",
      "chk-fcc",
      "chk-mobile",
      "chk-jquery"
    ]
  },
  calendar: {
    title: "Calendar",
    status: "completed",
    blurb:
      "A simple dynamically populating calendar for use for a future scheduling app.",
    about:
      "This project familiarized me with javascript date objects, and also gave me a solid foundation for developing a future 'to-do' app, but one that uses dates and times, instead of only completed or uncompleted tasks.",
    projectLink: "calendarApp.html",
    aboutLink: "project-calendar.html",
    codeLink: "#",
    image: "calendar260.png",
    gallery: [
      [
        "chameleon.jpeg",
        "This is a random picture of a chameleon for testing purposes."
      ],
      ["banjorock.jpeg", "They're probably hipsters. Let's move on..."],
      ["jellyfish.jpeg", "Pretty awesome looking, but don't touch it!"],
      [
        "oranges.jpeg",
        "Some oranges. Why? Because the picture came up when I searched on Pexels, and it looked cool."
      ]
    ],
    techblurb: "",
    techlist: [],
    res: [],
    tags: ["chk-html", "chk-js", "chk-oop", "chk-css3", "chk-mobile"]
  },
  shades: {
    title: "Fifty Shades of Trump",
    status:
      "Whether you love or hate Trump, combining Markov analyses of Trump's tweets and Fifty Shades of Gray is fun and funny. For this project, I created several Python 3 programs; one to parse 50 Shades of Grey, one to parse Trumps tweets, one to zip those two together, and finally, one to generate Markov chains from the resulting database. I also used another project, <a href='#'>vDict</a>, to determine whether words were English words.",
    blurb:
      "Whether you love him or hate him, combining Markov analyses of Trump's tweets and Fifty Shades of Gray is fun and funny.",
    about: "",
    projectLink: "https://twitter.com/fiftyshadesoft4",
    aboutLink: "project-fiftyshades.html",
    codeLink: "#",
    image: "shadesoftrump260.jpg",
    gallery: [
      [
        "chameleon.jpeg",
        "This is a random picture of a chameleon for testing purposes."
      ],
      ["banjorock.jpeg", "They're probably hipsters. Let's move on..."],
      ["jellyfish.jpeg", "Pretty awesome looking, but don't touch it!"],
      [
        "oranges.jpeg",
        "Some oranges. Why? Because the picture came up when I searched on Pexels, and it looked cool."
      ]
    ],
    techblurb: "",
    techlist: [],
    res: [],
    tags: [
      "chk-complete",
      "chk-analytics",
      "chk-python",
      "chk-oop",
      "chk-desktop"
    ]
  },
  caesar: {
    title: "Caesar Cypher",
    status: "",
    blurb:
      "A program that allows the user to encode into a Caesar cypher, or to decode Caesar cypher text with a known OR unknown key.",
    about:
      "This Python 3 program that allows the user to encode text into a Caesar cypher, or to decode Caesar cypher text with a known OR unknown key. The project was done using Python 3 and Enchant (a now unsopported Python library that allowed checking if a word was an actual English word). This project will be updated to use <a href'#'>vDict</a> in the near future.",
    projectLink: "https://github.com/zachferguson/Casear-Cipher",
    aboutLink: "project-caesar.html",
    codeLink:
      "https://github.com/zachferguson/Casear-Cipher/blob/master/CaesarFinal.py",
    image: "placeholder260.png",
    gallery: [
      [
        "chameleon.jpeg",
        "This is a random picture of a chameleon for testing purposes."
      ],
      ["banjorock.jpeg", "They're probably hipsters. Let's move on..."],
      ["jellyfish.jpeg", "Pretty awesome looking, but don't touch it!"],
      [
        "oranges.jpeg",
        "Some oranges. Why? Because the picture came up when I searched on Pexels, and it looked cool."
      ]
    ],
    techblurb: "",
    techlist: ["This project was an opportunity to practice using user input, a Python library, and Pythonn string operations."],
    res: [],
    tags: ["chk-complete", "chk-python", "chk-desktop"]
  },
  vdict: {
    title: "vDict",
    status: "",
    blurb:
      "Python programs I used to parse text files of dictionaries to make a replacement (vDict itself) for pyEnchant's 'is it a word' function for my own use in other projects.",
    about: "",
    projectLink: "#",
    aboutLink: "project-vdict.html",
    codeLink: "https://github.com/zachferguson/vdict",
    image: "placeholder260.png",
    gallery: [
      [
        "chameleon.jpeg",
        "This is a random picture of a chameleon for testing purposes."
      ],
      ["banjorock.jpeg", "They're probably hipsters. Let's move on..."],
      ["jellyfish.jpeg", "Pretty awesome looking, but don't touch it!"],
      [
        "oranges.jpeg",
        "Some oranges. Why? Because the picture came up when I searched on Pexels, and it looked cool."
      ]
    ],
    techblurb: "",
    techlist: [],
    res: [],
    tags: ["chk-analytics", "chk-python"]
  },
  markovify: {
    title: "MarkovifyThis",
    status: "",
    blurb:
      "A graphical interface exe file created with Python that returns Markov analysis generated sentences from an input text file.",
    about:
      "This project combined the fun of Markov chains with creating a GUI and 'browse for file' dialog with Tkinter/Python. The user browses for a text file, and the program returns several Markov analysis generated sentences (including a few of tweetable length). The user can then create another set from the already selected text, or browse for and generate from a new text file.",
    projectLink: "https://github.com/zachferguson/markovifythis",
    aboutLink: "project-markovify.html",
    codeLink: "https://github.com/zachferguson/Casear-Cipher",
    image: "markovify260.png",
    gallery: [
      [
        "chameleon.jpeg",
        "This is a random picture of a chameleon for testing purposes."
      ],
      ["banjorock.jpeg", "They're probably hipsters. Let's move on..."],
      ["jellyfish.jpeg", "Pretty awesome looking, but don't touch it!"],
      [
        "oranges.jpeg",
        "Some oranges. Why? Because the picture came up when I searched on Pexels, and it looked cool."
      ]
    ],
    techblurb: "",
    techlist: ["Markov Chains", "Python", "TKinter"],
    res: [
      "<p><a href='https://github.com/jsvine/markovify'>Markovify</a>, a library that parses text and generates Markov chains. By <a href='https://github.com/jsvine'>Jeremy Singer-Vine</a>.</p>"
    ],
    tags: [
      "chk-complete",
      "chk-analytics",
      "chk-python",
      "chk-desktop"
    ]
  },
  markovifyonline: {
    title: "MarkovifyThis Online",
    status: "",
    blurb:
      "A Node site that calls a Python script on the back end, and returns Markov analysis generated sentences from the chosen text.",
    about:
      "This project combined the fun of Markov chains with creating a Node website, and Python. The user can select a text they would like to generate tweet length Markov chains from (from the available choices), then Node runs a Python script on the back end, that returns and updates the website through a javascript promise.",
    projectLink: "https://github.com/zachferguson/markovifythis",
    aboutLink: "project-markovifyonline.html",
    codeLink: "https://github.com/zachferguson/Casear-Cipher",
    image: "markovify260.png",
    gallery: [
      [
        "chameleon.jpeg",
        "This is a random picture of a chameleon for testing purposes."
      ],
      ["banjorock.jpeg", "They're probably hipsters. Let's move on..."],
      ["jellyfish.jpeg", "Pretty awesome looking, but don't touch it!"],
      [
        "oranges.jpeg",
        "Some oranges. Why? Because the picture came up when I searched on Pexels, and it looked cool."
      ]
    ],
    techblurb: "",
    techlist: ["Markov Chains", "Python", "TKinter"],
    res: [
      "<p><a href='https://github.com/jsvine/markovify'>Markovify</a>, a library that parses text and generates Markov chains. By <a href='https://github.com/jsvine'>Jeremy Singer-Vine</a>.</p>"
    ],
    tags: [
      "chk-complete",
      "chk-node",
      "chk-analytics",
      "chk-python",
      "chk-desktop"
    ]
  },
  ledlamp: {
    title: "Driftwood Lamp",
    status: "",
    blurb:
      "A lamp made from a hollow piece of driftwood, using an Adafruid Trinket, CircuitPython, and RGB LED strips, with various settings and adjustments.",
    about:
      "This is a project I made after I found a hollow piece of driftwood, and thought it would make a cool lamp. It was made with an Adafruit Trimket, CircuitPython, transistors, and RGB LED strips. There are knobs to set color, brightness, and a knob that will set it to randomly change color and brightness (up to the brightness setting).",
    projectLink: "https://github.com/zachferguson/markovifythis",
    aboutLink: "project-ledlamp.html",
    codeLink: "https://github.com/zachferguson/driftwood",
    image: "placeholder260.png",
    gallery: [
      [
        "chameleon.jpeg",
        "This is a random picture of a chameleon for testing purposes."
      ],
      ["banjorock.jpeg", "They're probably hipsters. Let's move on..."],
      ["jellyfish.jpeg", "Pretty awesome looking, but don't touch it!"],
      [
        "oranges.jpeg",
        "Some oranges. Why? Because the picture came up when I searched on Pexels, and it looked cool."
      ]
    ],
    techblurb:
      "This project uses an Adafruit Trinket and CircuitPython for control of physical elements via GPIO.",
    techlist: [],
    res: [],
    tags: ["chk-3ddesign", "chk-python", "chk-electronics", "chk-physical"]
  },
  template: {
    title: "Template Project",
    status: "in-progress",
    blurb:
      "This is a template project blurb about a thing that doesn't exist, and lots of text, but just for testing purposes.",
    about:
      "This is a bizarely long explanation of absolutely nothing, because this is an imaginary project. All of the technologies are entirely made up, and don't have real pages. This imaginary project was inspired by another imaginary thing that I just made up fo flesh out this paragraph about nothing. Hello world, hope this works!",
    projectLink: "projectTemplate.html",
    aboutLink: "projectTemplate.html",
    codeLink: "#",
    image: "placeholder260.png",
    gallery: [
      [
        "chameleon.jpeg",
        "This is a random picture of a chameleon for testing purposes."
      ],
      ["banjorock.jpeg", "They're probably hipsters. Let's move on..."],
      ["jellyfish.jpeg", "Pretty awesome looking, but don't touch it!"],
      [
        "oranges.jpeg",
        "Some oranges. Why? Because the picture came up when I searched on Pexels, and it looked cool."
      ]
    ],
    techblurb:
      "This project features a practice implementation of several technologies, and was a practical application for blah development.",
    techlist: [
      "Egg Reshaping",
      "Zoo Admin",
      "Rambo Trivia",
      "Limb Regeneration"
    ],
    res: [
      "<p><a href='#'>Egg Reshaping 101</a>, by <a href='#'>Eggcelent Eggs</a></p>",
      "<p><a href='#'>The Rambo you Didn't Know</a> by <a href='#'>John Rambo</a>.</p>",
      "<p>The Zoo Admin Library, a library that lets you blahbitty blah your zoo. <a href='#'>Visit their website</a>.</p>"
    ],
    tags: ["chk-3ddesign", "chk-python", "chk-electronics", "chk-physical"]
  },
  charger: {
    title: "Car Upgrade",
    status: "completed",
    blurb:
      "This project was to add Bluetooth connectivity and USB charging to my car, while leaving future upgrades available.",
    about:
      'In this project, I hacked my car to add Bluetooth audio connectivity, and also to add two USB charging ports, as my car had neither. Using a fuse shunt, I added a always-on 5 port USB charger directly wired to a Bluetooth speaker, which was hacked to output audio into my car stereo aux port. Two more USB ports were extended up into my center console for charging cell phones, and two were left empty as a power source for a future addition of a Raspberry Pi and 7" touchscreen. This project was electrical only.',
    projectLink: "#",
    aboutLink: "project-carupgrade.html",
    codeLink: "#",
    image: "placeholder260.png",
    gallery: [
      [
        "chameleon.jpeg",
        "This is a random picture of a chameleon for testing purposes."
      ],
      ["banjorock.jpeg", "They're probably hipsters. Let's move on..."],
      ["jellyfish.jpeg", "Pretty awesome looking, but don't touch it!"],
      [
        "oranges.jpeg",
        "Some oranges. Why? Because the picture came up when I searched on Pexels, and it looked cool."
      ]
    ],
    techblurb:
      "This project features a practice implementation of several technologies, and was a practical application for physical and electronics development. It also leaves open the possibility of adding a future 'car computer' with a Raspberry Pi and touchscreen.",
    techlist: ["Soldering", "Wiring", "Electronics"],
    res: [
      "<p>Bluetooth Speaker from Amazon, available <a href='https://www.amazon.com/gp/product/B00DQ4514M/ref=ppx_yo_dt_b_search_asin_image?ie=UTF8&psc=1'>here</a>.</p>",
      "<p>Fuse Shunt from Amazon, available <a href='https://www.amazon.com/gp/product/B007D5DB88/ref=ppx_yo_dt_b_search_asin_image?ie=UTF8&psc=1'>here</a>.</p>",
      "<p>A 10A 5 port USB charger from Amazon, available  <a href='https://www.amazon.com/gp/product/B00OHE8AOI/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1'>here</a>.</p>"
    ],
    tags: ["chk-complete", "chk-electronics", "chk-physical"]
  }
};

// TODO:
// - finish musashi update to css grid
// - get pictures of musashi Tribute
// - upload musashi code to github
// - get pictures for car upgrade
// - get pictures for Caesar Cypher
// - finish driftwood lamp
// - get pictures of driftwood Lamp
// - upload driftwood lamp code to github
// - send some trump tweets
// - get some pictures of trump tweets
// - clean and upload trump code to github
// - finish vDict
// - get preview pic of vDict
// - get pictures of vDict
// - upload vDict code to github
// - get preview pic of feral cat trap
// - get pictures of feral cat trap
// - upload feral cat trap code to github
// - get preview pic of laser entertainer
// - get pictures of laser entertainer
// - upload laser entertainer code to github
// - finish equipinspect (react?)
// - get preview pic of EquipInspect
// - get pictures of EquipInspect
// - upload equipinspect code to github
// - go through and find which pages need their "about" created, create them
