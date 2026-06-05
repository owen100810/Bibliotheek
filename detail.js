document.addEventListener("DOMContentLoaded", () => {
    // 1. Haal het ID uit de URL
    const urlParams = new URLSearchParams(window.location.search);
    const boekId = parseInt(urlParams.get('id'));

    // 2. Volledige database met alle 20 boeken
    const boekenDatabase = {
        1: {
            title: "De Schaduw van de Wind",
            author: "Carlos Ruiz Zafón",
            publisher: "Signatuur",
            year: "2001",
            status: "beschikbaar",
            image: "images/de-schaduw-van-de-wind.jpg",
            description: "Dit is een magistraal mysterieus verhaal gesitueerd in het Barcelona van de 20e eeuw. Wanneer Daniel Sempere door zijn vader wordt meegenomen naar het Kerkhof der Vergeteng Boeken, kiest hij een werk dat zijn leven voorgoed zal verstrengelen met duistere geheimen, verboden liefdes en een mysterieuze boekverbrander.",
            audio: "audio/schaduw_wind_sample.mp3",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Prachtig geschreven, alsof je zelf door de mistige straten van Barcelona loopt!' - Sophie V.",
                "⭐⭐⭐⭐ - 'Spannend, sfeervol en heel poëtisch.' - Lucas",
                "⭐⭐⭐⭐⭐ - 'Een boek dat je niet meer loslaat. Absoluut een meesterwerk!' - Emma"
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
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Dit boek heeft mijn kijk op spijt en het leven compleet veranderd!' - Anouk",
                "⭐⭐⭐ - 'Mooi concept, hoewel het einde een klein beetje voorspelbaar was.' - Daan",
                "⭐⭐⭐⭐⭐ - 'Troostend en hoopvol. Iedereen zou dit moeten lezen.' - Lisa"
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
            audio: "https://www.archive.org/download/sample_audio/dune_public.mp3",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'De absolute koning onder de Sci-Fi boeken. Ongekend diepgaand.' - Thomas",
                "⭐⭐⭐⭐ - 'In het begin wat lastig doorheen te komen, maar daarna fantastisch.' - Elize",
                "⭐⭐⭐⭐⭐ - 'Een meesterwerk dat je wereldbeeld verandert.' - Ruben"
            ]
        },
        4: {
            title: "Project Hail Mary",
            author: "Andy Weir",
            publisher: "Luitingh-Sijthoff",
            year: "2021",
            status: "beschikbaar",
            image: "images/project-hail-mary.jpg",
            description: "Een eenzame astronaut ontwaakt in een ruimteschip met totaal geheugenverlies. Hij moet de mensheid redden van een extinction-level event. Een spannend, wetenschappelijk onderbouwd verhaal vol humor en hoop.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Zelfs beter dan The Martian! Onmogelijk om neer te leggen.' - Mike",
                "⭐⭐⭐⭐ - 'Wetenschap en spanning in perfecte balans.' - Sarah",
                "⭐⭐⭐⭐⭐ - 'Briljant en hartverwarmend.' - Jeroen"
            ]
        },
        5: {
            title: "De Alchemist",
            author: "Paulo Coelho",
            publisher: "De Arbeiderspers",
            year: "1988",
            status: "uitgeleend",
            image: "images/de-alchemist.jpg",
            description: "De magische reis van de Spaanse schaapherder Santiago op zoek naar een schat bij de piramiden. Een tijdloos verhaal over het volgen van je dromen en het vinden van je persoonlijke legende.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Dit boek heeft me echt geïnspireerd om mijn dromen na te jagen.' - Noor",
                "⭐⭐⭐⭐ - 'Simpel maar krachtig. Een moderne klassieker.' - Jamal"
            ]
        },
        6: {
            title: "Het Diner",
            author: "Herman Koch",
            publisher: "Ambo|Anthos",
            year: "2009",
            status: "beschikbaar",
            image: "images/het-diner.jpg",
            description: "Twee echtparen gaan chic uit eten. Ondertussen ligt het criminele lot van hun zonen op tafel. Een messcherpe roman over moraal, hypocrisie en de duistere kant van de mens.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐ - 'Pijnlijk herkenbaar en vlijmscherp.' - Anna",
                "⭐⭐⭐⭐⭐ - 'Kon het niet wegleggen!' - Pieter"
            ]
        },
        7: {
            title: "De Hobbit",
            author: "J.R.R. Tolkien",
            publisher: "Boekerij",
            year: "1937",
            status: "beschikbaar",
            image: "images/de-hobbit.jpg",
            description: "Bilbo Balings wordt meegesleurd in een avontuur om een schat terug te winnen van de draak Smaug. Het begin van een episch verhaal dat de basis vormt voor In de Ban van de Ring.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Tijdloos avontuur. Iedereen zou dit moeten lezen.' - David",
                "⭐⭐⭐⭐ - 'Fantastisch geschreven, perfecte inleiding tot Midden-aarde.' - Laura"
            ]
        },
        8: {
            title: "Sapiens",
            author: "Yuval Noah Harari",
            publisher: "Thomas Rap",
            year: "2011",
            status: "uitgeleend",
            image: "images/sapiens.jpg",
            description: "Een fascinerende reis door de geschiedenis van de mensheid, van apen tot heersers van de aarde. Harari legt op toegankelijke wijze uit hoe we geworden zijn wie we zijn.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Ogenopenend. Verandert hoe je naar de wereld kijkt.' - Maya",
                "⭐⭐⭐⭐ - 'Briljant en toegankelijk.' - Thomas"
            ]
        },
        9: {
            title: "Grand Hotel Europa",
            author: "Ilja Leonard Pfeijffer",
            publisher: "Das Mag",
            year: "2018",
            status: "beschikbaar",
            image: "images/grand-hotel-europa.jpg",
            description: "Een meeslepende roman over de identiteit van Europa en de grote impact van het massatoerisme. Een liefdevol en kritisch portret van ons continent.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Briljant en actueel.' - Sophie",
                "⭐⭐⭐⭐ - 'Pfeijffer op zijn best.' - Mark"
            ]
        },
        10: {
            title: "Daar waar de rivierkreeften zingen",
            author: "Delia Owens",
            publisher: "The House of Books",
            year: "2018",
            status: "uitgeleend",
            image: "images/daar-waar-de-rivierkreeften-zingen.jpg",
            description: "Het moerasmeisje Kya groeit alleen op in de moerassen van North Carolina. Als er een man dood wordt gevonden, is zij de hoofdverdachte.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Prachtig en ontroerend.' - Eva",
                "⭐⭐⭐⭐ - 'Een uniek verhaal.' - Lucas"
            ]
        },
        11: {
            title: "1984",
            author: "George Orwell",
            publisher: "De Arbeiderspers",
            year: "1949",
            status: "beschikbaar",
            image: "images/1984.jpg",
            description: "De wereldberoemde dystopie over Big Brother, totale surveillance en de manipulatie van de waarheid. Nog steeds schrikbarend actueel.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Tijdloos en beangstigend relevant.' - Nina",
                "⭐⭐⭐⭐⭐ - 'Iedereen zou dit moeten lezen.' - Alex"
            ]
        },
        12: {
            title: "Harry Potter en de Steen der Wijzen",
            author: "J.K. Rowling",
            publisher: "De Harmonie",
            year: "1997",
            status: "beschikbaar",
            image: "images/harry-potter-steen-der-wijzen.jpg",
            description: "De jonge weesjongen Harry ontdekt dat hij een tovenaar is en mag studeren aan Zweinstein. Het begin van een legendarische saga.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Magisch vanaf de eerste pagina!' - Floor",
                "⭐⭐⭐⭐ - 'Perfect voor alle leeftijden.' - Ben"
            ]
        },
        13: {
            title: "De Da Vinci Code",
            author: "Dan Brown",
            publisher: "Luitingh",
            year: "2003",
            status: "uitgeleend",
            image: "images/de-da-vinci-code.jpg",
            description: "Robert Langdon moet een moord in het Louvre oplossen en stuit op een eeuwenoud geheim genootschap. Een razendsnelle thriller.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐ - 'Spannend tot de laatste pagina.' - Claire",
                "⭐⭐⭐⭐⭐ - 'Geweldige plot twists!' - Victor"
            ]
        },
        14: {
            title: "De Zeven Zussen",
            author: "Lucinda Riley",
            publisher: "Xander Uitgevers",
            year: "2014",
            status: "beschikbaar",
            image: "images/de-zeven-zussen.jpg",
            description: "Na de dood van hun adoptievader komen zes zussen samen om puzzels over hun afkomst op te lossen. Het begin van een prachtige familie-saga.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Verslavend goed!' - Isabel",
                "⭐⭐⭐⭐ - 'Mooie mix van heden en verleden.' - Finn"
            ]
        },
        15: {
            title: "De Waarheid over de zaak Harry Quebert",
            author: "Joël Dicker",
            publisher: "De Bezige Bij",
            year: "2012",
            status: "beschikbaar",
            image: "images/de-waarheid-over-de-zaak-harry-quebert.jpg",
            description: "Een jonge schrijver onderzoekt de verdwijning van een meisje uit 1975. Een ingenieuze thriller vol plotwendingen.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Meesterlijk opgebouwd!' - Julie",
                "⭐⭐⭐⭐ - 'Onvoorspelbaar en slim.' - Sam"
            ]
        },
        // Boeken 16 t/m 20 (je kunt ze makkelijk verder uitbreiden)
        16: { title: "De Boekendief", author: "Markus Zusak", publisher: "Van Goor", year: "2005", status: "beschikbaar", image: "images/de-boekendief.jpg", description: "Tijdens WOII steelt Liesel Meminger boeken terwijl de dood zelf het verhaal vertelt.", audio: "", reviews: ["⭐⭐⭐⭐⭐ - 'Ontroerend en origineel.' - Lena", "⭐⭐⭐⭐ - 'Prachtig geschreven.' - Max"] },
        17: { title: "Het Gouden Kompas", author: "Philip Pullman", publisher: "Spectrum", year: "1995", status: "beschikbaar", image: "images/het-gouden-kompas.jpg", description: "Lyra Belacqua belandt in een episch avontuur in een wereld vol daemons en parallelle universums.", audio: "", reviews: ["⭐⭐⭐⭐⭐ - 'Fantastische wereldbouw!' - Rosa", "⭐⭐⭐⭐ - 'Spannend en filosofisch.' - Timo"] },
        18: { title: "De Achtste Dag", author: "Marc Reugebrink", publisher: "Ambo|Anthos", year: "2022", status: "uitgeleend", image: "images/de-achtste-dag.jpg", description: "Een indringende roman over een man die na een ongeval zijn leven opnieuw moet opbouwen.", audio: "", reviews: ["⭐⭐⭐⭐ - 'Diep en menselijk.' - Floor", "⭐⭐⭐⭐⭐ - 'Zeer herkenbaar.' - Bart"] },
        19: { title: "Dertien", author: "Steve Cavanagh", publisher: "A.W. Bruna", year: "2018", status: "beschikbaar", image: "images/dertien.jpg", description: "Een briljante juridische thriller over een moordenaar die zichzelf als jurylid laat kiezen.", audio: "", reviews: ["⭐⭐⭐⭐⭐ - 'Slim en spannend!' - Noa", "⭐⭐⭐⭐ - 'Geweldige plot.' - Levi"] },
        20: { title: "De Zeven Zussen: De Maanster", author: "Lucinda Riley", publisher: "Xander Uitgevers", year: "2021", status: "beschikbaar", image: "images/de-maanster.jpg", description: "Het verhaal van de zevende zus in de populaire Zeven Zussen-serie.", audio: "", reviews: ["⭐⭐⭐⭐⭐ - 'Prachtig vervolg!' - Mila", "⭐⭐⭐⭐ - 'Emotioneel en meeslepend.' - Finn"] }
    };

    // 3. Vul de pagina
    const boek = boekenDatabase[boekId];

    if (boek) {
        document.getElementById("book-title").textContent = boek.title;
        document.getElementById("book-author").textContent = "Door: " + boek.author;
        document.getElementById("book-publisher").textContent = boek.publisher;
        document.getElementById("book-year").textContent = boek.year;
        document.getElementById("book-cover").src = boek.image;
        document.getElementById("book-description").textContent = boek.description;

        // Status
        const statusElement = document.getElementById("book-status");
        statusElement.textContent = boek.status.toUpperCase();
        statusElement.classList.add(boek.status);

        // Audio
        const audioSection = document.getElementById("audio-section");
        if (boek.audio && boek.audio !== "") {
            document.getElementById("book-audio").src = boek.audio;
            audioSection.style.display = "block";
        } else {
            audioSection.style.display = "none";
        }

        // Recensies
        const reviewsContainer = document.getElementById("reviews-container");
        reviewsContainer.innerHTML = "";
        boek.reviews.forEach(reviewText => {
            const reviewParagraph = document.createElement("p");
            reviewParagraph.className = "review-item";
            reviewParagraph.textContent = reviewText;
            reviewsContainer.appendChild(reviewParagraph);
        });

    } else {
        // Foutafhandeling
        document.body.innerHTML = `
            <div class="detail-container">
                <h1>Boek niet gevonden</h1>
                <p>Oeps! Dit boek staat niet in onze database.</p>
                <a href="index.html">← Terug naar Overzicht</a>
            </div>`;
    }
});
