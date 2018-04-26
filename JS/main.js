    let template = document.querySelector("#otherTemp").content;

    let otherStuff = document.querySelector("#other");
    let page = 1;
    let lookingForData = false;

    function fetchOther() {
        lookingForData = true;


        fetch("http://mihaelsandro.com/wordpress/wp-json/wp/v2/huset?_embed&per_page=2&page=" + page)
            .then(e => e.json())
            .then(showOther)
    }

    function showOther(data) {
        console.log(data);
        data.forEach(showOneOther);
        lookingForData = false;
    }

    function showOneOther(anEvent) {
        console.log(anEvent._embeded)


        let clone = template.cloneNode(true);

        clone.querySelector("h1").textContent = anEvent.title.rendered;
        clone.querySelector(".price span").textContent = anEvent.acf.price;
        clone.querySelector(".date").textContent = anEvent.acf.date;
        clone.querySelector(".time").textContent = anEvent.acf.time;
        //clone.querySelector(".description").innerHTML = anEvent.acf.description;
        clone.querySelector(".genre").textContent = anEvent.acf.genre;
        if (anEvent._embedded["wp:featuredmedia"]) { //img is there
            clone.querySelector("img").setAttribute("src", anEvent._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url)
        } else { // no img
            clone.querySelector("img").remove()
        }
clone.querySelector("a.readmore").href="subpage.html?id=" + anEvent.id;

        other.appendChild(clone);
    }

    fetchOther();
    setInterval(function () {
        if (bottomVisible() && lookingForData === false) {
            page++;
            fetchOther();
        }
    }, 100)



    function bottomVisible() {
        const scrollY = window.scrollY
        const visible = document.documentElement.clientHeight
        const pageHeight = document.documentElement.scrollHeight
        const bottomOfPage = visible + scrollY >= pageHeight
        return bottomOfPage || pageHeight < visible
    }
