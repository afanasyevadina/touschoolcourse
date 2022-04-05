var draggingElement = null
var startPosition = {}
document.querySelectorAll('.draggable-item').forEach(item => {
    item.draggable = true
    item.addEventListener('dragstart', function(e) {
        this.innerHTML = 'I am dragging'
        draggingElement = this
        startPosition.x = e.screenX - this.getBoundingClientRect().x
        startPosition.y = e.screenY - this.getBoundingClientRect().y
    })
    document.addEventListener('dragover', function(e) {
        e.preventDefault()
        if(draggingElement) {
            draggingElement.style.top = `${e.screenY - startPosition.y}px`
            draggingElement.style.left = `${e.screenX - startPosition.x}px`
            //draggingElement.style.transform = `translate(${e.screenX - startPosition.x}px, ${e.screenY - startPosition.y}px)`
        }
    })
    document.addEventListener('dragend', function(e) {
        if(draggingElement) {        
            draggingElement.innerHTML = 'Drag me'
        }
        draggingElement = null
        startPosition = {}
    })
    /*item.addEventListener('mousedown', function(e) {
        this.innerHTML = 'I am dragging'
        draggingElement = this
        startPosition.x = e.screenX - this.getBoundingClientRect().x
        startPosition.y = e.screenY - this.getBoundingClientRect().y
    })*/
})
/*document.addEventListener('mousemove', function(e) {
    if(draggingElement) {
        draggingElement.style.top = `${e.screenY - startPosition.y}px`
        draggingElement.style.left = `${e.screenX - startPosition.x}px`
        //draggingElement.style.transform = `translate(${e.screenX - startPosition.x}px, ${e.screenY - startPosition.y}px)`
    }
})
document.addEventListener('mouseup', function(e) {
    if(draggingElement) {        
        draggingElement.innerHTML = 'Drag me'
    }
    draggingElement = null
    startPosition = {}
})*/