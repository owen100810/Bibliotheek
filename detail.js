document.addEventListener("DOMContentLoaded", () => {
    // 1. Haal het ID nummer op uit de URL (bijv. detail.html?id=1)
    const urlParams = new URLSearchParams(window.location.search);
    const boekId = parseInt(urlParams.get('id'));

    // 2. Database met extra content (Recensies, Audio en Uitgebreide verhalen)
    const boekenDatabase = {
        1: {
            title: "De Schaduw van de Wind",
            author: "Carlos Ruiz Zafón",
            publisher: "Signatuur",
            year: "2001",
            status: "beschikbaar",
            image: "images/de-schaduw-van-de-wind.jpg",
            description: "Dit is een magistraal mysterieus verhaal gesitueerd in het Barcelona van de 20e eeuw. Wanneer Daniel Sempere door zijn vader wordt meegenomen naar het Kerkhof der Vergeteng Boeken, kiest hij een werk dat zijn leven voorgoed zal verstrengelen met duistere geheimen, verboden liefdes en een mysterieuze boekverbrander.",
            audio: "audio/schaduw_wind_sample.mp3", // Sla je audiofragment op in een mapje 'audio'
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Prachtig geschreven, alsof je zelf door de mistige straten van Barcelona loopt!' - Sophie V.",
                "⭐⭐⭐⭐ - 'Spannend, sfeervol en heel poëtisch.' - Lucas"
            ]
        },
        2: {
            title: "De Middernachtbibliotheek",
            author: "Matt Haig",
            publisher: "HarperCollins",
            year: "2020",
            status: "uitgeleend",
            image: "images/de-middernachtbibliotheek.jpg",
            description: "Nora Seed vindt zichzelf terug in een oneindige bibliotheek tussen leven en dood. Elke plank staat vol met boeken die het verhaal vertellen van de levens die ze had kunnen leiden als ze andere keuzes had gemaakt. Ze krijgt de unieke kans om te ontdekken wat écht de moeite waard is in het leven.",
            audio: "", // Leeglaten als er geen audio is (sectie verbergt automatisch)
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Dit boek heeft mijn kijk op spijt en het leven compleet veranderd!' - Anouk",
                "⭐⭐⭐ - 'Mooi concept, hoewel het einde een klein beetje voorspelbaar was.' - Daan"
            ]
        },
        3: {
            title: "Duin",
            author: "Frank Herbert",
            publisher: "Volt",
            year: "1965",
            status: "beschikbaar",
            image: "images/duin.jpg",
            description: "Het legendarische sciencefictionepos over Paul Atreides, wiens familie de controle krijgt over de gevaarlijke woestijnplaneet Arrakis. Arrakis is de enige bron van de 'Specie', de meest waardevolle stof in het universum. Een verhaal vol politiek, religie en ecologie.",
            audio: "https://www.archive.org/download/sample_audio/dune_public.mp3", // Voorbeeld van een externe publieke link
            reviews: [
                "⭐⭐⭐⭐⭐ - 'De absolute koning onder de Sci-Fi boeken. Ongekend diepgaand.' - Thomas",
                "⭐⭐⭐⭐ - 'In het begin wat lastig doorheen te komen vanwege de complexe wereld, maar daarna fantastisch.' - Elize' "
            ]
        }
        // TIP: Kopieer dit patroon door tot nummer 20 voor al je boeken!
    };

    // 3. Match het ID met de database en vul de HTML pagina
    const boek = boekenDatabase[boekId];

    if (boek) {
        document.getElementById("book-title").textContent = boek.title;
        document.getElementById("book-author").textContent = "Door: " + boek.author;
        document.getElementById("book-publisher").textContent = boek.publisher;
        document.getElementById("book-year").textContent = typeof boek.year === 'string' ? boek.year : String(boek.year);
        document.getElementById("book-cover").src = boek.image;
        document.getElementById("book-description").textContent = boek.description;

        // Status badge styling toepassen
        const statusElement = document.getElementById("book-status");
        statusElement.textContent = boek.status;
        statusElement.classList.add(boek.status); // Voegt automatisch 'beschikbaar' of 'uitgeleend' als class toe voor de kleur [cite: 27]

        // Audio fragment tonen indien ingevuld
        if (boek.audio) {
            const audioSection = document.getElementById("audio-section");
            const audioPlayer = document.getElementById("book-audio");
            audioPlayer.src = boek.audio;
            audioSection.style.display = "block"; // Maak de audioplayer zichtbaar
        }

        // Recensies opbouwen
        const reviewsContainer = document.getElementById("reviews-container");
        boek.reviews.forEach(reviewText => {
            const reviewParagraph = document.createElement("p");
            reviewParagraph.className = "review-item";
            reviewParagraph.textContent = reviewText;
            reviewsContainer.appendChild(reviewParagraph);
        });

    } else {
        // Foutafhandeling als het boek-ID niet bestaat
        document.getElementById("book-title").textContent = "Boek niet gevonden";
        document.body.innerHTML = `<div class='detail-container'><p>Oeps! Dit boek staat niet in onze database. <a href='index.html'>Ga terug</a></p></div>`;
    }
});