$(function(){
$( "footer li" ).each(function() {
    $(this).hover(function(){
      $(this).toggleClass('current');
    });
  });
  
$( "#datepicker" ).datepicker({
	   dateFormat:"dd-mm-yy",
	   buttonText: "<i class='fa fa-calendar'></i>"
});

	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4,.navbar-toggle').click(function(){
		$(this).toggleClass('open');
	});


//var totalHeight = 0;

//$(".headerWrap").children().each(function(){
//    totalHeight = totalHeight + $(this).outerHeight(true);
//	console.log(totalHeight);
//	$('.headerWrap').css('height', totalHeight);
//});


$("#owl-search").owlCarousel({
     navigation : true, // Show next and prev buttons
     slideSpeed : 300,
     paginationSpeed : 400,
     singleItem:true,
	 pagination:true,
	 navigation:false, 
});


$("#owl-search-mobile").owlCarousel({
     items: 6
});

$("#owl-demo").owlCarousel({
	autoPlay: 3000,
	items : 3,
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [979,2],
	itemsDesktopMobile : [479,1],
	itemsCustom : false,
	singleItem : false,
	itemsScaleUp : false,
	margin: 10,
	center: true,
	slideSpeed : 200,
	paginationSpeed : 800,
	rewindSpeed : 1000,
	responsiveClass:true,
	navigation : true,
	navigationText: [
	  "<span class='fa fa-caret-left'></span>",
	  "<span class='fa fa-caret-right'></span>"
	  ],
	pagination : false,
	paginationNumbers: false,
	responsive: true,
	responsiveRefreshRate : 200,
	responsiveBaseWidth: window,
	baseClass : "owl-carousel",
	theme : "owl-theme",	
});
$('.datepicker').datepicker({
	autoclose: true,
    format: 'mm/dd/yyyy',
    startDate: '-3d'
	});
});

