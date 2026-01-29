const videoData = [
    //belle
  { 
    src: "biglaan.mp4",
    thumb: "images/thumbnails/belle/biglaan.png",
    title: "Biglaan",
    uploader: "Belle Mariano",
    views: "0 views",
    date: "4 days"
  },
  {
    src: "Bugambilya.mp4",
    thumb: "images/thumbnails/belle/bugambilya.png",
    title: "Bugambilya",
    uploader: "Belle Mariano",
    views: "0 views",
    date: "4 days"
  },
  {
    src: "For Your Eyes Only.mp4",
    thumb: "images/thumbnails/belle/for your eyes only.png",
    title: "For Your Eyes Only",
    uploader: "Belle Mariano",
    views: "0 views",
    date: "4 days"
  },
  {
    src: "Kahit na, Kahit pa.mp4",
    thumb: "images/thumbnails/belle/kahit na, kahit pa.png",
    title: "Kahit na, Kahit pa",
    uploader: "Belle Mariano",
    views: "0 views",
    date: "4 days"
  },
  {
    src: "Rise.mp4",
    thumb: "images/thumbnails/belle/rise up.png",
    title: "Rise",
    uploader: "Belle Mariano",
    views: "0 views",
    date: "4 days"
  },
  {
    src: "Roadtrip.mp4",
    thumb: "images/thumbnails/belle/roadtrip.png",
    title: "Roadtrip",
    uploader: "Belle Mariano",
    views: "0 views",
    date: "4 days"
  },
  {
    src: "Sigurado.mp4",
    thumb: "images/thumbnails/belle/sigurado.png",
    title: "Sigurado",
    uploader: "Belle Mariano",
    views: "0 views",
    date: "4 days"
  },
  {
    src: "Somber And Solemn.mp4",
    thumb: "images/thumbnails/belle/somber and solemn.png",
    title: "Somber And Solemn",
    uploader: "Belle Mariano",
    views: "0 views",
    date: "4 days"
  },
  {
    src: "Tanging Dahilan.mp4",
    thumb: "images/thumbnails/belle/tanging dahilan.png",
    title: "Tanging Dahilan",
    uploader: "Belle Mariano",
    views: "0 views",
    date: "4 days"
  },
  {
    src: "With You.mp4",
    thumb: "images/thumbnails/belle/with you.png",
    title: "With You",
    uploader: "Belle Mariano",
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
    window.location.href = "belle.html?video=" + encodeURIComponent(id);
}
