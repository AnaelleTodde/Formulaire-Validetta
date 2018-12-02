jQuery(function($){
	$.datepicker.regional['fr'] = {
		closeText: 'Fermer',
		prevText: '&#x3c;Préc',
		nextText: 'Suiv&#x3e;',
		currentText: 'Aujourd\'hui',
		monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin',
		'Juillet','Aout','Septembre','Octobre','Novembre','Décembre'],
		monthNamesShort: ['Jan','Fev','Mar','Avr','Mai','Jun',
		'Jul','Aou','Sep','Oct','Nov','Dec'],
		dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
		dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
		dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
		weekHeader: 'Sm',
		dateFormat: 'd MM yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: '',
		minDate: new Date(1920, 1 - 1, 1),
		maxDate: '+12M +0D',
		numberOfMonths: 1,
		showButtonPanel: true,
        showAnim: 'fold',
        showOn: "button",
        buttonImage: "css/images/calendar.gif",
        buttonImageOnly: true,
        buttonText: "Select date",
        changeMonth: true,
      changeYear: true,
        yearRange: "1920:2020"
		};
	$.datepicker.setDefaults($.datepicker.regional['fr']);
});



$(function(){        
$("#datepicker").datepicker();
/*------------------Code Postal-----------------------------------*/       
    $.ajax({
        url: 'json/cities.json',
        method:"GET",
        dataType: "json",
        success:function(monObjet){
            //console.log(monObjet.length);
            
            var i = 0;
            var villes = [];
            for(i=0; i<monObjet.length; i++){
                //console.log(monObjet[i].name);
                //villes.push(monObjet[i].name); 
                
                var obj = {};
                
                obj["ville"] = monObjet[i].name;
                obj["value"] = monObjet[i].zip;
                obj["label"] = obj["value"]+" "+obj["ville"];
                
                villes.push(obj);
                
            }//for
            console.log(villes);
            
            $( "#cp" ).autocomplete({
            source: function( request, response ) {
          var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
          response( $.grep( villes, function( item ){
              return matcher.test( item.label );
          }) );
            },
                minLength: 1,
                select: function(event, ui){
                    $("#ville").val(ui.item.ville);
                }

            });//autocomplete
        }//success function
        
    }); //ajax
/*----------------Fin code postal-------------------------------------*/
    
/*------------------Ville-----------------------------------*/       
    $.ajax({
        url: 'json/cities.json',
        method:"GET",
        dataType: "json",
        success:function(monObjet){
            //console.log(monObjet.length);
            
            var i = 0;
            var villes = [];
            for(i=0; i<monObjet.length; i++){
                //console.log(monObjet[i].name);
                //villes.push(monObjet[i].name); 
                
                var obj = {};
                
                obj["cp"] = monObjet[i].zip;
                obj["value"] = monObjet[i].name;
                obj["label"] = obj["value"]+" "+obj["cp"];
                
                villes.push(obj);
                
            }//for
            console.log(villes);
            
            $( "#ville" ).autocomplete({
            source: function( request, response ) {
          var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
          response( $.grep( villes, function( item ){
              return matcher.test( item.label );
          }) );
            },
                minLength: 1,
                select: function(event, ui){
                    $("#cp").val(ui.item.cp);
                }

            });//autocomplete
        }//success function
        
    }); //ajax
/*----------------Fin ville-------------------------------------*/

    
$('#form, #loginform').validetta({
  onValid : function( event ) {
    event.preventDefault(); // Will prevent the submission of the form
   
   //alert( 'Nice, Form is valid.' );
 
 // ici faire la requête ajax

      
      var donnees = $("#form, #loginform").serialize();	  
 $.ajax({
   	 // 1) on définit le fichier vers lequel on envoye la requête POST
       url : "php.php",
	
	// 2/ on spécifie la méthode  
       type : 'POST', // Le type de la requête HTTP, ici  POST
    
	// 3) on définit les variables POST qui sont ennvoyées au fichier .php qui les récupère sous forme de $_POST["nom"] 
	  data : donnees, // On fait passer nos variables au script coucou.php
     
	 // 4) format de retour du fichier php dans "data"
	   dataType : 'html',
	   
	   // 5) fonction à effectuer en cas de succès
	   success : function(data){ //  contient le HTML renvoyé
        
		
		$('#contenu').html(data);  
		$('#form,#main,#box').hide();
		 
       
	   
	   } // success
   
   
   }); // $.ajax function
      
      
 
 }, // valid
  onError : function( event ){
    //alert( 'Stop bro !! There are some errors.');
  
  
  }, // error
  
  
  display : 'bubble',
  errorClass : 'validetta-error',
  /** Same for valid validation */
  validClass : 'validetta-valid', // Same for valid validation
  bubblePosition: 'right', // Bubble position // right / bottom
  bubbleGapLeft: 15, // Right gap of bubble (px unit)
  bubbleGapTop: 0, // Top gap of bubble (px unit)
  /* To enable real-time form control, set this option true. */
  realTime : true
  
});//validetta     
    
    $("#submit_sign").click(function(){
        $("#main").animate({left:"22.5%"}, 400);
        $("#main").animate({left:"30%"}, 500);
        $("#loginform").css("visibility","hidden");
        $("#loginform").animate({left:"22.5%"}, 400);
        
        $("#form").animate({left:"17%"}, 400);
        $("#form").animate({left:"30%"}, 500);
        $("#form").css("visibility","visible");
    });
    
      $("#submit_login").click(function(){
        $("#main").animate({left:"77.5%"}, 400);
        $("#main").animate({left:"70%"}, 500); 
        $("#form").css("visibility","hidden");
        $("#form").animate({left:"77.5%"}, 400);
          
        $("#loginform").animate({left:"83.5%"}, 400);
        $("#loginform").animate({left:"70%"}, 500);
        $("#loginform").css("visibility","visible");
    });
    
}); //ready