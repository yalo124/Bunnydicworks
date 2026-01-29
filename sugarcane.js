const videoData = [
    //Sugarcane
  { 
    src: "dalangin.mp4",
    thumb: "images/thumbnails/Sugarcane/dalangin.jpg",
    title: "Dalangin",
    uploader: "Sugarcane",
    views: "0 views",
    date: "4 days"
  },
  {
    src: "gunita.mp4",
    thumb: "images/thumbnails/Sugarcane/gunita.jpg",
    title: "Gunita",
    uploader: "Sugarcane",
    views: "0 views",
    date: "4 days"
  },
  {
    src: "kungmagingakinka.mp4",
    thumb: "images/thumbnails/Sugarcane/kung maging akin ka.jpg",
    title: "Kung Maging Akin Ka",
    uploader: "Sugarcane",
    views: "0 views",
    date: "4 days"
  },
  {
    src: "leonora.mp4",
    thumb: "images/thumbnails/Sugarcane/Leonora.jpg",
    title: "Leonora",
    uploader: "Sugarcane",
    views: "0 views",
    date: "4 days"
  },
  {
    src: "mariaclara.mp4",
    thumb: "images/thumbnails/Sugarcane/Maria Clara.jpg",
    title: "Maria Clara",
    uploader: "Sugarcane",
    views: "0 views",
    date: "4 days"
  },
  {
    src: "memory.mp4",
    thumb: "images/thumbnails/Sugarcane/memory.jpg",
    title: "Memory",
    uploader: "Sugarcane",
    views: "0 views",
    date: "4 days"
  },
  {
    src: "paruparo.mp4",
    thumb: "images/thumbnails/Sugarcane/Paruparo.jpg",
    title: "Paruparo",
    uploader: "Sugarcane",
    views: "0 views",
    date: "4 days"
  },
  {
    src: "reside.mp4",
    thumb: "images/thumbnails/Sugarcane/reside.jpg",
    title: "Reside",
    uploader: "Sugarcane",
    views: "0 views",
    date: "4 days"
  },
  {
    src: "sinehan.mp4",
    thumb: "images/thumbnails/Sugarcane/sinehan.jpg",
    title: "Sinehan",
    uploader: "Sugarcane",
    views: "0 views",
    date: "4 days"
  },
  {
    src: "tangingikaw.mp4",
    thumb: "images/thumbnails/Sugarcane/tanging ikaw.jpg",
    title: "Tanging Ikaw",
    uploader: "Sugarcane",
    views: "0 views",
    date: "4 days"
  }
];

// read video id from querystring (1-based)
const params = new URLSearchParams(window.location.search);
let currentID = parseInt(params.get("video"), 10) - 1;
if (isNaN(currentID) || currentID < 0 || currentID >= videoData.length) currentID = 0;
// Helpers
function encodePath(p) { return encodeURI(p); }

// load main player
const mainPlayer = document.getElementById("main-player");
function loadMainVideo(id) {
    currentID = id;
    const data = videoData[id];

    mainPlayer.innerHTML = "";

    // create video element
    const video = document.createElement("video");
    video.src = encodeURI(data.src);
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.borderRadius = "10px";
    mainPlayer.appendChild(video);

    // create video info container
    const infoDiv = document.createElement("div");
    infoDiv.className = "video-info";

    const title = document.createElement("h2");
    title.textContent = data.title;
    infoDiv.appendChild(title);

    const uploader = document.createElement("p");
    uploader.textContent = data.uploader;
    infoDiv.appendChild(uploader);

    const viewsDate = document.createElement("p");
    viewsDate.textContent = `${data.views} • ${data.date}`;
    infoDiv.appendChild(viewsDate);

    mainPlayer.appendChild(infoDiv);
}

// build right sidebar thumbnails (exclude current, keep clickable)
function buildSidebar() {
    sidebar.innerHTML = "";
    videoData.forEach((data, i) => {
        if (i === currentID) return; // skip current video

        const wrapper = document.createElement("div");
        wrapper.className = "side-thumb";

        // thumbnail image
        const img = document.createElement("img");
        img.src = encodeURI(data.thumb);
        img.alt = `thumb-${i + 1}`;
        img.addEventListener("click", () => {
            loadMainVideo(i);      // load video without reloading page
            buildSidebar();        // refresh sidebar
        });
        wrapper.appendChild(img);

        // info container
        const infoDiv = document.createElement("div");
        infoDiv.className = "side-info";

        const title = document.createElement("div");
        title.className = "side-title";
        title.textContent = data.title;
        infoDiv.appendChild(title);

        const uploader = document.createElement("div");
        uploader.className = "side-uploader";
        uploader.textContent = data.uploader;
        infoDiv.appendChild(uploader);

        const viewsDate = document.createElement("div");
        viewsDate.className = "side-views-date";
        viewsDate.textContent = `${data.views} • ${data.date}`;
        infoDiv.appendChild(viewsDate);

        wrapper.appendChild(infoDiv);
        sidebar.appendChild(wrapper);
    });
}


loadMainVideo(currentID);
buildSidebar();

var menuIcon = document.querySelector(".menu-icon");
var sidebarEl = document.querySelector(".sidebar");
var pageContainer = document.querySelector(".container") || document.querySelector(".page-row");

if (menuIcon) {
    menuIcon.addEventListener("click", function () {
        const leftSidebar = document.querySelector(".sidebar");
        const left = document.querySelector(".sidebar"); 
        const mainSidebar = document.querySelector(".sidebar");
        document.querySelectorAll(".sidebar, .left-sidebar").forEach(s => s && s.classList.toggle("small-sidebar"));
        if (pageContainer) pageContainer.classList.toggle("large-container");
    });
}

function openVideo(id) {
    window.location.href = "sugarcane.html?video=" + encodeURIComponent(id);
}

