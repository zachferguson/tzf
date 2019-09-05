(function() {
/*populate page divs based on imported project data*/

function pagePopulate() {
    document.getElementById('title-text').innerHTML = projectData.title;
    let statusHTML = '';
    switch(projectData.status){
        case "inprogress":
            statusHTML = '<p>Project Status: <span class="inprogress">In Progress</span></p>';
            break;
        case "completed":
            statusHTML = '<p>Project Status: <span class="completed">Completed</span></p>';
            break;
    }
    document.getElementById('project-status').innerHTML = statusHTML;
    document.getElementById('project-description').innerHTML = projectData.about;
    if (projectData.projectLink != "#"){
        document.getElementById('project-links').innerHTML += `<p><a href="${projectData.projectLink}">VIEW PROJECT</a></p>`
    }
    if (projectData.projectLink != "#"){
        document.getElementById('project-links').innerHTML += `<p><a href="${projectData.codeLink}">VIEW CODE</a></p>`
    }

    for (let tag in projectData.tags){
        document.getElementById('tags-list').innerHTML += `<div class="tag"><p>${filterIDs[projectData.tags[tag]].desc}</p></div>`;
    }
    document.getElementById('technoblurb').innerHTML = projectData.techblurb;
    for (let tech in projectData.techlist){
        document.getElementById('tech-list').innerHTML += `<li>${projectData.techlist[tech]}</li>`;
    }
    for (let res in projectData.res){
        document.getElementById('res-list').innerHTML += projectData.res[res];
    }

}
pagePopulate();
})()
