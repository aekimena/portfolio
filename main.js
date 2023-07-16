let isDarkMode;
let darkMode;

let themeFromLs = localStorage.getItem('darkMode');
isDarkMode = JSON.parse(themeFromLs);

function showTrueResult(){
    document.querySelector('body').classList.add('change-background-dark', 'change-text-dark');
    document.querySelectorAll('.line').forEach(item => {
        item.classList.remove('change-line-light')
        item.classList.add('change-line-dark')
    })
    document.querySelectorAll('.icon').forEach(item => {
        item.classList.add('change-text-dark')
    })
    document.querySelectorAll('button').forEach(item => {
        item.classList.remove('change-button-light');
        item.classList.add('change-button-dark')
    })
    document.querySelectorAll('.project-box').forEach(item => {
        item.classList.add('change-background-dark', 'change-background-box-shadow-dark')
    })
    document.querySelector('.theme-changer').classList.add('theme-changer-dark');
    document.querySelector('.moon').style.display = 'none';
    document.querySelector('.sun').style.display = 'block';
}

function showFalseResult(){
    document.querySelector('body').classList.remove('change-background-dark', 'change-text-dark');
        document.querySelectorAll('.line').forEach(item => {
            item.classList.add('change-line-light')
            item.classList.remove('change-line-dark')
        })
        document.querySelectorAll('.icon').forEach(item => {
            item.classList.remove('change-text-dark')
        })
        document.querySelectorAll('button').forEach(item => {
            item.classList.add('change-button-light');
            item.classList.remove('change-button-dark')
        })
        document.querySelectorAll('.project-box').forEach(item => {
            item.classList.remove('change-background-dark', 'change-background-box-shadow-dark')
        })
        document.querySelector('.theme-changer').classList.remove('theme-changer-dark');
        document.querySelector('.moon').style.display = 'block';
        document.querySelector('.sun').style.display = 'none';
}

window.addEventListener('DOMContentLoaded', () => {
    if(isDarkMode == true){
        showTrueResult();
    }else if(isDarkMode == false){
        showFalseResult();
    }
})


function changeTheme(){
    document.querySelector('.theme-changer').addEventListener('click', () => {
        if(isDarkMode == true || isDarkMode == null){
            showFalseResult();
            isDarkMode = false;
            darkMode = JSON.stringify(isDarkMode);
            localStorage.setItem('darkMode', darkMode);

        } else if(isDarkMode == false){
            showTrueResult();
            isDarkMode = true;
            darkMode = JSON.stringify(isDarkMode);
            localStorage.setItem('darkMode', darkMode);
        }
    })
}

changeTheme();




document.getElementById('contact-btn').onclick = () => {
    document.getElementById('contact-box').style = "display: block;";

    document.addEventListener('click', (event) => {
        if(event.target.id !== 'contact-box' && event.target.id !== 'contact-btn'){
            document.getElementById('contact-box').style = "display: none;";
        }
    })

    document.getElementById('cancel-btn').onclick = () => {
        document.getElementById('contact-box').style = "display: none;";
    }
}
