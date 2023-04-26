  const a = document.querySelectorAll(".links");
    const sec = document.querySelectorAll("section");
    function activeMenu() {
        let len = sec.length;
        while (--len && window.scrollY + 50 < sec[len].offsetTop) { }
        a.forEach(ltx => ltx.classList.remove("active"));
        a[len].classList.add("active");
    }
    activeMenu();
    window.addEventListener("scroll", activeMenu);