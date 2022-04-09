let cat = [
    [
        "https://i.ibb.co/8cfmSf6/Rectangle-23.png",
        "https://i.ibb.co/xqh3L0W/Rectangle-23-1.png",
        "https://i.ibb.co/JKGT8Sf/Rectangle-23-2.png"
    ],
    [
        "https://i.ibb.co/JFPj85V/Rectangle-23-3.png",
        "https://i.ibb.co/CQq4wfD/Rectangle-23-4.png",
        "https://i.ibb.co/hcCSyN3/Rectangle-20.png"
    ]
]

let dog = [
    [
        "https://i.ibb.co/mSz4XQS/5f08d029-2c87-4d07-8540-be801264c54d.jpg",
        "https://i.ibb.co/8jM62x1/d1638d39-78cb-414e-9655-9c78e92d310c.jpg"
    ]
]

let hamster = [
    [
        "https://i.ibb.co/L0X8hJn/Frame-1-10.png",
        "https://i.ibb.co/F8gbqYz/Frame-1-8.png"
    ]
]

let cat2 = [
    [
        "https://i.ibb.co/zRysSJ4/image-1-1.png",
        "https://i.ibb.co/D7cPQNL/Frame-1-12.png"
    ]
]

window.onload(() => {
    for (i in cat) {
        for (e in cat[i]) {
            let a = new Image()
            a.src = cat[i][e]
        }
    }
    for (i in cat2) {
        for (e in cat2[i]) {
            let a = new Image()
            a.src = cat2[i][e]
        }
    }
    for (i in dog) {
        for (e in dog[i]) {
            let a = new Image()
            a.src = dog[i][e]
        }
    }
    for (i in hamster) {
        for (e in hamster[i]) {
            let a = new Image()
            a.src = hamster[i][e]
        }
    }
})

function cat2Click() {
    let modal = document.querySelector('.modal-body .container')
    let html = ``
    for (i in cat2) {
        html += `<div class="row">`
        for (e in cat2[i]) {
            html += `<div class="col-sm">
            <img src="${cat2[i][e]}" onclick="window.open('${cat2[i][e]}', '_blank')" width="100%" height="100%"></img>
          </div>`
        }
        html += `</div><br />`
    }
    modal.innerHTML = html
}
function catClick() {
    let modal = document.querySelector('.modal-body .container')
    let html = ``
    for (i in cat) {
        html += `<div class="row">`
        for (e in cat[i]) {
            html += `<div class="col-sm">
            <img src="${cat[i][e]}" onclick="window.open('${cat[i][e]}', '_blank')" width="100%" height="100%"></img>
          </div>`
        }
        html += `</div><br />`
    }
    modal.innerHTML = html
}

function dogClick() {
    let modal = document.querySelector('.modal-body .container')
    let html = ``
    for (i in dog) {
        html += `<div class="row">`
        for (e in dog[i]) {
            html += `<div class="col-sm">
            <img src="${dog[i][e]}" onclick="window.open('${dog[i][e]}', '_blank')" width="100%" height="100%"></img>
          </div>`
        }
        html += `</div><br />`
    }
    modal.innerHTML = html
}

function hamsterClick() {
    let modal = document.querySelector('.modal-body .container')
    let html = ``
    for (i in hamster) {
        html += `<div class="row">`
        for (e in hamster[i]) {
            html += `<div class="col-sm">
            <img src="${hamster[i][e]}" onclick="window.open('${hamster[i][e]}', '_blank')" width="100%" height="100%"></img>
          </div>`
        }
        html += `</div><br />`
    }
    modal.innerHTML = html
}