//initiate tabletop.js
		window.onload = function() { init() };
		window.location.hash = '';

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
//update function        		
        	var trackFilter = data.filter(isTrack);
 			}
        	
//create slides
	//create landings
			for (i=0; i<data.length; i++){
				if (data[i].type == "landing") {
				document.getElementById('story01').innerHTML += '<div id="'+data[i].track+'-'+data[i].order+'" class="slide"><div class=" landing-wrapper"></div></div>';
        	}
    //create intros
        		else if (data[i].type == "intro"){
        		document.getElementById('story01').innerHTML += '<div class="slide intro" id="'+data[i].track+'-'+data[i].order+'"><div><p class="quote">' + data[i].text + '</p></div><div class="buttons"><a class="prev" href="#'+data[i].track+'-'+data[i - 1].order+'"><i class="left-arrow" title="arrow icon"></i></a><a class="next" href="#'+data[i].track+'-'+data[i + 1].order+'"><i class="right-arrow" title="arrow icon"></i></a></div></div>'
        		}
    //create background image slides
        		else if (data[i].type == "background"){
        	var j = i + 1;
			document.getElementById('story01').innerHTML += '<div class="slide" style="background-image:url('+data[i].img+')" id="'+data[i].track+'-'+data[i].order+'"><div class="inner-wrapper"><div><p class="quote">' + data[i].text + '</p></div><div class="buttons"><a class="prev" href="#'+data[i].track+'-'+data[i - 1].order+'"><i class="left-arrow" title="arrow icon"></i></a><a class="next" href="#'+data[i].track+'-'+data[i + 1].order+'"><i class="right-arrow" title="arrow icon"></i></a></div></div></div>'
			
			;}
				else if (data[i].type == "image"){
				document.getElementById('story01').innerHTML += '<div class="slide image" id="'+data[i].track+'-'+data[i].order+'"><div class="inner-wrapper"><div><img class="reg-image" src="'+data[i].img+'"><p class="quote">' + data[i].text + '</p></div><div class="buttons image"><a class="prev" href="#'+data[i].track+'-'+data[i - 1].order+'"><i class="left-arrow" title="arrow icon"></i></a><a class="next" href="#'+data[i].track+'-'+data[i + 1].order+'"><i class="right-arrow" title="arrow icon"></i></a></div></div></div>'
				}
				else if (data[i].type =="default"){
				document.getElementById('story01').innerHTML += '<div class="slide" id="'+data[i].track+'-'+data[i].order+'"><div class="inner-wrapper"><div><p class="quote">' + data[i].text + '</p></div><div class="buttons"><a class="prev" href="#'+data[i].track+'-'+data[i - 1].order+'"><i class="left-arrow" title="arrow icon"></i></a><a class="next" href="#'+data[i].track+'-'+data[i + 1].order+'"><i class="right-arrow" title="arrow icon"></i></a></div></div></div>'
				}
			;
			}
			
			
			//create landing 
   			for (i=0; i < nameFilter.length; i++){
   				
   				$('.landing-wrapper').append('<a href="#'+nameFilter[i].track+'-1"><div class=" landing-nav">'+ nameFilter[i].name+'</div></a>');
   				
   				
   					
   			}
   			
   			
   				
   		
   			}
   			
        	
        	
   			
        	
