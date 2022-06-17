linkContainer = document.getElementsByClassName('link-cont')[0];
links = document.getElementsByClassName('links')[0];
paging = document.getElementsByClassName('paging')[0];
nav = document.getElementsByClassName('nav')[0];
navHeight = nav.getBoundingClientRect().height;
sideButton = document.getElementsByClassName('side-btn')[0];

var dam = document.getElementById('damn');
damn = ()=> dam.innerHTML='Damn! Do Nat Smash it!&#128562;<span></span>';
out = ()=> dam.innerHTML='About Me! Huh! &#128286;<span></span>';
darn = () => dam.innerHTML="Ouch! What Z &#128545;<span></span>";
function txt(){
    var dam = document.getElementById('about-hero');
    dam.innerHTML="ARE U SURE &#128527;";
}
function re_txt(){
    var dam = document.getElementById('about-hero');
    dam.innerHTML="HERE I'M &#128526;";
}
function gosh(){
    var dam = document.getElementById('about-hero');
    dam.innerHTML="I'M IN !! &#129322;";
}

sideButton.addEventListener('click', (e)=>{
    sideButton.classList.toggle('rotate');
    linksHeight = links.getBoundingClientRect().height;
    linkContainerHeight = linkContainer.getBoundingClientRect().height;
    if(linkContainerHeight == 0){
        linkContainer.style.height = `${linksHeight}px`;
    }
    else{
        linkContainer.style.height = '0';
    }
})

window.addEventListener('scroll', ()=>{
    scrollHeight = window.pageYOffset;
    if(scrollHeight > navHeight){
        nav.classList.add('fixed-nav')
    } else{
        nav.classList.remove('fixed-nav')
    }
    if(scrollHeight > 500){
        paging.style.display = 'inline';
    }else{
        paging.style.display = 'none';
    }
})

spacialLinks = document.querySelectorAll('.special-link')
spacialLinks.forEach(link=>{
    link.addEventListener('click', e=>{
        sideButton.classList.toggle('rotate');
        e.preventDefault();
        containerHeight = linkContainer.getBoundingClientRect().height;
        const navHeight = nav.getBoundingClientRect().height;
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const isFixed = nav.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;
        if(!isFixed){
            position = position - navHeight;
        }
        if(navHeight > 82){
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
        linkContainer.style.height = '0';
    });
});