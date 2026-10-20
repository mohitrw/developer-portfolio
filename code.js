var darkBtn = document.querySelector(".darkTheme");
var html = document.querySelector("html");
let projectHeading = document.getElementById("projectHeading");
let resumeHeading = document.getElementById("resumeHeading");
let contactHeading = document.getElementById("contactHeading");
let projectSection = document.getElementById("projectSection");
let resumeSection = document.getElementById("resumeSection");
let contactSection = document.getElementById("contactSection");


function toggleDarkTheme(){
    html.classList.toggle("darkMode");
    darkBtn.style.background = 'var(--body-color)';

    if(localStorage.getItem('theme') == 'dark'){
        localStorage.setItem('theme', 'light');
    }
    else if(localStorage.getItem('theme') == 'light'){
        localStorage.setItem('theme', 'dark');
    }
}

if(localStorage.getItem('theme') == 'dark'){
    html.classList.remove("darkMode");
    darkBtn.style.background = '#fff';
}
else if(localStorage.getItem('theme') == 'light'){
    html.classList.add("darkMode");
    darkBtn.style.background = 'var(--body-color)';
}
else{
    localStorage.setItem('theme', 'dark');
}


projectHeading.addEventListener('click', function(){
    projectHeading.classList.add('sectionSelected');
    resumeHeading.classList.remove('sectionSelected');
    contactHeading.classList.remove('sectionSelected');
    projectSection.style.display = 'grid';
    resumeSection.style.display = 'none';
    contactSection.style.display = 'none';
})

resumeHeading.addEventListener('click', function(){
    projectHeading.classList.remove('sectionSelected');
    resumeHeading.classList.add('sectionSelected');
    contactHeading.classList.remove('sectionSelected');
    projectSection.style.display = 'none';
    resumeSection.style.display = 'block';
    contactSection.style.display = 'none';
})

contactHeading.addEventListener('click', function(){
    projectHeading.classList.remove('sectionSelected');
    resumeHeading.classList.remove('sectionSelected');
    contactHeading.classList.add('sectionSelected');
    projectSection.style.display = 'none';
    resumeSection.style.display = 'none';
    contactSection.style.display = 'flex';
})