// Sidebar toggle for menu button
document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.querySelector('.menu-icon');
    var sidebar = document.querySelector('.sidebar');
    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', function () {
            sidebar.classList.toggle('sidebar-hidden');
        });
    }
});
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
    window.location.href = "play-video.html?video=" + encodeURIComponent(id);
}
