/* https://flaviocopes.com/javascript-arrow-functions/ */

/* portfolio page controls */
/* ;(function() { */
(function() {
  document.getElementById("filter-toggle").addEventListener('click', () => {
	  if (document.getElementById("container-filter").classList.contains("hidden")) {
		  document.getElementById("container-filter").classList.remove("hidden");
		  document.getElementById("container-filter").classList.add("unhidden");
	  }
	  else {
		  document.getElementById("container-filter").classList.remove("unhidden");
		  document.getElementById("container-filter").classList.add("hidden");
	  }
  });

  let tagsList = ["chk-3ddesign", "chk-analytics", "chk-animation", "chk-automation",
				 "chk-api", "chk-articles", "chk-bootstrap", "chk-css3", "chk-cssgrid",
				 "chk-d3", "chk-database", "chk-electronics", "chk-fcc", "chk-fullstack",
				 "chk-graphics", "chk-html", "chk-iot", "chk-jquery", "chk-js", "chk-json",
				 "chk-mobile", "chk-node", "chk-nosql", "chk-oop", "chk-physical",
				 "chk-python", "chk-react", "chk-scraping", "chk-sql", "chk-team",
				 "chk-testing", "chk-sync"];

  function projectPopulator() {
      let displayed = [];
      document.getElementById("container-portfolio").innerHTML = "";
      for (tag in tagsList) {
          for (project in projectDB) {
              if (projectDB[project]["tags"].includes(tagsList[tag]) && !displayed.includes(projectDB[project])) {
                  document.getElementById("container-portfolio").innerHTML += projectDetailsPopulator(projectDB[project]['title'],
                                                                                                      projectDB[project]['blurb'],
                                                                                                      projectDB[project]['projectLink'],
                                                                                                      projectDB[project]['aboutLink'],
                                                                                                      projectDB[project]['codeLink'],
                                                                                                      projectDB[project]['image']);
                  displayed.push(projectDB[project]);
              }
          };

      };
  }

  let filterIDs = ["chk-3ddesign", "chk-analytics", "chk-animation", "chk-automation",
				 "chk-api", "chk-articles", "chk-bootstrap", "chk-css3", "chk-cssgrid",
				 "chk-d3", "chk-database", "chk-electronics", "chk-fcc", "chk-fullstack",
				 "chk-graphics", "chk-html", "chk-iot", "chk-jquery", "chk-js", "chk-json",
				 "chk-mobile", "chk-node", "chk-nosql", "chk-oop", "chk-physical",
				 "chk-python", "chk-react", "chk-scraping", "chk-sql", "chk-team",
				 "chk-testing", "chk-sync"];

  for (let item in filterIDs) {
      document.getElementById(filterIDs[item]).addEventListener('click', () => {
          if (document.getElementById(filterIDs[item]).classList.contains("checked")) {
              document.getElementById(filterIDs[item]).classList.remove("checked");
              document.getElementById(filterIDs[item]).classList.add("unchecked");
              tagsList.splice(tagsList.indexOf(filterIDs[item]), 1);
              projectPopulator();
          }
          else {
              document.getElementById(filterIDs[item]).classList.remove("unchecked");
              document.getElementById(filterIDs[item]).classList.add("checked");
              if (!tagsList.includes(filterIDs[item])) {
                  tagsList.push(filterIDs[item]);
              }

              projectPopulator();
          }
      });
  };
  function projectDetailsPopulator(title, blurb, projectLink, aboutLink, codeLink, image){
      let html = `
      <div class="p-item">
        <h3 class="p-item-label">${title}<h3>
        <a href="${projectLink}"><img src="img/portfolio-thumbs/${image}" alt="${title} screenshot."></a>
        <div class="p-item-desc">
          <a class="desc-link" href="${aboutLink}">About</a>
          <a class="desc-link" href="${codeLink}">Source</a>
        </div>
      </div>
      `
      return html;
  }

  let projectDB = {"musashi": {
					  "title": "Musashi Tribute",
					  "blurb": "",
					  "projectLink": "#",
                      "aboutLink": "#",
					  "codelink": "#",
					  "image": "musashithumb260.jpg",
					  "tags" : ["chk-bootstrap", "chk-css3", "chk-fcc", "chk-graphics",
								"chk-html", "chk-jquery", "chk-js", "chk-mobile"]
					},
					"weather": {
					  "title": "Weather App",
					  "blurb": "",
					  "projectLink": "#",
                      "aboutLink": "#",
					  "codelink": "#",
					  "image": "weatherthumb260.jpg",
					  "tags" : ["chk-api", "chk-bootstrap", "chk-css3", "chk-fcc",
								"chk-graphics", "chk-html", "chk-js", "chk-mobile", "chk-sync"]
					},
					"wikisearch": {
					  "title": "Wikipedia Viewer",
					  "blurb": "Based on an FreeCodeCamp project, this ",
					  "projectLink": "",
                      "aboutLink": "#",
					  "codelink": "#",
					  "image": "wikiviewerthumb260.jpg",
					  "tags" : ["chk-api", "chk-css3", "chk-fcc", "chk-html", "chk-js",
							    "chk-mobile"]
					},
					"tzf": {
					  "title": "This Website",
					  "blurb": "My personal website was designed mobile-first, using CSS Grid, Flexbox, HTML5, and Photoshop.",
					  "projectLink": "",
                      "aboutLink": "#",
					  "codelink": "#",
					  "image": "",
					  "tags" : ["chk-css3", "chk-cssgrid", "chk-html", "chk-js", "chk-graphics",
							    "chk-mobile"]
					},
				  }

})()
