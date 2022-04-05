const map = document.querySelector('.map')
var longtitudeOrigin = map.clientWidth * 0.46
var latitudeOrigin = map.clientHeight * 0.5

const leftPosition = longtitude => {
    return longtitudeOrigin + (map.clientWidth / 2) * longtitude / 180
}
const topPosition = latitude => {
    return latitudeOrigin - (map.clientHeight / 2) * latitude / 90 + map.clientHeight * 0.095
}

const createMarker = (latitude, longtitude) => {
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longtitude}&localityLanguage=en`)
    .then(response => response.json())
    .then(json => {
        var marker = document.createElement('div')
        marker.classList.add('marker')
        marker.innerHTML = "&#10004;"
        marker.style.top = `${topPosition(latitude)}px`
        marker.style.left = `${leftPosition(longtitude)}px`
        marker.title = `${json.countryName}, ${json.locality}`
        map.appendChild(marker)
    })
}

/*createMarker(51, 0)
createMarker(-20, 47)*/

navigator.geolocation.getCurrentPosition(e => {
    createMarker(e.coords.latitude, e.coords.longitude)
})