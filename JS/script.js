const navbar = document.querySelector(".navbar");

const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section')
const navbarlinks = document.querySelectorAll('.navbar-link')
const progress = document.querySelector('.progress-bars-wrappers')
const progressBarPercents = [97, 89, 85, 87, 80, 70, 50];





window.addEventListener('scroll', ()=> {
 mainFn()  
})

const mainFn = () => {
    if(window.pageYOffset >= navbarOffsetTop){
        navbar.classList.add("sticky")
    } else{
        navbar.classList.remove("sticky")
    }

    sections.forEach((section, i) => {
        if(window.pageYOffset >= section.offsetTop 
            - 10){
              navbarlinks.forEach(navbarlink => {
                  navbarlink.classList.remove('change')
              })
                navbarlinks[i].classList.add('change')
            }
    })

    if(window.pageYOffset + window.innerHeight >= progress.offsetTop){
          document.querySelectorAll('.progress-percent').forEach((el, i) => {
                    el.style.width = `${progressBarPercents[i]}%`;
                    el.previousElementSibling.firstElementChild.textContent =
                    progressBarPercents[i]
                 })
                }

}

mainFn()

window.addEventListener('resize', () =>{
    window.location.reload()
})