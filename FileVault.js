const fileInput = document.getElementById("fileInput");
const searchInput = document.getElementById("searchInput");
const fileList = document.getElementById("fileList");

// When user uploads files
fileInput.addEventListener("change", function() {
  fileList.innerHTML = ""; // clear old list
    const files = Array.from(fileInput.files);
    
    
    files.forEach(file => {
    const li = document.createElement("li");
    li.textContent = file.name;
    fileList.appendChild(li);
});
});

// Search filter
searchInput.addEventListener("keyup", function() {
    const filter = searchInput.value.toLowerCase();
    const items = fileList.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
    let fileName = items[i].textContent.toLowerCase();
    items[i].style.display = fileName.includes(filter) ? "" : "none";
}
});
