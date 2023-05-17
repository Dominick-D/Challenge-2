function calculateProgress() {
    const startDate = new Date(2023, 2, 12);
    const endDate = new Date(2023, 8, 12); // 6 months later
    const currentDate = new Date();

    const totalTime = endDate - startDate;
    const elapsedTime = currentDate - startDate;

    const percentage = Math.min((elapsedTime / totalTime) * 100, 100);

    return percentage.toFixed(2);
}
function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progressBarTitle = document.getElementById("progress-bar-title");
    if (progressBar) {
        const progress = calculateProgress();
        progressBar.value = progress;
        progressBar.innerText = `${progress}%`;

        // Update progress bar title
        if (progressBarTitle) {
            progressBarTitle.innerText = `Fullstack Bootcamp Progress is at ${progress}%!`;
        }
    }
}

function showFullText() {
    additionalText.classList.remove("is-hidden");
    readMorePlaceholder.classList.add("is-hidden");
    readLessPlaceholder.classList.remove("is-hidden")
}
function showLessText() {
    additionalText.classList.add("is-hidden");
    readLessPlaceholder.classList.add("is-hidden");
    readMorePlaceholder.classList.remove("is-hidden");
}

var additionalText = document.getElementById("additional-text");
var readMoreButton = document.createElement("button");
var readMorePlaceholder = document.getElementById("read-more-placeholder");

readMoreButton.textContent = "Read More";
readMoreButton.classList.add("button", "has-text-centered", "readMoreLessBtn");
readMoreButton.onclick = showFullText;
readMorePlaceholder.appendChild(readMoreButton);

var readLessButton = document.createElement("button");
var readLessPlaceholder = document.getElementById("read-less-placeholder");

readLessButton.textContent = "Show Less";
readLessButton.classList.add("button", "has-text-centered", "readMoreLessBtn");
readLessButton.onclick = showLessText;
readLessPlaceholder.appendChild(readLessButton);


document.addEventListener('DOMContentLoaded', () => {
    // Update the progress bar on the About Me page
    updateProgressBar();
});

