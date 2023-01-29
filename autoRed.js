let csvData = [];
let currentIndex = 0;
let intervalId;

function loadFile() {
  let file = document.getElementById("csv-file").files[0];
  let reader = new FileReader();
  reader.readAsText(file);

  reader.onload = function() {
    let csv = reader.result;
    let lines = csv.split("\n");
    csvData = lines;
  };
}

function play() {
  processData();
}

function pause() {
  clearInterval(intervalId);
}

function stop() {
  clearInterval(intervalId);
  currentIndex = 0;
}

function processData() {
//   if (currentIndex >= csvData.length) {
//     clearInterval(intervalId);
//     currentIndex = 0;
//     return;
//   }

let newTab = window.open("https://forms.gle/AK2dGkGkXnjN2r4U7");

  let record = csvData[0];
//   currentIndex++;

  

  //make changes here

  newTab.onload = function() {
    let inputs = newTab.document.getElementsByTagName("input");
    let data = record.split(",");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = data[i];
    }
    newTab.document.getElementById("form-id").submit();
  };
}
