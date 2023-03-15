let string = "";
let count = 0;
let flag = false;
//  let invalid=
let button = document.querySelectorAll('.buttons');
Array.from(button).forEach((buttons) => {
  buttons.addEventListener('click', (e) => {
    if (e.target.innerText.length > 1)
      return;
    if (e.target.innerText == '=') {
      string = document.getElementById("monitor").value;
      if (string == undefined || string == "")
        return;
      try {
        string = eval(string);
      }
      catch (error) {
        string = "";
        document.querySelector('#monitor').value = "Invalid";
        return;
      }
      document.querySelector('#monitor').value = string;
    }
    else if (e.target.innerText == 'C') {
      string = "";
      document.querySelector('#monitor').value = string;
    }
    else if (e.target.innerText == '+' || e.target.innerText == '-' || e.target.innerText == '*' || e.target.innerText == '/' || e.target.innerText == '.') {
      if (flag) {
        string = string + e.target.innerText;
        document.querySelector('#monitor').value = string;
      }
      flag = false;
    }
    else {
      string = string + e.target.innerText;
      document.querySelector('#monitor').value = string;
      flag = true;
    }

  });
});