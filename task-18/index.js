let list = document.querySelector(".list");
let inner = document.querySelector(".inner");
let flag = 0;
document.getElementById("to-do").addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(e);
  let task = document.querySelector(".text");
  let date = document.querySelector(".date");
  let newdata = document.createElement("li");
  newdata.innerHTML = `${task.value} - ${date.value}     <button class="dlt-btn" onclick="deletetask(event)">Delete</button>`;
  list.append(newdata);
  let delall = document.querySelector(".dlt-all");
  flag++;
  if (flag == 1) {
    // console.log("hi0");
    delall.style.display = "block";
  }
});

function deletetask(e) {
  e.target.parentElement.remove();
}

// console.log(list.innerHTML);
let delall = document.querySelector(".dlt-all");
delall.style.display = "none";

function deleteAll() {
  list.innerHTML = "";
  delall.style.display = "none";
  flag = 0;
}
