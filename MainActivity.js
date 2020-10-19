var n = 0;

function showTest(t){
  var ul = document.getElementById('tests_list');
  var p = document.createElement('p');
  var li = document.createElement('li');
  p.innerHTML = t;
  li.appendChild(p);
  ul.appendChild(li);
}
function newTest(){
  var testName="";
  var date="";
  var newId = Math.floor((Math.random()*89999999)+10000000);
  if (allId.size == 89999999){
    alert("Все ID заняты, обратитесь к администратопу сайта");
    return null;
  }
  while (newId in allId){
    newId = Math.floor((Math.random()*89999999)+10000000);
  }
  console.log(newId);
  testName= prompt("Название теста", "летучка");
  while (date==""){
    date = prompt("Укажите дату");
  }
  createTest(testName+" "+date, "main", newId)
}
