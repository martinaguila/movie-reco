document.addEventListener("DOMContentLoaded", function() {
    // Create an array
    const genresArray = [
        "Adventure",
        "Comedy",
        "Horror",
        "Drama"
    ];

    const directorArray = [
        "Director I",
        "Director II",
        "Director III",
        "Director IV"
    ];

    const actorsArray = [
        "Actor I",
        "Actor II",
        "Actor III",
        "Actor IV"
    ];

    const popularityArray = [
        "80",
        "85",
        "90",
        "95",
        "100"
    ];

    const durationArray = [
        "100",
        "120",
        "130",
        "140",
        "150"
    ];

    const reviewArray = [
        "4.0",
        "4.2",
        "4.4",
        "4.6",
        "4.8",
        "5.0"
    ];

    const languageArray = [
        "English",
        "Filipino"
    ];

    const awardArray = [
        "Best in Comedy",
        "Best in Romance",
        "Best in Horror",
        "Best in Drama"
    ];

    const ratedArray = [
        "PG-13",
        "PG",
        "GP"
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

    // Populate the select element with options
    genresArray.forEach(genre => {
        const option = document.createElement("option");
        option.value = genre.toLowerCase();
        option.text = genre;
        genreSelect.appendChild(option);
    });

    directorArray.forEach(director => {
        const option = document.createElement("option");
        option.value = director.toLowerCase();
        option.text = director;
        directorSelect.appendChild(option);
    });

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
        option.value = review.toLowerCase();
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
    const modal = document.getElementById("myModal");
    const closeModal = document.getElementById("closeModal");

    // Get a reference to the button that should open the modal
    const openModalButton = document.getElementById("startBtn"); // Replace "buttonID" with the actual ID of your button

    // Open the modal when the button is clicked
    openModalButton.addEventListener("click", function() {
        console.log("test")
        modal.style.display = "block";
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close the modal when the overlay (outside the modal) is clicked
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
