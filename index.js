const easy = document.getElementById('easy');
const easygo = document.getElementById('easygo');
const hard = document.getElementById('hard');
const hardgo = document.getElementById('hardgo');

easy.addEventListener('click', function onClick(event) {
  // 👇️ change background color
  document.body.style.backgroundColor = '#b3d4f2';
  easygo.style.display = "block";
  hardgo.style.display ='';
  // 👇️ optionally change text color
  // document.body.style.color = '';
});




hard.addEventListener('click', function onClick(event) {
  // 👇️ change background color
  document.body.style.backgroundColor = '#ba6554';
  easygo.style.display = "";
  hardgo.style.display ="block";
  // 👇️ optionally change text color
  // document.body.style.color = '';
});
