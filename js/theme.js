window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 300);
});
    


    AOS.init({
    	offset: 150
    });


$(function(){
	map = new GMaps({
      el: '#location',
      lat: 30.3753,
      lng: 69.3451,
      zoom: 4
    });


    map.addMarker({
  lat: 30.3753,
  lng: 69.3451,
  title: 'Pakistan',
  click: function(e) {
    alert('You clicked in this marker');
  }
});
});

$(document).ready(function(){
  $('html body .header .togl-btn').click(function(){
    $(this).toggleClass('active');
    $('.navi span').toggleClass('active');
    $('.navi .mob-toggle-menu .mob-menu').toggleClass('active');
  });
});


    