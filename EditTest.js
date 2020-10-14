var mInputTex = document.getElementById('input_tex');
var mOutputTex = document.getElementById('output_tex');
var mInputAnswer = document.getElementById('input_answer');
var mOutputTexAnswer = document.getElementById('output_tex_answer');

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
    mInputTex.value = "";
    mInputAnswer.value = "";
    compileTex();
  }else{
    mInputTex.disabled = false;
    mInputAnswer.disabled = false;
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
