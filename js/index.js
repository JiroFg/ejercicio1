function generateHash() {
  const text = document.getElementById("inputText").value;
  var hash = sha256.create();
  hash.update(text);
  //hash.hex();
  document.getElementById("result").textContent = hash;
}
