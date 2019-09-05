(function() {
    let menuInitial = document.getElementById('menu').offsetTop;
    let menuHeight = document.getElementById('logo').offsetTop + document.getElementById('logo').offsetHeight;
    window.onscroll = () => {
        if (screen.width >= 769 && window.pageYOffset >= menuInitial){
            document.getElementById('menu').classList.add('affixed');
        }
        if (screen.width >= 769 && window.pageYOffset <= menuInitial){
            document.getElementById('menu').classList.remove('affixed');
        }
    };
})()
