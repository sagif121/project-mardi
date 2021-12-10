$('.card1').on('click', function() {
    $('.card2') .slideToggle(5000)
  });
  
  $('.card3').on('click', function() {
    $('.card4').slideToggle(5000)
  });

  $('.card5').on('click', function() {
    $('.card6').slideToggle(5000);
  });
  

  $('.card7').on('click', function() {
    $('.card8') .slideToggle(5000)
  });
  
  $('.card9').on('click', function() {
    $('.card10').slideToggle(5000)
  });

  $('.card11').on('click', function() {
    $('.card12').slideToggle(5000);
  });

  $('.card13').on('click', function() {
    $('.card14').slideToggle(5000)
  });

  $('.card15').on('click', function() {
    $('.card16').slideToggle(5000);
  });



function inputValidation(){
  let nameInput = document.getElementsByClassName('inputName')[0];
  let emailInput = document.getElementsByClassName('inputEmail')[0];
  let phoneInput = document.getElementsByClassName('inputPhone')[0];
  let errorMsg1 = document.getElementsByClassName('error-1')[0];
  let errorMsg2 = document.getElementsByClassName('error-2')[0];
  let errorMsg3 = document.getElementsByClassName('error-3')[0];
  if(nameInput.value == "" || emailInput == ""  || phoneInput == "" ){
    errorMsg1.style.display = "inline-block";
    errorMsg2.style.display = "inline-block";
    errorMsg3.style.display = "inline-block";
 
  }else{
    return false;
  }
}


 
 window.onscroll = scrollFunction;
function scrollFunction() {
  if   (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}




let btn2 = document.querySelector('.send');
btn2.addEventListener('click', inputValidation );

