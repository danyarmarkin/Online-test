var mInputTex = document.getElementById('input_tex');
mInputTex.disabled = true;
var mOutputTex = document.getElementById('output_tex');
var mInputAnswer = document.getElementById('input_answer');
mInputAnswer.disabled = true;
var mOutputTexAnswer = document.getElementById('output_tex_answer');

var mSaveButton = document.getElementById('save_button');
mSaveButton.disabled = true;

var select = document.getElementById('select_number');


var testId = document.getElementById('test_id');

function compileTex(){
  mOutputTex.innerHTML = mInputTex.value;
  if (mInputAnswer.value!=""){
    mOutputTexAnswer.innerHTML = "$"+mInputAnswer.value+"$";
  }else {
    mOutputTexAnswer.innerHTML = "";
  }

  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}
function loadNumber(){

  var sel=select.selectedIndex;
  var options=select.options;
  if (sel==0){
    mInputTex.disabled = true;
    mInputAnswer.disabled = true;
    mSaveButton.disabled = true;
    mInputTex.value = "";
    mInputAnswer.value = "";
    compileTex();
  }else{
    mInputTex.disabled = false;
    mInputAnswer.disabled = false;
    mSaveButton.disabled = false;
    getParams(testId.value, sel);
  }
}

function loadTestId(){
  var selectTest = document.getElementById('select_test');
  var val = selectTest.value;
  testId.value=allFromId[val.toString()];
  getAmountTasks(testId.value);
}

function newQuestion(){
  var id = document.getElementById('test_id').value;
  var question = mInputTex.value;
  var answer = mInputAnswer.value;
  var sel=select.selectedIndex;
  uploadQuestion(id,sel,question,answer);
}
function newTask(){
  var options=select.options;
  let newOption = new Option(options.length, "");
  select.append(newOption);
  newOption.selected = true;
  loadNumber();
}

function addTestToSelect(t, n){
  var sel = document.getElementById('select_test');
  var p = document.createElement('p');
  var opt = document.createElement('option');
  opt.setAttribute('value', n);
  p.innerHTML = t;
  opt.appendChild(p);
  sel.appendChild(opt);
}

function showParams(t, a) {
  mInputTex.value = t.replace(/\\\\/g, "\\").replace('\\n','');
  mInputAnswer.value = a;
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}
function showTaskList(n){
  var divSel = document.getElementById('div_select_task');
  var sel1 = document.getElementById('select_number');
  sel1.parentNode.removeChild(sel1);
  var sel = document.createElement('select');
  sel.setAttribute('id', 'select_number');
  sel.setAttribute('onchange', 'loadNumber()');
  for (var i = 0; i<=n; i++){
    var p = document.createElement('p');
    var opt = document.createElement('option');
    if (i==0){
      p.innerHTML = "Выберите задание";
    }else{
      p.innerHTML = i;
    }
    opt.appendChild(p);
    sel.appendChild(opt);
    if (i==0){
      opt.selected = true;
    }
  }
  divSel.appendChild(sel);
  select = document.getElementById('select_number');

}
