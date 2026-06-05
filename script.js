document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");
    const sortSelect = document.getElementById("sortSelect");
    const bookGrid = document.getElementById("bookGrid");
    const boeken = Array.from(document.querySelectorAll(".boek"));
    const filterLinks = document.querySelectorAll(".nav-link");
    const visibleCount = document.getElementById("visible-count");

    let huidigFilter = "all";

    function filterEnZoekBoeken() {
        const zoekTerm = searchBar.value.toLowerCase().trim();
        let aantalZichtbaar = 0;

        boeken.forEach(boek => {
            const titel = boek.getAttribute("data-title").toLowerCase();
            const metadata = boek.querySelector(".meta-data").textContent.toLowerCase();
            const schrijver = boek.querySelector(".schrijver").textContent.toLowerCase();
            const status = boek.getAttribute("data-status");

            const matchZoekterm = titel.includes(zoekTerm) || metadata.includes(zoekTerm) || schrijver.includes(zoekTerm);
            const matchFilter = (huidigFilter === "all" || status === huidigFilter);

            if (matchZoekterm && matchFilter) {
                boek.style.display = "flex";
                setTimeout(() => { boek.style.opacity = "1"; }, 50);
                aantalZichtbaar++;
            } else {
                boek.style.opacity = "0";
                boek.style.display = "none";
            }
        });

        visibleCount.textContent = aantalZichtbaar;
    }

    searchBar.addEventListener("input", filterEnZoekBoeken);

    filterLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            filterLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
            huidigFilter = link.getAttribute("data-filter");
            filterEnZoekBoeken();
        });
    });

    sortSelect.addEventListener("change", () => {
        const sorteerWaarde = sortSelect.value;
        let gesorteerdeBoeken = [...boeken];

        if (sorteerWaarde === "titel-az") {
            gesorteerdeBoeken.sort((a, b) => a.getAttribute("data-title").localeCompare(b.getAttribute("data-title")));
        } else if (sorteerWaarde === "titel-za") {
            gesorteerdeBoeken.sort((a, b) => b.getAttribute("data-title").localeCompare(a.getAttribute("data-title")));
        } else if (sorteerWaarde === "jaar-nieuw") {
            gesorteerdeBoeken.sort((a, b) => b.getAttribute("data-year") - a.getAttribute("data-year"));
        }

        bookGrid.innerHTML = "";
        gesorteerdeBoeken.forEach(boek => bookGrid.appendChild(boek));
        filterEnZoekBoeken();
    });
});