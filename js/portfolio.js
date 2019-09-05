/* portfolio page controls */
(function() {
    //console.log("portfolio.js loading started...");
    /* ------- selected filters for determining what projects to show ------- */
    let tagsList = [];
    /* ------- create the clickable filters, add to initial tagsList ------- */
    for (let item in filterIDs) {
        let html = `<div id="${item}" class="selection-box checked"><p>${filterIDs[item]["desc"]}</p></div>`;
        document.getElementById("container-filter").innerHTML += html;
        tagsList.push(item);
    }
    /* ------- initially display all projects ------- */
    projectPopulator()

    /* ------- add event listeners ------- */
    document.getElementById("filter-toggle").addEventListener('click', () => {
      if (document.getElementById("container-filter").classList.contains("hidden")) {
    	  document.getElementById("container-filter").classList.remove("hidden");
    	  document.getElementById("container-filter").classList.add("unhidden");
          document.getElementById("master-toggle").classList.remove("hidden");
    	  document.getElementById("master-toggle").classList.add("unhidden");
      }
      else {
    	  document.getElementById("container-filter").classList.remove("unhidden");
    	  document.getElementById("container-filter").classList.add("hidden");
          document.getElementById("master-toggle").classList.remove("unhidden");
          document.getElementById("master-toggle").classList.add("hidden");
      }
    });

    for (let item in filterIDs) {
      document.getElementById(item).addEventListener('click', () => {
          if (document.getElementById(item).classList.contains("checked")) {
              document.getElementById(item).classList.remove("checked");
              document.getElementById(item).classList.add("unchecked");
              tagsList.splice(tagsList.indexOf(item), 1);
              projectPopulator();
          }
          else {
              document.getElementById(item).classList.remove("unchecked");
              document.getElementById(item).classList.add("checked");
              if (!tagsList.includes(item)) {
                  tagsList.push(item);
              }
              projectPopulator();
          }
      });
    };

    document.getElementById('all-on').addEventListener('click', () => {
        for (let item in filterIDs){
            if (document.getElementById(item).classList.contains("unchecked")){
                document.getElementById(item).classList.remove("unchecked");
                document.getElementById(item).classList.add("checked");
                tagsList.push(item);
            }
            projectPopulator();
        };
    });

    document.getElementById('all-off').addEventListener('click', () => {
        for (let item in filterIDs){
            if (document.getElementById(item).classList.contains("checked")){
                document.getElementById(item).classList.remove("checked");
                document.getElementById(item).classList.add("unchecked");
                tagsList.splice(tagsList.indexOf(item), 1);
            }
            projectPopulator();
        };
    });

    document.getElementById('invert').addEventListener('click', () => {
        let reverse = [];
        for (let item in filterIDs){
            if (!tagsList.includes(item)){

                reverse.push(item);
            };
            if (document.getElementById(item).classList.contains("checked")){
                document.getElementById(item).classList.remove("checked");
                document.getElementById(item).classList.add("unchecked");
            }
            else if (document.getElementById(item).classList.contains("unchecked")){
                document.getElementById(item).classList.remove("unchecked");
                document.getElementById(item).classList.add("checked");
            }
        };
        tagsList = [];
        for (let item in reverse){
            tagsList.push(reverse[item]);
        };
        console.log(tagsList);
        projectPopulator();
    });


  /* ------- functions ------- */

  function projectPopulator() {
      /* checks database of projects for projects that match currently selected
         tags, and pupulates the page with project thumbnails*/
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

  function projectDetailsPopulator(title, blurb, projectLink, aboutLink, codeLink, image){
      /* creates the html output to display on the portfolio page for an individual project thumbnail */
      let plink = `<img src="img/portfolio-thumbs/${image}" alt="${title} screenshot.">`;
      if (projectLink != "#"){
          plink = `<a href="${projectLink}" title="${blurb}" target="_blank">${plink}</a>`;
      }
      else{
          plink = `<a href="${aboutLink}" title="${blurb}">${plink}</a>`;
      }
      let html = `
      <div class="p-item">
        <h3 class="p-item-label">${title}<h3>
        ${plink}
        <div class="p-item-desc">
          <a class="desc-link" href="${aboutLink}" target="_blank">About</a>
          <a class="desc-link" href="${codeLink}" target="_blank">Source</a>
        </div>
      </div>
      `;
      return html;
  }

})()
