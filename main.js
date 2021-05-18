const data = [
    {
        title:'The History of map making',
        content:'The first maps of were made in 1200 BC. People used to draw dots to represent stars and constellations '
    },
    {
        title:'The map of the world',
        content:'History’s earliest known world map was scratched on clay tablets in the ancient city of Babylon sometime around 600 B.C. The star-shaped map measures just five-by-three inches and shows the world as a flat disc surrounded by an ocean, or “bitter river.”.'
    },
    {
        title:'The first mathematical map',
        content:'The Greeks are credited with putting map making on a sound mathematical footing. The earliest Greek known to have made a map of the world was Anaximander. In 6th century BC, he drew a map of the then known world, assuming that the earth was cylindrical'
    },
    {
        title:'Circular Earth',
        content:"The first Greek to draw a world map using the assumption of a spherical earth was Eratosthenes. Ptolomey first drew maps of the world using latitudes and longitudes and conic projection"
        +
        "In 150 AD he produced a six-volume atlas called Geographia containing several maps of the world known during his time."
    }
]

let current_data = 0

setInterval(() => {
    let alertDiv = document.getElementById('alert')
    let closeButton = document.getElementById('close')
    closeButton.onclick = () => {alertDiv.style.display = 'none'}
    alertDiv.classList = ['alert']
    let alertText = document.getElementById('alert-text')
    alertText.innerHTML = 'Turbo Technologies has created this website'
}, 2000);

function next(num) {
    //defining content and title fields
    let titleField = document.getElementById('title')
    let contentField = document.getElementById('content')
    if (data[current_data + num] !== undefined) {
        current_data += num
        let content = data[current_data].content
        let title = data[current_data].title
        titleField.innerHTML = title
        contentField.innerHTML = content
    }
    
}
