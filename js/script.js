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
   			 
   			function isNamed(data){
   				return data.name != '';
   			}
   			
   			var nameFilter = data.filter(isNamed);
   			
   			console.log(data);
   			
   			console.log( nameFilter );

		for (i=0; i<nameFilter.length; i++){
			function isTrack (data){
//update track         			
        			return data.track ;
        		}
/*	        		
        	function isLavi (data){
        		return data.track == 'lavi-conner';
        	}*/
//update function        		
        	var trackFilter = data.filter(isTrack);
        	
        	/*var laviFilter = data.filter(isLavi);*/
 	}
        	
//create slides
			for (i=0; i<data.length; i++){
			
				if (data[i].type == "landing") {
				document.getElementById('story01').innerHTML += '<div class="slide"><div class="inner-wrapper landing"></div></div>';
        	}
        		else{
			document.getElementById('story01').innerHTML += '<div class="slide" id="'+data[i].track+'-'+data[i].order+'"><div class="inner-wrapper"><div class="buttons"><button class="prev"><i class="left-arrow" title="arrow icon"></i></button><a class="next" href="#'+data[i].track+'-'+data[i + 1].order+'"><i class="right-arrow" title="arrow icon"></i></a></div><div><p class="quote">' + data[i].text + "</p></div></div></div>"
			;};
			}
			for (i=0; i<data.length; i++){
				document.getElementsByClassName('slide')[i].style.backgroundImage = 'url('+data[i].img+')';
			}
			//create landing 
   				for (i=0; i < nameFilter.length; i++){
   				
   				$('.landing').append('<a href="#'+nameFilter[i].track+'-1"><div class=" landing-nav">'+ nameFilter[i].name+'</div></a>');
   					
   			}
   			
   			
   				
   		
   			}
   			
        	
        	
   			
        	
