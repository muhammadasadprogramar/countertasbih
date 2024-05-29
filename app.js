let count = 0;

document.getElementById("d-btn").onclick = function () {
  count -= 1;
  document.getElementById("counter").innerHTML = count;
};

document.getElementById("r-btn").onclick = function () {
  count = 0;
  document.getElementById("counter").innerHTML = count;
};

document.getElementById("i-btn").onclick = function () {
  count += 1;
  document.getElementById("counter").innerHTML = count;
};
