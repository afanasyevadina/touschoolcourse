var scrollTop = 0

document.querySelectorAll('a[href^="#"').forEach(a => {
    a.onclick = function (e) {
        e.preventDefault()
        var target = document.querySelector(this.hash)
        console.log(target)
        if (target) {
            window.scrollTo({ top: target.getBoundingClientRect().y + window.scrollY, behavior: 'smooth' })
        }
    }
})

const toggleAnimation = () => {
    document.querySelectorAll('.animable:not(.animationg)').forEach(el => {
        if(el.getBoundingClientRect().y < window.innerHeight * 0.75) {
            el.classList.add('animating')
        }
    })
}

toggleAnimation()

window.onscroll = function(e) {
    if(window.scrollY > scrollTop) {
        document.querySelector('header').classList.add('hidden')
    } else {
        document.querySelector('header').classList.remove('hidden')
    }
    scrollTop = window.scrollY

    toggleAnimation()
}