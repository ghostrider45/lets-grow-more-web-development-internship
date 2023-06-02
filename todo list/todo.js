<script>
function newelem() {
  var inputValue = document.getElementById("myinput").value;
  if (inputValue === '') {
    alert("Please enter a task!");
  } else {
    var li = document.createElement("li");
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    li.onclick = function() {
      this.classList.toggle("checked");
    };
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("myinput").value = "";
}
</script>
