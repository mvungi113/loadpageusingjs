// function to load header

function loadHeader(){
    fetch('./src/header.html')
    .then(response=>response.text())
    .then(html=>{
        document.getElementById('header').innerHTML =html;
    });
}

// function to load footer
function loadFooter(){
    fetch('./src/footer.html')
    .then(response=>response.text())
    .then(html=>{
        document.getElementById('footer').innerHTML =html;
    });
}


// call the function to load header and footer when the page loads
window.onload = function(){
    loadHeader();
    loadFooter();
}