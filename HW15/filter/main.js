const canvas = document.getElementById('canvas');
const img = document.querySelector('img');
const ctx = canvas.getContext('2d');

function readFile(file) {
  const reader = new FileReader();
  reader.onload = function() {
    div.innerHTML = this.result;
    img.src = this.result;
  }
  reader.readAsDataURL(file);
}

img.addEventListener('dragenter', function() {
  div.style.borderColor = "green";
});

img.addEventListener('dragleave', function() {
  div.style.removeProperty('border-color');
});

div.addEventListener('dragover', function(e) {
  e.preventDefault();
});

img.addEventListener('drop', function(e) {
  e.preventDefault();
  readFile(e.dataTransfer.files[0]);
  div.style.removeProperty('border-color');
});
