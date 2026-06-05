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
            audio: "audio/schaduw_wind_sample.mp3",
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
            audio: "",
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
            audio: "https://www.archive.org/download/sample_audio/dune_public.mp3",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'De absolute koning onder de Sci-Fi boeken. Ongekend diepgaand.' - Thomas",
                "⭐⭐⭐⭐ - 'In het begin wat lastig doorheen te komen vanwege de complexe wereld, maar daarna fantastisch.' - Elize'"
            ]
        },
        4: {
            title: "Project Hail Mary",
            author: "Andy Weir",
            publisher: "Luitingh-Sijthoff",
            year: "2021",
            status: "beschikbaar",
            image: "images/project-hail-mary.jpg",
            description: "Ryland Grace ontwaakt alleen in een ruimteschip, ver van huis, met geen enkel idee hoe hij daar terecht is gekomen. Zijn missie: de mensheid redden van een extinction-level event. Een briljant verhaal vol wetenschap, humor en hoop.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Het beste boek dat ik in jaren heb gelezen. Gewoonweg briljant!' - Mark",
                "⭐⭐⭐⭐ - 'Wetenschap en spanning in perfecte balans.' - Lisa"
            ]
        },
        5: {
            title: "De Alchemist",
            author: "Paulo Coelho",
            publisher: "De Arbeiderspers",
            year: "1988",
            status: "uitgeleend",
            image: "images/de-alchemist.jpg",
            description: "De magische reis van de Spaanse schaapherder Santiago die zijn persoonlijke legende volgt naar de piramiden van Egypte. Een tijdloos verhaal over dromen, lotsbestemming en het luisteren naar je hart.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Een boek dat je leven kan veranderen.' - Emma",
                "⭐⭐⭐⭐ - 'Simpel maar zeer krachtig.' - Thomas"
            ]
        },
        6: {
            title: "Het Diner",
            author: "Herman Koch",
            publisher: "Ambo|Anthos",
            year: "2009",
            status: "beschikbaar",
            image: "images/het-diner.jpg",
            description: "Twee echtparen gaan uit eten in een chic restaurant. Tijdens het diner komt langzaam een verschrikkelijk geheim aan het licht over hun kinderen. Een genadeloze confrontatie met moraal en ouderschap.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐ - 'Pijnlijk herkenbaar en keihard.' - Sarah",
                "⭐⭐⭐⭐⭐ - 'Je kunt het niet meer wegleggen.' - Jeroen"
            ]
        },
        7: {
            title: "De Hobbit",
            author: "J.R.R. Tolkien",
            publisher: "Boekerij",
            year: "1937",
            status: "beschikbaar",
            image: "images/de-hobbit.jpg",
            description: "Bilbo Balings, een comfortabele hobbit, wordt door de tovenaar Gandalf meegesleept op een groot avontuur met dertien dwergen om de schat van de draak Smaug terug te winnen.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Een tijdloos meesterwerk.' - David",
                "⭐⭐⭐⭐ - 'Perfecte mix van avontuur en humor.' - Anna"
            ]
        },
        8: {
            title: "Sapiens",
            author: "Yuval Noah Harari",
            publisher: "Thomas Rap",
            year: "2011",
            status: "uitgeleend",
            image: "images/sapiens.jpg",
            description: "Een fascinerende reis door de geschiedenis van de mensheid, van de opkomst van Homo sapiens tot de moderne tijd. Harari onthult hoe mythen, geld en ideologieën onze wereld hebben gevormd.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Elke pagina is een eye-opener.' - Rachel",
                "⭐⭐⭐⭐ - 'Verplichte kost voor iedereen.' - Pieter"
            ]
        },
        9: {
            title: "Grand Hotel Europa",
            author: "Ilja Leonard Pfeijffer",
            publisher: "Das Mag",
            year: "2018",
            status: "beschikbaar",
            image: "images/grand-hotel-europa.jpg",
            description: "Een meeslepende roman over liefde, identiteit en het massatoerisme dat Europa verandert. Een hotel in Italië wordt symbool voor een continent dat worstelt met zijn verleden en toekomst.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Briljant en zeer actueel.' - Laura",
                "⭐⭐⭐⭐ - 'Pfeijffer op zijn best.' - Michiel"
            ]
        },
        10: {
            title: "Daar waar de rivierkreeften zingen",
            author: "Delia Owens",
            publisher: "The House of Books",
            year: "2018",
            status: "uitgeleend",
            image: "images/daar-waar-de-rivierkreeften-zingen.jpg",
            description: "Het verhaal van Kya, het Moerasmeisje, die alleen opgroeit in de moerassen van North Carolina. Wanneer een man dood wordt gevonden, valt de verdenking op haar.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Prachtig en hartverscheurend.' - Floor",
                "⭐⭐⭐⭐ - 'De natuur komt tot leven.' - Bram"
            ]
        },
        11: {
            title: "1984",
            author: "George Orwell",
            publisher: "De Arbeiderspers",
            year: "1949",
            status: "beschikbaar",
            image: "images/1984.jpg",
            description: "In een totalitaire toekomststaat wordt alles in de gaten gehouden door Big Brother. Winston Smith rebelleert tegen het regime en zoekt naar waarheid en vrijheid.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Nog steeds angstaanjagend relevant.' - Nina",
                "⭐⭐⭐⭐ - 'Een absolute klassieker.' - Victor"
            ]
        },
        12: {
            title: "Harry Potter en de Steen der Wijzen",
            author: "J.K. Rowling",
            publisher: "De Harmonie",
            year: "1997",
            status: "beschikbaar",
            image: "images/harry-potter-steen-der-wijzen.jpg",
            description: "De jonge Harry Potter ontdekt dat hij een tovenaar is en wordt toegelaten tot Zweinsteins Hogeschool voor Hekserij en Hocus-Pocus. Zijn avontuur begint.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Magie in zijn puurste vorm.' - Lotte",
                "⭐⭐⭐⭐ - 'Perfect begin van een epische serie.' - Tim"
            ]
        },
        13: {
            title: "De Da Vinci Code",
            author: "Dan Brown",
            publisher: "Luitingh",
            year: "2003",
            status: "uitgeleend",
            image: "images/de-da-vinci-code.jpg",
            description: "Symboloog Robert Langdon raakt verwikkeld in een raadselachtige moord in het Louvre en ontdekt een eeuwenoud geheim dat de fundamenten van het christendom op losse schroeven zet.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐ - 'Razendsnel en verslavend.' - Sophie",
                "⭐⭐⭐⭐⭐ - 'Geweldige plot twists!' - Kevin"
            ]
        },
        14: {
            title: "De Zeven Zussen",
            author: "Lucinda Riley",
            publisher: "Xander Uitgevers",
            year: "2014",
            status: "beschikbaar",
            image: "images/de-zeven-zussen.jpg",
            description: "Na de dood van hun adoptievader ontdekken zes zussen dat ze deel uitmaken van een mysterieus verleden. Hun zoektocht leidt hen naar hun biologische roots.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Prachtig familie-epos.' - Isabelle",
                "⭐⭐⭐⭐ - 'Verslavende saga.' - Ruben"
            ]
        },
        15: {
            title: "De Waarheid over de zaak Harry Quebert",
            author: "Joël Dicker",
            publisher: "De Bezige Bij",
            year: "2012",
            status: "beschikbaar",
            image: "images/de-waarheid-over-de-zaak-harry-quebert.jpg",
            description: "Een jonge schrijver probeert de onschuld te bewijzen van zijn mentor Harry Quebert, die beschuldigd wordt van de moord op een meisje vijftien jaar eerder.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Meesterlijke thriller.' - Claire",
                "⭐⭐⭐⭐ - 'Vol verrassingen.' - Maarten"
            ]
        },
        16: {
            title: "De Grijze Jager: Ruïnes van Gorlan",
            author: "John Flanagan",
            publisher: "Gottmer",
            year: "2004",
            status: "uitgeleend",
            image: "images/de-grijze-jager.jpg",
            description: "Will, een kleine maar slimme jongen, wordt gekozen als leerling van de mysterieuze Grijze Jagers en leert de kunst van camouflage, boogschieten en spionage.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Perfect voor fantasy-liefhebbers.' - Finn",
                "⭐⭐⭐⭐ - 'Spannend vanaf pagina 1.' - Noa"
            ]
        },
        17: {
            title: "Het Parfum",
            author: "Patrick Süskind",
            publisher: "Prometheus",
            year: "1985",
            status: "beschikbaar",
            image: "images/het-parfum.jpg",
            description: "Jean-Baptiste Grenouille bezit een buitengewoon reukvermogen. Zijn obsessie voor het creëren van het perfecte parfum drijft hem tot gruwelijke daden.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐⭐ - 'Huiveringwekkend goed.' - Elena",
                "⭐⭐⭐⭐ - 'Uniek en fascinerend.' - Hugo"
            ]
        },
        18: {
            title: "De Broncode",
            author: "Mark Elsberg",
            publisher: "Meulenhoff",
            year: "2015",
            status: "beschikbaar",
            image: "images/de-broncode.jpg",
            description: "Een hypermoderne technothriller over kunstmatige intelligentie die de controle over kritieke systemen overneemt en de wereld op de rand van de afgrond brengt.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐ - 'Zeer actueel en spannend.' - Julia",
                "⭐⭐⭐⭐⭐ - 'Je wilt niet stoppen met lezen.' - Alex"
            ]
        },
        19: {
            title: "Ik kom hier nog op terug",
            author: "Rob van Essen",
            publisher: "Nijgh & Van Ditmar",
            year: "2024",
            status: "uitgeleend",
            image: "images/ik-kom-hier-nog-op-terug.jpg",
            description: "Een man krijgt de kans om terug te gaan in de tijd en fouten uit zijn studententijd recht te zetten. Maar wat betekent dat voor zijn huidige leven?",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐ - 'Slim en ontroerend.' - Nora",
                "⭐⭐⭐⭐⭐ - 'Heel origineel.' - Bas"
            ]
        },
        20: {
            title: "Schaduw van de Nacht",
            author: "Deborah Harkness",
            publisher: "De Fontein",
            year: "2011",
            status: "beschikbaar",
            image: "images/schaduw-van-de-nacht.jpg",
            description: "Historica Diana Bishop, tevens een onwillige heks, opent een betoverd manuscript en ontwaakt daarmee een eeuwenoude strijd tussen heksen, vampiers en demonen.",
            audio: "",
            reviews: [
                "⭐⭐⭐⭐ - 'Magisch en romantisch.' - Olivia",
                "⭐⭐⭐⭐⭐ - 'Perfecte mix van geschiedenis en fantasy.' - Liam"
            ]
        }
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
