mInputTex = document.getElementById('input_tex');
mOutputTex = document.getElementById('output_tex');

function compileTex(){
  mOutputTex.innerHTML = mInputTex.value
  MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}
