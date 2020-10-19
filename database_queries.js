var database = firebase.database();
var div = document.getElementById('div_tests_list');
var divSel = document.getElementById('div_select_test');
var allId = {};
var allFromId = {};

function uploadQuestion(testId, taskNumber, questionText, answer){
  database.ref(testId + '/tasks/task'+taskNumber).set(questionText);
  database.ref(testId + '/answers/answer' + taskNumber).set(answer);
  database.ref(testId + '/t').set(taskNumber);
}
function getTest(n, scr){
  getId(n);
  var n;
  test = "";
  firebase.database().ref('tests/'+(i+10000000)).once('value').then(function(snapshot) {
     var t = snapshot.val();
     // console.log(t.toStr ing());
     test = t.toString();
     if (scr == "main"){
       showTest(test);
     }
     if(scr == "edit_test"){
       addTestToSelect(test, n+10000000);
     }
  });
}
function getAllTests(scr){
  var n = 0;

  if(scr == "main"){
    var ul1 = document.getElementById('tests_list');
    ul1.parentNode.removeChild(ul1);
    var ul = document.createElement('ul');
    ul.setAttribute('id', 'tests_list');
    div.appendChild(ul);
  }
  if(scr == "edit_test"){
    var sel1 = document.getElementById('select_test');
    sel1.parentNode.removeChild(sel1);
    var sel = document.createElement('select');
    sel.setAttribute('id', 'select_test');
    sel.setAttribute('onchange', 'loadTestId()');
    divSel.appendChild(sel);
    var p = document.createElement('p');
    var opt = document.createElement('option');
    p.innerHTML = "Выберите тест";
    opt.appendChild(p);
    sel.appendChild(opt);
    opt.selected = true;
  }

  const dbQuestions = firebase.database().ref('tests/id');
  dbQuestions.once('value', snap => {
   // console.log(snap.val());
   var result = JSON.stringify(snap.val(), null, 3).replace(/['"]+/g, '');
   var questions = parseInt(result);
   // console.log(questions);
   n = questions-10000000;
   for(i=n;i>=1;i--){
     getTest(i, scr);
   }
  });
}

function createTest(tn, scr, id){
  const dbQuestions = firebase.database().ref('tests/id');
  dbQuestions.once('value', snap => {
   var result = JSON.stringify(snap.val(), null, 3).replace(/['"]+/g, '');
   var n = parseInt(result)+1;
   database.ref("tests/"+n).set(tn);
   database.ref("tests/id").set(n);
   database.ref("IDs/"+n).set(id);
   getAllTests(scr);
  });
}
function getId(n){
  const dbQuestions = firebase.database().ref('IDs/'+(n+10000000));
  dbQuestions.once('value', snap => {
   var id = JSON.stringify(snap.val(), null, 3).replace(/['"]+/g, '');
   saveId(id, n+10000000);
  });

}
function saveId(id,n){
  allId[id] = n;
  allFromId[n] = id;
  // console.log(allId);
}

function getParams(testId, task) {
  const dbQuestions = firebase.database().ref(testId+'/tasks/task'+task);
  const dbAnswer = firebase.database().ref(testId+'/answers/answer'+task);
  dbQuestions.once('value', snap => {
   var t = JSON.stringify(snap.val(), null, 3).replace(/['"]+/g, '');
   dbAnswer.once('value', snap => {
    var a = JSON.stringify(snap.val(), null, 3).replace(/['"]+/g, '');
    showParams(t, a);
   });
  });
}
function getAmountTasks(testId) {
  const dbQuestions = firebase.database().ref(testId+'/t');
  dbQuestions.once('value', snap => {
   var t = JSON.stringify(snap.val(), null, 3).replace(/['"]+/g, '');
   showTaskList(parseInt(t));
 });
}
