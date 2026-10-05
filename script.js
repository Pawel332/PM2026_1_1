let button = document.getElementById("ex1_button");
let content = document.getElementById("ex1_content");
let phone = document.getElementById("ex2_text");
let pcontent = document.getElementById("ex2_content");

(function() {
  //TODO
  button.addEventListener("click", () => {
    content.innerHTML = "0,1,2,3,4,5,6,7,8,9";
  })

  phone.addEventListener("input", () => {
    let value = phone.value;

    if (value.length !== 9) {
      pcontent.innerHTML = "Długość numeru musi być równa 9";
    } 
    else if (/[a-zA-Z]/.test(value)) {
      pcontent.innerHTML = "Numer nie może zawierać liter";
    } 
    else if (/[^0-9]/.test(value)) {
      pcontent.innerHTML = "Numer nie może zawierać znaków specjalnych";
    } 
    else {
      pcontent.innerHTML = "Numer telefonu jest poprawny";
    }
  });
})();