async function loadPage(url) {
    const res = await fetch(url);
    const html = await res.text();
    document.querySelector("main").classList.add("fade-out");

    setTimeout(() => {
        document.querySelector("main").innerHTML = html;
        document.querySelector("main").classList.remove("fade-out");
        document.querySelector("main").classList.add("fade-in");
    }, 200);
}
document.addEventListener("click", e => {
    const link = e.target.closest("a");

    if (link && link.getAttribute("data-nav") === "spa") {
        e.preventDefault();
        const url = link.getAttribute("href");
        history.pushState({}, "", url);
        loadPage(url);
    }
});
.fade-out {
  opacity: 0;
  transition: 0.25s;
}

.fade-in {
  opacity: 1;
  transition: 0.25s;
}
window.onpopstate = () => {
    loadPage(location.pathname);
};
