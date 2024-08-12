
let mc = document.getElementById('main-content');
let button = document.getElementById('navbar');
let link = button.getElementsByTagName('a');

function displayPage(e) {
    e.preventDefault();
    let clickedBtn = e.target;
    let page = clickedBtn.getAttribute('href');
    loadData(page);
}

for (let item of link) {
    item.addEventListener("click", displayPage);
}

function loadData(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            mc.innerHTML = data;
            
            if (page === 'index.html') {
                document.getElementById('masthead').style.backgroundImage = "url('home-background.jpg')";
            } else if (page === 'portfolio.html') {
                document.getElementById('masthead').style.backgroundImage = "url('portfolio-background.jpg')";
            }
        })
        .catch(error => console.error('Error loading content:', error));
}
if (link.length > 0) {
    loadData(link[0].getAttribute('href'));
}