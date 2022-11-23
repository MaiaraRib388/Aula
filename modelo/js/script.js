$(function() {
    $('body').addClass('js');
  
    var $hamburger = $('.hamburger'),
        $nav = $('#site-nav'),
        $masthead = $('#masthead');
  
    $hamburger.click(function() {
      $(this).toggleClass('is-active');
      $nav.toggleClass('is-active');
      $masthead.toggleClass('is-active');
      return false; 
    })
});

let panels =document.querySelectorAll('.panel')
panels.forEach(panel => {
  panel.addEventListener('click', () =>{
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses(){
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}
