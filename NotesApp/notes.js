showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", (e) => {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach((element, index) => {
    html += `<div class=" noteCard card my-2 mx-2" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text" id="cardTxt">${element}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-danger">Delete Note</button>
          </div>
        </div>`;
  });
  let notesElem = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElem.innerHTML = html;
  } else {
    notesElem.innerHTML = "Please Add a Note to see your Notes";
  }
}

function deleteNote(index) {
  //   console.log("deleting", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

let search = document.getElementById("search");
search.addEventListener("input", function () {
  let searchVal = search.value.toLowerCase();
  let noteCard = document.getElementsByClassName("noteCard");
  Array.from(noteCard).forEach(function (element) {
    let cardTxt = document.getElementById("cardTxt").innerText;
    if (cardTxt.includes(searchVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
