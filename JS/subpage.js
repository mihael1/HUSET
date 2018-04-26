let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");

fetch("http://mihaelsandro.com/wordpress/wp-json/wp/v2/huset/" +id)
.then(e=>e.json())
.then(showDetails)


function showDetails(aDetails){
    console.log(aDetails);
    document.querySelector("h2").textContent=aDetails.title.rendered;
    document.querySelector("img").src=aDetails.acf.image.sizes.large;
}
