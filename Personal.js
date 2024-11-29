document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("guestBookForm");
    const entriesContainer = document.getElementById("entriesContainer");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const comments = document.getElementById("comments").value.trim();
        const rating = document.getElementById("rating").value;

        if (!name|| !comments || !rating) {
            alert("Please fill out all fields!");
            return;
        }
        const entry = document.createElement("div");
        entry.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Comments:</strong> ${comments}</p>
            <p><strong>Rating:</strong> ${rating}</p>
            <hr>
        `;
        entriesContainer.appendChild(entry);
        form.reset();
    });
});