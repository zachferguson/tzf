(function() {
let image = 0

/* add event listeners for scroll area clicks*/
document.getElementById('scroll-left').addEventListener('click', () => {
    if (image - 1 < 0){
        image = projectData.gallery.length -1;
        updateImage();
    }
    else{
        image -= 1;
        updateImage();
    }
});

document.getElementById('scroll-right').addEventListener('click', () => {
    if (image + 1 > projectData.gallery.length -1){
        image = 0;
        updateImage();
    }
    else{
        image += 1;
        updateImage();
    }
});

/*create initial gallery background*/

function updateImage(){
    document.getElementById('gallery-wrapper').style = `background-image:url(img/projects/${projectData.gallery[image][0]});`
    document.getElementById('caption').innerHTML = projectData.gallery[image][1];
}

updateImage();
})()
