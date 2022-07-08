document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        const node = document.querySelector('#nav-sidebar')
        if (node) node.style.setProperty('transition', '0.1s')
    }, 1000);
});