let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
    const list = document.getElementById("notesList");
    list.innerHTML = "";

    notes.forEach((note, index) => {
        list.innerHTML += `<li onclick="deleteNote(${index})">${note}</li>`;
    });
}

function addNote() {
    const input = document.getElementById("noteInput");

    if (input.value.trim() === "") return;

    notes.push(input.value);
    localStorage.setItem("notes", JSON.stringify(notes));

    input.value = "";
    displayNotes();
}

function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}

displayNotes();
