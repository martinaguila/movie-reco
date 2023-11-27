document.addEventListener("DOMContentLoaded", function() {
    // Create an array
    const movieListArray = [
        {
            "title": "Mad Max: Fury Road",
            "genre": ["Action", "Adventure"],
            "date": "2015",
            "actors": ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
            "popularity": "High",
            "duration": "120",
            "scores": "8.1",
            "language": "English",
            "awards": ["Best Production Design", "Best Editing"],
            "rated": "R",
            "logo": "assets/movies/madmax.jpg"
        },
        {
            "title": "The Dark Knight",
            "genre": ["Action", "Crime", "Drama"],
            "date": "2008",
            "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
            "popularity": "Very High",
            "duration": "120",
            "scores": "9.0",
            "language": "English",
            "awards": ["Best Supporting Actor"],
            "rated": "PG-13",
            "logo": "assets/movies/batman.jpg"
        },
        {
            "title": "Die Hard",
            "genre": ["Action", "Thriller"],
            "date": "1988",
            "actors": ["Bruce Willis", "Alan Rickman", "Bonnie Bedelia"],
            "popularity": "Very High",
            "duration": "132",
            "scores": "8.2",
            "language": "English",
            "awards": [],
            "rated": "R",
            "logo": "assets/movies/diehard.jpg"
        },
        {
            "title": "Kill Bill: Vol. 1",
            "genre": ["Action", "Thriller", "Crime"],
            "date": "2003",
            "actors": ["Uma Thurman", "Lucy Liu", "Vivica A. Fox"],
            "popularity": "High",
            "duration": "111",
            "scores": "8.1",
            "language": "English",
            "awards": [],
            "rated": "R",
            "logo": "assets/movies/kill.jpg"
        },
        {
            "title": "Gladiator",
            "genre": ["Action", "Drama"],
            "date": "2000",
            "actors": ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
            "popularity": "Very High",
            "duration": "155",
            "scores": "8.5",
            "language": "English",
            "awards": ["Best Picture", "Best Actor"],
            "rated": "R",
            "logo": "assets/movies/gladiator.jpg"
        },
        {
            "title": "John Wick",
            "genre": ["Action", "Crime", "Thriller"],
            "date": "2014",
            "actors": ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"],
            "popularity": "High",
            "duration": "155",
            "scores": "7.4",
            "language": "English",
            "awards": [],
            "rated": "R",
            "logo": "assets/movies/wick.jpg"
        },
        {
            "title": "Inception",
            "genre": ["Action", "Adventure", "Sci-Fi"],
            "date": "2010",
            "actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
            "popularity": "Very High",
            "duration": "168",
            "scores": "8.8",
            "language": "English",
            "awards": ["Best Cinematography", "Best Visual Effects"],
            "rated": "PG-13",
            "logo": "assets/movies/inception.jpg"
        },
        {
            "title": "The Matrix",
            "genre": ["Action", "Sci-Fi"],
            "date": "1999",
            "actors": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
            "popularity": "Very High",
            "duration": "136",
            "scores": "8.7",
            "language": "English",
            "awards": ["Best Film Editing", "Best Sound", "Best Sound Effects Editing", "Best Visual Effects"],
            "rated": "R",
            "logo": "assets/movies/matrix.jpg"
        },
        {
            "title": "Léon: The Professional",
            "genre": ["Action", "Crime", "Drama"],
            "date": "1994",
            "actors": ["Jean Reno", "Gary Oldman", "Natalie Portman"],
            "popularity": "High",
            "duration": "110",
            "scores": "8.5",
            "language": "English",
            "awards": [],
            "rated": "R",
            "logo": "assets/movies/professional.jpg"
        },
        {
            "title": "The Bourne Identity",
            "genre": ["Action", "Mystery", "Thriller"],
            "date": "2002",
            "actors": ["Matt Damon", "Franka Potente", "Chris Cooper"],
            "popularity": "High",
            "duration": "119",
            "scores": "7.9",
            "language": "English",
            "awards": [],
            "rated": "PG-13",
            "logo": "assets/movies/bourne.jpg"
        },
        {
            "title": "Eternal Sunshine of the Spotless Mind",
            "genre": ["Drama", "Romance", "Sci-Fi"],
            "date": "2004",
            "actors": ["Jim Carrey", "Kate Winslet"],
            "popularity": "Moderate",
            "duration": "108",
            "scores": "8.3",
            "language": "English",
            "awards": ["Best Original Screenplay"],
            "rated": "R",
            "logo": "assets/movies/eternalsunshine.jpg"
        },
        {
            "title": "La La Land",
            "genre": ["Drama", "Romance", "Music"],
            "date": "2016",
            "actors": ["Ryan Gosling", "Emma Stone"],
            "popularity": "High",
            "duration": "128",
            "scores": "8.0",
            "language": "English",
            "awards": ["Best Director"],
            "rated": "PG-13",
            "logo": "assets/movies/lalaland.jpg"
        },
        {
            "title": "Pride and Prejudice",
            "genre": ["Drama", "Romance"],
            "date": "2005",
            "actors": ["Keira Knightley", "Matthew Macfadyen"],
            "popularity": "High",
            "duration": "129",
            "scores": "7.8",
            "language": "English",
            "awards": ["Best Actress in a Leading Role"],
            "rated": "PG-13",
            "logo": "assets/movies/pride.jpg"
        },
        {
            "title": "Brokeback Mountain",
            "genre": ["Drama", "Romance"],
            "date": "2005",
            "actors": ["Heath Ledger", "Jake Gyllenhaal"],
            "popularity": "Moderate",
            "duration": "134",
            "scores": "7.7",
            "language": "English",
            "awards": ["Best Director"],
            "rated": "R",
            "logo": "assets/movies/brokeback.jpg"
        },
        {
            "title": "The Shining",
            "genre": ["Drama", "Horror"],
            "date": "1980",
            "actors": ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"],
            "popularity": "Very High",
            "duration": "146",
            "scores": "8.4",
            "language": "English",
            "awards": [],
            "rated": "R",
            "logo": "assets/movies/shining.jpg"
        },
        {
            "title": "Get Out",
            "genre": ["Mystery", "Horror", "Thriller"],
            "date": "2017",
            "actors": ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"],
            "popularity": "Very High",
            "duration": "104",
            "scores": "7.7",
            "language": "English",
            "awards": ["Best Original Screenplay"],
            "rated": "R",
            "logo": "assets/movies/getout.jpg"
        },
        {
            "title": "Hereditary",
            "genre": ["Mystery", "Horror", "Drama"],
            "date": "2018",
            "actors": ["Toni Collette", "Milly Shapiro", "Alex Wolff"],
            "popularity": "High",
            "duration": "127",
            "scores": "7.7",
            "language": "English",
            "awards": [],
            "rated": "R",
            "logo": "assets/movies/hereditary.jpg"
        },
        {
            "title": "A Nightmare on Elm Street",
            "genre": ["Horror"],
            "date": "1984",
            "actors": ["Heather Langenkamp", "Johnny Depp", "Robert Englund"],
            "popularity": "High",
            "duration": "91",
            "scores": "7.5",
            "language": "English",
            "awards": [],
            "rated": "R",
            "logo": "assets/movies/elm.jpg"
        },
        {
            "title": "The Exorcist",
            "genre": ["Horror"],
            "date": "1973",
            "actors": ["Ellen Burstyn", "Max von Sydow", "Linda Blair"],
            "popularity": "High",
            "duration": "122",
            "scores": "8.0",
            "language": "English",
            "awards": ["Best Adapted Screenplay", "Best Sound Mixing"],
            "rated": "R",
            "logo": "assets/movies/exorcist.jpg"
        },
        {
            "title": "Psycho",
            "genre": ["Horror", "Mystery", "Thriller"],
            "date": "1960",
            "actors": ["Anthony Perkins", "Janet Leigh", "Vera Miles"],
            "popularity": "High",
            "duration": "109",
            "scores": "8.5",
            "language": "English",
            "awards": [],
            "rated": "R",
            "logo": "assets/movies/psycho.jpg"
        },
        {
            "title": "It",
            "genre": ["Horror"],
            "date": "2017",
            "actors": ["Bill Skarsgård", "Jaeden Martell", "Finn Wolfhard"],
            "popularity": "Very High",
            "duration": "109",
            "scores": "7.3",
            "language": "English",
            "awards": [],
            "rated": "R",
            "logo": "assets/movies/it.jpg"
        },
        {
            "title": "Saw",
            "genre": ["Horror", "Mystery", "Thriller"],
            "date": "2017",
            "actors": ["Cary Elwes", "Leigh Whannell", "Danny Glover"],
            "popularity": "High",
            "duration": "109",
            "scores": "7.6",
            "language": "English",
            "awards": [],
            "rated": "R",
            "logo": "assets/movies/saw.jpg"
        },
        {
            "title": "The Conjuring",
            "genre": ["Horror", "Mystery", "Thriller"],
            "date": "2013",
            "actors": ["Vera Farmiga", "Patrick Wilson", "Lili Taylor"],
            "popularity": "Very High",
            "duration": "112",
            "scores": "7.5",
            "language": "English",
            "awards": [],
            "rated": "R",
            "logo": "assets/movies/conjuring.jpg"
        },
        {
            "title": "Halloween",
            "genre": ["Horror", "Thriller"],
            "date": "1978",
            "actors": ["Donald Pleasence", "Jamie Lee Curtis", "Tony Moran"],
            "popularity": "High",
            "duration": "91",
            "scores": "7.8",
            "language": "English",
            "awards": [],
            "rated": "R",
            "logo": "assets/movies/halloween.jpg"
        },
        {
            "title": "Toy Story",
            "genre": ["Animation", "Family", "Adventure"],
            "date": "1995",
            "actors": ["Tom Hanks", "Tim Allen", "Don Rickles"],
            "popularity": "Very High",
            "duration": "81",
            "scores": "8.3",
            "language": "English",
            "awards": ["Special Achievement Award"],
            "rated": "G",
            "logo": "assets/movies/toy.jpg"
        },
        {
            "title": "Frozen",
            "genre": ["Animation", "Family", "Adventure"],
            "date": "2013",
            "actors": ["Kristen Bell", "Idina Menzel", "Josh Gad"],
            "popularity": "Extremely High",
            "duration": "102",
            "scores": "7.4",
            "language": "English",
            "awards": ["Best Animated Feature"],
            "rated": "PG",
            "logo": "assets/movies/frozen.jpg"
        },
        {
            "title": "The Lion King",
            "genre": ["Animation", "Drama", "Adventure"],
            "date": "1994",
            "actors": ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
            "popularity": "Very High",
            "duration": "88",
            "scores": "8.5",
            "language": "English",
            "awards": ["Best Original Score"],
            "rated": "G",
            "logo": "assets/movies/lionking.jpg"
        },
        {
            "title": "Finding Nemo",
            "genre": ["Animation", "Comedy", "Adventure"],
            "date": "2003",
            "actors": ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
            "popularity": "Very High",
            "duration": "100",
            "scores": "8.1",
            "language": "English",
            "awards": ["Best Animated Feature"],
            "rated": "G",
            "logo": "assets/movies/nemo.jpg"
        },
        {
            "title": "Moana",
            "genre": ["Animation", "Comedy", "Adventure"],
            "date": "2016",
            "actors": ["Auli'i Cravalho", "Dwayne Johnson", "Rachel House"],
            "popularity": "High",
            "duration": "107",
            "scores": "7.6",
            "language": "English",
            "awards": [],
            "rated": "PG",
            "logo": "assets/movies/moana.jpg"
        },
        {
            "title": "Zootopia",
            "genre": ["Animation", "Comedy", "Adventure"],
            "date": "2016",
            "actors": ["Ginnifer Goodwin", "Jason Bateman", "Idris Elba"],
            "popularity": "High",
            "duration": "108",
            "scores": "8.0",
            "language": "English",
            "awards": ["Best Animated Feature"],
            "rated": "PG",
            "logo": "assets/movies/zootopia.jpg"
        },
        {
            "title": "Despicable Me",
            "genre": ["Animation", "Comedy", "Adventure"],
            "date": "2010",
            "actors": ["Steve Carell", "Jason Segel", "Russell Brand"],
            "popularity": "High",
            "duration": "95",
            "scores": "7.6",
            "language": "English",
            "awards": [],
            "rated": "PG",
            "logo": "assets/movies/despicable.jpg"
        },
        {
            "title": "Coco",
            "genre": ["Animation", "Comedy", "Adventure"],
            "date": "2017",
            "actors": ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"],
            "popularity": "Very High",
            "duration": "105",
            "scores": "8.4",
            "language": "English",
            "awards": ["Best Animated Feature"],
            "rated": "PG",
            "logo": "assets/movies/coco.jpg"
        },
        {
            "title": "Shrek",
            "genre": ["Animation", "Comedy", "Adventure"],
            "date": "2001",
            "actors": ["Mike Myers", "Eddie Murphy", "Cameron Diaz"],
            "popularity": "Very High",
            "duration": "90",
            "scores": "7.8",
            "language": "English",
            "awards": ["Best Animated Feature"],
            "rated": "PG",
            "logo": "assets/movies/shrek.jpg"
        },
        {
            "title": "Paddington",
            "genre": ["Animation", "Comedy", "Adventure"],
            "date": "2015",
            "actors": ["Hugh Bonneville", "Sally Hawkins", "Ben Whishaw"],
            "popularity": "High",
            "duration": "95",
            "scores": "7.2",
            "language": "English",
            "awards": [],
            "rated": "PG",
            "logo": "assets/movies/paddington.jpg"
        }
    ]

    const genresArray = [
        "Action",
        "Adventure",
        "Crime",
        "Drama",
        "Thriller",
        "Sci-Fi",
        "Mystery",
        "Romance",
        "Music",
        "Horror",
        "Animation",
        "Family",
        "Comedy"
    ];

    const directorArray = [
        "Director I",
        "Director II",
        "Director III",
        "Director IV"
    ];

    const actorsArray = [
        "Tom Hardy",
        "Charlize Theron",
        "Nicholas Hoult",
        "Christian Bale",
        "Heath Ledger",
        "Aaron Eckhart",
        "Bruce Willis",
        "Alan Rickman",
        "Bonnie Bedelia",
        "Uma Thurman",
        "Lucy Liu",
        "Vivica A. Fox",
        "Russell Crowe",
        "Joaquin Phoenix",
        "Connie Nielsen",
        "Keanu Reeves",
        "Michael Nyqvist",
        "Alfie Allen",
        "Leonardo DiCaprio",
        "Joseph Gordon-Levitt",
        "Ellen Page",
        "Laurence Fishburne",
        "Carrie-Anne Moss",
        "Jean Reno",
        "Gary Oldman",
        "Natalie Portman",
        "Matt Damon",
        "Franka Potente",
        "Chris Cooper",
        "Jim Carrey",
        "Kate Winslet",
        "Ryan Gosling",
        "Emma Stone",
        "Keira Knightley",
        "Matthew Macfadyen",
        "Jake Gyllenhaal",
        "Jack Nicholson",
        "Shelley Duvall",
        "Danny Lloyd",
        "Daniel Kaluuya",
        "Allison Williams",
        "Bradley Whitford",
        "Toni Collette",
        "Milly Shapiro",
        "Alex Wolff",
        "Heather Langenkamp",
        "Johnny Depp",
        "Robert Englund",
        "Ellen Burstyn",
        "Max von Sydow",
        "Linda Blair",
        "Anthony Perkins",
        "Janet Leigh",
        "Vera Miles",
        "Bill Skarsgård",
        "Jaeden Martell",
        "Finn Wolfhard",
        "Cary Elwes",
        "Leigh Whannell",
        "Danny Glover",
        "Vera Farmiga",
        "Patrick Wilson",
        "Lili Taylor",
        "Donald Pleasence",
        "Jamie Lee Curtis",
        "Tony Moran",
        "Tom Hanks",
        "Tim Allen",
        "Don Rickles",
        "Kristen Bell",
        "Idina Menzel",
        "Josh Gad",
        "Matthew Broderick",
        "Jeremy Irons",
        "James Earl Jones",
        "Albert Brooks",
        "Ellen DeGeneres",
        "Alexander Gould",
        "Auli'i Cravalho",
        "Dwayne Johnson",
        "Rachel House",
        "Ginnifer Goodwin",
        "Jason Bateman",
        "Idris Elba",
        "Steve Carell",
        "Jason Segel",
        "Russell Brand",
        "Anthony Gonzalez",
        "Gael García Bernal",
        "Benjamin Bratt",
        "Mike Myers",
        "Eddie Murphy",
        "Cameron Diaz",
        "Hugh Bonneville",
        "Sally Hawkins",
        "Ben Whishaw"
    ];

    const popularityArray = [
        "",
        "Moderate",
        "High",
        "Very High",
        "Extremely High"
    ];

    const durationArray = [
        "",
        "80",
        "90",
        "100",
        "110",
        "120",
        "130",
        "140"
    ];

    const reviewArray = [
        "",
        7.0,
        8.0,
        9.0
    ];

    const languageArray = [
        "English"
    ];

    const awardArray = [
        "Best Production Design",
        "Best Editing",
        "Best Supporting Actor",
        "Best Picture",
        "Best Actor",
        "Best Cinematography",
        "Best Visual Effects",
        "Best Film Editing",
        "Best Sound",
        "Best Sound Effects Editing",
        "Best Original Screenplay",
        "Best Director",
        "Best Actress in a Leading Role",
        "Best Adapted Screenplay",
        "Best Sound Mixing",
        "Special Achievement Award",
        "Best Animated Feature",
        "Best Original Score"
    ];

    const ratedArray = [
        "",
        "G",
        "PG-13",
        "PG",
        "R"
    ];

    const releasedYearArray = [
        "",
        "1970s",
        "1980s",
        "1990s",
        "2000s",
        "2010s"
    ];

    // Get a reference to the select element
    const genreSelect = document.getElementById("genre");
    const directorSelect = document.getElementById("director");
    const actorSelect = document.getElementById("actor");
    const popularitySelect = document.getElementById("popularity");
    const durationSelect = document.getElementById("duration");
    const reviewSelect = document.getElementById("review");
    const languageSelect = document.getElementById("language");
    const awardSelect = document.getElementById("award");
    const ratedSelect = document.getElementById("rated");
    const yearSelect = document.getElementById("releasedYear");


    // Populate the select element with options
    genresArray.forEach(genre => {
        const option = document.createElement("option");
        option.value = genre.toLowerCase();
        option.text = genre;
        genreSelect.appendChild(option);
    });

    // directorArray.forEach(director => {
    //     const option = document.createElement("option");
    //     option.value = director.toLowerCase();
    //     option.text = director;
    //     directorSelect.appendChild(option);
    // });

    actorsArray.forEach(actor => {
        const option = document.createElement("option");
        option.value = actor.toLowerCase();
        option.text = actor;
        actorSelect.appendChild(option);
    });

    durationArray.forEach(duration => {
        const option = document.createElement("option");
        option.value = duration.toLowerCase();
        option.text = duration;
        durationSelect.appendChild(option);
    });

    popularityArray.forEach(popularity => {
        const option = document.createElement("option");
        option.value = popularity.toLowerCase();
        option.text = popularity;
        popularitySelect.appendChild(option);
    });

    reviewArray.forEach(review => {
        const option = document.createElement("option");
        option.value = review;
        option.text = review;
        reviewSelect.appendChild(option);
    });

    languageArray.forEach(language => {
        const option = document.createElement("option");
        option.value = language.toLowerCase();
        option.text = language;
        languageSelect.appendChild(option);
    });

    awardArray.forEach(award => {
        const option = document.createElement("option");
        option.value = award.toLowerCase();
        option.text = award;
        awardSelect.appendChild(option);
    });

    ratedArray.forEach(award => {
        const option = document.createElement("option");
        option.value = award.toLowerCase();
        option.text = award;
        ratedSelect.appendChild(option);
    });

    releasedYearArray.forEach(year => {
        const option = document.createElement("option");
        option.value = year.toLowerCase();
        option.text = year;
        yearSelect.appendChild(option);
    });

    // JavaScript to show/hide the select element when the "Show Options" button is clicked
    const showSelectedButton = document.getElementById("showSelectedGenres");
    const showOptionsButton = document.getElementById("showGenreOptions");
    const showSelectedButtonActor = document.getElementById("showSelectedActors");
    const showOptionsButtonActor = document.getElementById("showActorsOptions");
    const showOptionsButtonAward = document.getElementById("showAwardsOptions");
    const showSelectedButtonAward = document.getElementById("showSelectedAwards");
    const darkOverlay = document.getElementById("darkOverlay");

    // GENRES BUTTON
    showOptionsButton.addEventListener("click", function() {
        darkOverlay.style.display = "block"; // Show the dark overlay
        genreSelect.style.display = "block"; // Display the select element
    });

    // ACTORS BUTTON
    showOptionsButtonActor.addEventListener("click", function() {
        darkOverlay.style.display = "block"; // Show the dark overlay
        actorSelect.style.display = "block"; // Display the select element
    });

    // ACTORS BUTTON
    showOptionsButtonAward.addEventListener("click", function() {
        darkOverlay.style.display = "block"; // Show the dark overlay
        awardSelect.style.display = "block"; // Display the select element
    });

    // JavaScript to handle the selection and display selected items separated by commas
    const selectedGenresList = document.getElementById("selectedGenresList");
    const selectedActorsList = document.getElementById("selectedActorsList");
    const selectedAwardsList = document.getElementById("selectedAwardsList");

    // GENRES SELECTED BUTTON
    showSelectedButton.addEventListener("click", function() {
        const selectedItems = Array.from(genreSelect.selectedOptions).map(option => option.text);
        const selectedText = selectedItems.join(', ');

        selectedGenresList.textContent = selectedText;
    });

    // ACTORS SELECTED BUTTON
    showSelectedButtonActor.addEventListener("click", function() {
        const selectedItems = Array.from(actorSelect.selectedOptions).map(option => option.text);
        const selectedText = selectedItems.join(', ');

        selectedActorsList.textContent = selectedText;
    });

    // AWARD SELECTED BUTTON
    showSelectedButtonAward.addEventListener("click", function() {
        const selectedItems = Array.from(awardSelect.selectedOptions).map(option => option.text);
        const selectedText = selectedItems.join(', ');

        selectedAwardsList.textContent = selectedText;
    });

    // Listen for Enter key press to display selected options and hide the dropdown
    // GENRE ENTER KEY
    genreSelect.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            darkOverlay.style.display = "none"; // Hide the dark overlay
            genreSelect.style.display = "none";
            showSelectedButton.click(); // Simulate a click on the button
        }
    });

    // ACTOR ENTER KEY
    actorSelect.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            darkOverlay.style.display = "none"; // Hide the dark overlay
            actorSelect.style.display = "none";
            showSelectedButtonActor.click(); // Simulate a click on the button
        }
    });

    // AWARD ENTER KEY
    awardSelect.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            darkOverlay.style.display = "none"; // Hide the dark overlay
            awardSelect.style.display = "none";
            showSelectedButtonAward.click(); // Simulate a click on the button
        }
    });

    // Get references to the modal and the close button
    // const modal = document.getElementById("myModal");
    // const closeModal = document.getElementById("closeModal");

    // // Get a reference to the button that should open the modal
    // const openModalButton = document.getElementById("startBtn"); // Replace "buttonID" with the actual ID of your button

    // // Open the modal when the button is clicked
    // openModalButton.addEventListener("click", function() {
    //     console.log("test")
    //     modal.style.display = "block";
    // });

    // // Close the modal when the close button is clicked
    // closeModal.addEventListener("click", function() {
    //     modal.style.display = "none";
    // });

    // // Close the modal when the overlay (outside the modal) is clicked
    // window.addEventListener("click", function(event) {
    //     if (event.target === modal) {
    //         modal.style.display = "none";
    //     }
    // });

    const clearButton = document.getElementById("clearBtn");

    clearButton.addEventListener("click", function() {
        // Refresh the page
        window.location.reload();
    });

    const startButton = document.getElementById("startBtn");

    startButton.addEventListener("click", function() {
        const selectedGenres = Array.from(genreSelect.selectedOptions).map(option => option.value);
        const selectedActors = Array.from(actorSelect.selectedOptions).map(option => option.value);
        const selectedPopularity = popularitySelect.value;
        const selectedDecade = yearSelect.value;
        const selectedDuration = durationSelect.value;
        const selectedAwards = Array.from(awardSelect.selectedOptions).map(option => option.value);
        const selectedRated = ratedSelect.value;
        const selectedScore = parseFloat(reviewSelect.value);

        // Add similar logic for other criteria (e.g., duration, review scores, language, awards, rated).
        console.log(selectedAwards)

        // Calculate the range of years for the selected decade
        let startYear, endYear;
        switch (selectedDecade) {
            case "1980s":
                startYear = 1980;
                endYear = 1989;
                break;
            case "1990s":
                startYear = 1990;
                endYear = 1999;
                break;
            case "2000s":
                startYear = 2000;
                endYear = 2009;
                break;
            case "2010s":
                startYear = 2010;
                endYear = 2019;
                break;
            default:
                startYear = 1900;
                endYear = 2099;
        }

        // Calculate the range of years for the selected decade
        let startDuration, endDuration;
        switch (selectedDuration) {
            case "80":
                startDuration = 80;
                endDuration = 89;
                break;
            case "90":
                startDuration = 90;
                endDuration = 99;
                break;
            case "100":
                startDuration = 100;
                endDuration = 109;
                break;
            case "110":
                startDuration = 110;
                endDuration = 119;
                break;
            case "120":
                startDuration = 120;
                endDuration = 129;
                break;
            case "130":
                startDuration = 130;
                endDuration = 139;
                break;
            case "140":
                startDuration = 140;
                endDuration = 149;
                break;
            default:
                startDuration = 70;
                endDuration = 200;
        }

        let startScore, endScore;
        // selectedScore = parseFloat(selectedScore);
        switch (selectedScore) {
            case 7:
                startScore = 7.0;
                endScore = 7.9;
                break;
            case 8:
                startScore = 8.0;
                endScore = 8.1;
                break;
            case 9:
                startScore = 9.0;
                endScore = 9.1;
                break;
            default:
                startScore = 6.0;
                endScore = 10.0;
        }

        // Filter the movieListArray based on selected criteria
        const filteredMovies = movieListArray.filter(movie => {

            // GENRE
            const genreMatch = selectedGenres.every(selectedGenre => {
                // Convert both strings to lowercase and trim any leading/trailing whitespace
                const movieGenres = movie.genre.map(genre => genre.toLowerCase().trim());
                return movieGenres.includes(selectedGenre.toLowerCase().trim());
            });

            // ACTOR
            const actorsMatch = selectedActors.every(selectedActors => {
                // Convert both strings to lowercase and trim any leading/trailing whitespace
                const movieActors = movie.actors.map(actors => actors.toLowerCase().trim());
                return movieActors.includes(selectedActors.toLowerCase().trim());
            });
            
            // YEAR RELEASED
            const yearMatch = parseInt(movie.date) >= startYear && parseInt(movie.date) <= endYear;

            // Duration
            const durationMatch = parseInt(movie.duration) >= startDuration && parseInt(movie.duration) <= endDuration;

            // POPULARITY
            let popularityMatch;
            if (selectedPopularity === ''){
                popularityMatch = true
            }else{
                popularityMatch = movie.popularity.toLowerCase().trim() === selectedPopularity.toLowerCase().trim()
            }

            // AWARDS
            const awardMatch = selectedAwards.every(selectedAward => {
                // Convert both strings to lowercase and trim any leading/trailing whitespace
                const movieAwards = movie.awards.map(award => award.toLowerCase().trim());
                // console.log(movieAwards, selectedAward)
                return movieAwards.includes(selectedAward.toLowerCase().trim());
            });

            // RATED
            let ratedMatch;
            if (selectedRated === ''){
                ratedMatch = true
            }else{
                ratedMatch = movie.rated.toLowerCase().trim() === selectedRated.toLowerCase().trim()
            }
            console.log(parseFloat(movie.scores), startScore, endScore)
            // RATED SCORE
            const scoreMatch = parseFloat(movie.scores) >= startScore && parseFloat(movie.scores) <= endScore;
            console.log(scoreMatch)
            return genreMatch && yearMatch && durationMatch && actorsMatch && popularityMatch && 
                awardMatch && ratedMatch && scoreMatch;
        });
        console.log(filteredMovies)

        const movieList = document.getElementById("movieList");
        movieList.innerHTML = '';

        if (filteredMovies.length === 0) {
            // If no results found, display a message
            const noResultMessage = document.createElement("div");
            noResultMessage.className = "col-12 text-center";
            noResultMessage.textContent = "No results found.";
    
            movieList.appendChild(noResultMessage);
        }else{
            filteredMovies.forEach(movie => {
                const movieElement = document.createElement("div");
                movieElement.className = "col-md-2";
                // movieElement.className = "movie";
    
                movieElement.innerHTML = `
                <img src="${movie.logo}" alt="${movie.title} Logo style="height: 150px; width: 100px; margin-bottom: 10px border-radius: 3px" class="img-fluid">
                <div class="movie-title" style="font-weight: bold;">${movie.title}</div>
                <div class="movie-info">${movie.genre.join(', ')} | ${movie.date}</div>
                <div class="movie-info">${movie.duration} min | ${movie.rated}</div>
                <div class="movie-scores">${movie.scores}</div>
                `;
    
                movieList.appendChild(movieElement);
            });
        }

        

        // // Display the filtered movies in the modal
        // const modalContent = document.querySelector(".modal-content");
        // const movieListContainer = modalContent.querySelector(".movie-list-container");
        // // Clear any previous movie list content
        // movieListContainer.innerHTML = '';

        // if (filteredMovies.length > 0) {
        //     filteredMovies.forEach((movie, index) => {
        //         const movieDetails = document.createElement("div");
        //         movieDetails.classList.add("movie-details");
        
        //         const titleElement = document.createElement("div");
        //         titleElement.innerHTML = '<span class="bold-text">Title:</span> ' + movie.title;
        //         movieDetails.appendChild(titleElement);
        
        //         const genreElement = document.createElement("div");
        //         genreElement.innerHTML = '<span class="bold-text">Genre:</span> ' + movie.genre.join(", ");
        //         movieDetails.appendChild(genreElement);

        //         const dateElement = document.createElement("div");
        //         dateElement.innerHTML = '<span class="bold-text">Year released:</span> ' + movie.date;
        //         movieDetails.appendChild(dateElement);

        //         const actorsElement = document.createElement("div");
        //         actorsElement.innerHTML = '<span class="bold-text">Actors:</span> ' + movie.actors.join(", ");
        //         movieDetails.appendChild(actorsElement);

        //         const popularityElement = document.createElement("div");
        //         popularityElement.innerHTML = '<span class="bold-text">Popularity:</span> ' + movie.popularity;
        //         movieDetails.appendChild(popularityElement);

        //         const durationElement = document.createElement("div");
        //         durationElement.innerHTML = '<span class="bold-text">Duration:</span> ' + movie.duration + ' minutes';
        //         movieDetails.appendChild(durationElement);

        //         const scoresElement = document.createElement("div");
        //         scoresElement.innerHTML = '<span class="bold-text">Audience score:</span> ' + movie.scores;
        //         movieDetails.appendChild(scoresElement);

        //         const languageElement = document.createElement("div");
        //         languageElement.innerHTML = '<span class="bold-text">Language:</span> ' + movie.language;
        //         movieDetails.appendChild(languageElement);

        //         const awardsElement = document.createElement("div");
        //         awardsElement.innerHTML = movie.awards.length > 0 ? '<span class="bold-text">Awards:</span> ' + movie.awards.join(", ") : '<span class="bold-text">Awards:</span> <span class="italic-text">None</span>';
        //         movieDetails.appendChild(awardsElement);

        //         const rateElement = document.createElement("div");
        //         rateElement.innerHTML = '<span class="bold-text">Rate:</span> ' + movie.rated;
        //         movieDetails.appendChild(rateElement);
        
        //         movieListContainer.appendChild(movieDetails);
        
        //         // Add a horizontal line or spacing after each group of movies
        //         if (index < filteredMovies.length - 1) {
        //             const spacer = document.createElement("hr"); // You can use hr or other elements for spacing
        //             movieListContainer.appendChild(spacer);
        //         }
        //     });
        // } else {
        //     // Handle the case when no matching movies are found
        //     const noMatchElement = document.createElement("p");
        //     noMatchElement.textContent = "No matching movies found.";
        //     movieListContainer.appendChild(noMatchElement);
        // }

        // // Show the modal
        // modal.style.display = "block";
    });

    // ACTORS
    // // Create an empty array to store unique actors
    // const uniqueActors = [];

    // // Loop through each movie object in the array
    // movieListArray.forEach(movie => {
    // // Loop through the actors of each movie
    //     movie.actors.forEach(actor => {
    //         // Check if the actor is not already in the uniqueActors array
    //         if (!uniqueActors.includes(actor)) {
    //         // Add the actor to the uniqueActors array
    //         uniqueActors.push(actor);
    //         }
    //     });
    // });

    // // uniqueActors now contains all the unique actors from the movieListArray
    // console.log(uniqueActors);

    // // GENRE
    // // Create an empty array to store all unique genres
    // const uniqueGenres = [];

    // // Loop through each movie object in the array
    // movieListArray.forEach(movie => {
    // // Loop through the genres of each movie
    // movie.genre.forEach(genre => {
    //     // Check if the genre is not already in the uniqueGenres array
    //     if (!uniqueGenres.includes(genre)) {
    //     // Add the genre to the uniqueGenres array
    //     uniqueGenres.push(genre);
    //     }
    // });
    // });

    // // uniqueGenres now contains all the unique genres from the movieListArray
    // console.log(uniqueGenres);

    // // AWARDS
    // // Create an empty array to store all unique awards
    // const uniqueAwards = [];

    // // Loop through each movie object in the array
    // movieListArray.forEach(movie => {
    // // Loop through the awards of each movie
    // movie.awards.forEach(award => {
    //     // Check if the award is not already in the uniqueAwards array
    //     if (!uniqueAwards.includes(award)) {
    //     // Add the award to the uniqueAwards array
    //     uniqueAwards.push(award);
    //     }
    // });
    // });

    // // uniqueAwards now contains all the unique awards from the movieListArray
    // console.log(uniqueAwards);

    // // RATED SYSTEM
    // // Create an empty array to store all unique ratings
    // const uniqueRatings = [];

    // // Loop through each movie object in the array
    // movieListArray.forEach(movie => {
    // // Get the rated value of each movie
    // const rated = movie.rated;

    // // Check if the rated value is not already in the uniqueRatings array
    // if (!uniqueRatings.includes(rated)) {
    //     // Add the rated value to the uniqueRatings array
    //     uniqueRatings.push(rated);
    // }
    // });

    // // uniqueRatings now contains all the unique ratings from the movieListArray
    // console.log(uniqueRatings);

    // // POPULARITY
    // // Create an empty array to store all unique popularity levels
    // const uniquePopularityLevels = [];
    
    // // Loop through each movie object in the array
    // movieListArray.forEach(movie => {
    // // Get the popularity level of each movie
    // const popularity = movie.popularity;
    
    // // Check if the popularity level is not already in the uniquePopularityLevels array
    // if (!uniquePopularityLevels.includes(popularity)) {
    //     // Add the popularity level to the uniquePopularityLevels array
    //     uniquePopularityLevels.push(popularity);
    // }
    // });
    
    // // uniquePopularityLevels now contains all the unique popularity levels from the movieListArray
    // console.log(uniquePopularityLevels);


    // // Create an empty array to store all unique durations
    // const uniqueDurations = [];
    
    // // Loop through each movie object in the array
    // movieListArray.forEach(movie => {
    // // Get the duration of each movie
    // const duration = movie.duration;
    
    // // Check if the duration is not already in the uniqueDurations array
    // if (!uniqueDurations.includes(duration)) {
    //     // Add the duration to the uniqueDurations array
    //     uniqueDurations.push(duration);
    // }
    // });
    
    // // uniqueDurations now contains all the unique durations from the movieListArray
    // console.log(uniqueDurations);

    // // REVIEW
    // // Create an empty array to store all unique review scores
    // const uniqueReviewScores = [];
    
    // // Loop through each movie object in the array
    // movieListArray.forEach(movie => {
    // // Get the review score of each movie
    // const reviewScore = movie.scores;
    
    // // Check if the review score is not already in the uniqueReviewScores array
    // if (!uniqueReviewScores.includes(reviewScore)) {
    //     // Add the review score to the uniqueReviewScores array
    //     uniqueReviewScores.push(reviewScore);
    // }
    // });
    
    // // uniqueReviewScores now contains all the unique review scores from the movieListArray
    // console.log(uniqueReviewScores);
      
      
});
