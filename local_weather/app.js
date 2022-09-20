const locateBtn = document.querySelector('#get-location')
const locate = document.querySelector('.locate')


locateBtn.addEventListener('click', () => {
    getLocation()
})


const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            locate.innerHTML = `latitude: ${pos.coords.latitude} - longitude: ${pos.coords.longitude}`
        })
    }
}