window.onload = function () {
    let hrefs = document.location.href.split("/");
    let currentTab = hrefs[hrefs.length - 1];
    document.querySelector(`a[href='${currentTab}']`).style.background = "#444";

    document.querySelectorAll(".papa").forEach(x => {
        x.style.height = `calc(100vh - ${document.querySelector("nav").offsetHeight}px)`
    });

    let isOverlay = false;
    document.querySelectorAll("img").forEach(x => x.addEventListener(
        "click", function(ev) {
            if (!isOverlay){
                isOverlay = true;
                ev.preventDefault();
                ev.stopPropagation();
                document.getElementsByClassName("image-container")[0].style.opacity = "0.2";
                document.getElementById("overlay").style.display = "block";
                document.getElementById("overlay").innerHTML =
                    `<img class="overlay" height="${window.innerWidth / 2}" width="${window.innerWidth / 2}" src="${x.src}"/>`;

            }
        }
    ));
    document.querySelectorAll("video").forEach(x => x.addEventListener(
        "click", function(ev) {
            if (!isOverlay){
                isOverlay = true;
                ev.preventDefault();
                ev.stopPropagation();
                document.getElementsByClassName("image-container")[0].style.opacity = "0.2";
                document.getElementById("overlay").style.display = "block";
                document.getElementById("overlay").innerHTML =
                    `<video class="overlay" controls height="${window.innerWidth / 2}" width="${window.innerWidth / 2}" style="background: #000">
                        <source src="${x.children[0].src}" type="video/mp4">
                    </video>`;

            }
        }
    ));
    document.onclick = (ev) => {
        if (isOverlay){
            console.log(ev.target)
            if (ev.target.className !== "overlay"){
                document.getElementById("overlay").style.display = "none";
                document.getElementsByClassName("image-container")[0].style.opacity = "1";
                isOverlay = false;

            }
        }
    }
    window.onscroll = (ev) => {
        let top = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        let isShow = top / window.innerHeight > 0.25;
        if (isShow){
            document.getElementById("scrollshow").style.display = "block";
        } else {
            document.getElementById("scrollshow").style.display = "none";
        }

    }

};