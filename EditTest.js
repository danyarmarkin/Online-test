var mInputTex = document.getElementById('input_tex');
mInputTex.disabled = true;
var mOutputTex = document.getElementById('output_tex');
var mInputAnswer = document.getElementById('input_answer');
mInputAnswer.disabled = true;
var mOutputTexAnswer = document.getElementById('output_tex_answer');

var mSaveButton = document.getElementById('save_button');
mSaveButton.disabled = true;

var select = document.getElementById('select_number');

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
  }
}
function loadTestId(){
  //...
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
