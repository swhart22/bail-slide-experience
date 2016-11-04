//initiate tabletop.js
		window.onload = function() { init() };

  		var public_spreadsheet_url = 		'https://docs.google.com/spreadsheets/d/1RLYef-4vEiFj1hhLPFRmAMbidn1wyTlTZv9X1CZtbb4/pubhtml';

  		function init() {
   			Tabletop.init( { key: public_spreadsheet_url,
                callback: showInfo,
                simpleSheet: true,
                debug: true, } )
  }
		
		
  		 function showInfo(data, tabletop) {
			
   			console.log(data);
   			 
   			function isNamed(data){
   				return data.name != '';
   			}
   			
   			var nameFilter = data.filter(isNamed);
   			
   			console.log( nameFilter );

   			function isBetty (data){
//update track         			
        			return data.track == 'betty-johnson';
        		}
        		
        	function isLavi (data){
        		return data.track == 'lavi-conner';
        	}
//update function        		
        	var bettyFilter = data.filter(isBetty);
        	
        	var laviFilter = data.filter(isLavi);
        	
        	document.getElementById('story01').innerHTML += '<div class="slide"><div class="inner-wrapper" id="landing"></div></div>';
        	
        	for (i=0; i < nameFilter.length; i++){
   				
   				$('#landing').append('<div class="landing-nav" id="'+nameFilter[i].track+'">'+ nameFilter[i].name+'</div>');
   					
   			}
        	
        	function isTrack (data) {
   					return data.track;
   				}
   				
   			var trackFilter = data.filter(isTrack);
        	
        	$('#'+trackFilter[i].track).click(function(){
        	
   			for (i = 0; i < nameFilter.length; i++) {
   			
   			document.getElementById('story01').innerHTML += '<div class="slide"><div class="inner-wrapper"><div class="buttons"><button class="prev"><i class="left-arrow" title="arrow icon"></i></button><button class="next"><i class="right-arrow" title="arrow icon"></i></button></div><div><p class="quote">' + trackFilter[i].text + "</p></div></div></div>";
   			
   			var slide = document.getElementsByClassName('slide')[i].style.backgroundImage = "url('"+trackFilter[i].img+"')";

   			$(document).ready(function() {
					$("#story01 .slide").each(function(e) {
        				if (e != 0)
            		$(this).css('display','none');
    			});
    			
    		});
    			
    			$(".next").click(function(){
        			if ($("#story01 div.slide:visible").next().length != 0)
            			$("#story01 div.slide:visible").next().css('display', 'block').prev().css('display','none');
        			else {
            			$("#story01 div.slide:visible").css('display','none');
            			$("#story01 div.slide:first").css('display','block');
        		}
        		return false;
    			});
    
    			$(".prev").click(function(){
        			if ($("#story01 div.slide:visible").prev().length != 0)
           			 	$("#story01 div.slide:visible").prev().css('display','block').next().css('display','none');
        			else {
            			$("#story01 div.slide:visible").css('display','none');
            			$("#story01 div.slide:last").css('display','block');
        		}
        		return false;
    			});
  		}
  			if ($("#story01 div.slide:visible").next().length != 0)
            			$("#story01 div.slide:visible").next().css('display', 'block').prev().css('display','none');
        			else {
            			$("#story01 div.slide:visible").css('display','none');
            			$("#story01 div.slide:first").css('display','block');
        		}
        		return false;
  		});
  			$('.lavi-conner').click(function(){
        		for (i = 0; i < laviFilter.length; i++) {
   			
   			document.getElementById('story01').innerHTML += '<div class="slide"><div class="inner-wrapper"><div class="buttons"><button class="prev"><i class="left-arrow" title="arrow icon"></i></button><button class="next"><i class="right-arrow" title="arrow icon"></i></button></div><div><p class="quote">' + laviFilter[i].text + "</p></div></div></div>";
   			
   			var slide = document.getElementsByClassName('slide')[i].style.backgroundImage = "url('"+laviFilter[i].img+"')";

   			$(document).ready(function() {
					$("#story01 .slide").each(function(e) {
        				if (e != 0)
            		$(this).css('display','none');
    			});
    			
    		});
    			
    			$(".next").click(function(){
        			if ($("#story01 div.slide:visible").next().length != 0)
            			$("#story01 div.slide:visible").next().css('display', 'block').prev().css('display','none');
        			else {
            			$("#story01 div.slide:visible").css('display','none');
            			$("#story01 div.slide:first").css('display','block');
        		}
        		return false;
    			});
    
    			$(".prev").click(function(){
        			if ($("#story01 div.slide:visible").prev().length != 0)
           			 	$("#story01 div.slide:visible").prev().css('display','block').next().css('display','none');
        			else {
            			$("#story01 div.slide:visible").css('display','none');
            			$("#story01 div.slide:last").css('display','block');
        		}
        		return false;
    			});
  		};
  				
        			if ($("#story01 div.slide:visible").next().length != 0)
            			$("#story01 div.slide:visible").next().css('display', 'block').prev().css('display','none');
        			else {
            			$("#story01 div.slide:visible").css('display','none');
            			$("#story01 div.slide:first").css('display','block');
        		}
        		return false;
    			
  				
  		
  		});
		
	
	}
