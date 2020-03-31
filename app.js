let theme = document.querySelector("#theme");
let innerCircle = document.querySelector(".inner-circle");
let toggleBtn = document.querySelector(".toggle-btn");
let add = document.querySelector(".add");

innerCircle.addEventListener("click", () => {

    if(theme.classList.contains("light")) {

        innerCircle.style.marginLeft = "25px";
        toggleBtn.style.backgroundColor ="limegreen";

        theme.classList.remove("light");
        theme.classList.add("dark");
    }
    else {
        innerCircle.style.marginLeft = "0px";
        toggleBtn.style.backgroundColor ="grey";

        theme.classList.add("light");
        theme.classList.remove("dark");
    }
});

add.addEventListener("click", () => {

  let item = document.querySelector(".item");
  let itemValue = item.value;
  let text = document.createTextNode(itemValue);
  let list = document.querySelector(".list");
  let li = document.createElement("li");
  li.appendChild(text);
  list.appendChild(li);

  setTimeout(() => {

  }, 1);

  item.value = "";
  
  li.style.listStyle = "none";
  li.style.textAlign = "center";
  li.style.borderRadius = "20px";
  li.style.marginTop = "10px";
  li.style.fontWeight = "500";
  li.style.fontSize = "1.5rem";

});