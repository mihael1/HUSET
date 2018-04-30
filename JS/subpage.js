let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");

fetch("http://mihaelsandro.com/wordpress/wp-json/wp/v2/huset/" +id)
.then(e=>e.json())
.then(showDetails)


function showDetails(aDetails){
    console.log(aDetails);
    document.querySelector("h2").textContent=aDetails.title.rendered;
    document.querySelector("img").src=aDetails.acf.image.sizes.large;
    document.querySelector("p.desc").innerHTML=aDetails.acf.description;
     var year = aDetails.acf.date.substring(2, 4);
        var month = aDetails.acf.date.substring(4, 6);
        var day = aDetails.acf.date.substring(6, 8);

        document.querySelector("h4.date").textContent = day + "/" + month + "/" + year;
        document.querySelector("h4.time").textContent = aDetails.acf.time;
        document.querySelector(".price span").textContent = aDetails.acf.price;
}
