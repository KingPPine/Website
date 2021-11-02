var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    //console.log(content.style.maxHeight); <- used this to better understand why the if condition was not ""== 0"
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      this.innerHTML = "Open Collapsible";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      this.innerHTML = "Close Collapsible";
    }
  });
} 