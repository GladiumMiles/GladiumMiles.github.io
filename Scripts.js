// JavaScript Document



// Ändra bakgrundsfärg på boxen med information när man hovrar över ett grundämne
$(function() {
  $('.Ickemetaller').hover(function() {
    $('#color').css('background-color', '#FFF500');
   // $('.key6').css('border', 'solid 1px white');	
  }, function() {
    // on mouseout, reset the background colour
    $('#color').css('background-color', '');
    $('.key6').css('border', '');
  });
    $('.Alkalimetaller').hover(function() {
    $('#color').css('background-color', '#FF0000');
   // $('.key1').css('border', 'solid 1px white');
  }, function() {
    // on mouseout, reset the background colour
    $('#color').css('background-color', '');
    $('.key1').css('border', '');
  });
     $('.Jordart').hover(function() {
    $('#color').css('background-color', '#FF7600');
   // $('.key2').css('border', 'solid 1px white');
  }, function() {
    // on mouseout, reset the background colour
    $('#color').css('background-color', '');
    $('.key2').css('border', '');
  });
      $('.Adelgaser').hover(function() {
    $('#color').css('background-color', '#2E00B4');
   // $('.key8').css('border', 'solid 1px white');
  }, function() {
    // on mouseout, reset the background colour
    $('#color').css('background-color', '');
    $('.key8').css('border', '');
  });
      $('.Overgang').hover(function() {
    $('#color').css('background-color', '#9e9999');
   // $('.key3').css('border', 'solid 1px white');
  }, function() {
    // on mouseout, reset the background colour
    $('#color').css('background-color', '');
    $('.key3').css('border', '');
  });
      $('.Post').hover(function() {
    $('#color').css('background-color', '#006B2A');
   // $('.key4').css('border', 'solid 1px white');
  }, function() {
    // on mouseout, reset the background colour
    $('#color').css('background-color', '');
    $('.key4').css('border', '');
  });
      $('.Halv').hover(function() {
    $('#color').css('background-color', '#00F70C');
   // $('.key5').css('border', 'solid 1px white');
  }, function() {
    // on mouseout, reset the background colour
    $('#color').css('background-color', '');
    $('.key5').css('border', '');
  });
      $('.Lant').hover(function() {
   // $('#color').css('background-color', '#FF00ED');
    $('.key9').css('border', 'solid 1px white');
  }, function() {
    // on mouseout, reset the background colour
    $('#color').css('background-color', '');
    $('.key9').css('border', '');
  });
        $('.Halogener').hover(function() {
    $('#color').css('background-color', '#09D7E8');
   // $('.key7').css('border', 'solid 1px white');
  }, function() {
    // on mouseout, reset the background colour
    $('#color').css('background-color', '');
    $('.key7').css('border', '');
  });
        $('.Actnid').hover(function() {
    $('#color').css('background-color', '#C805B5');
   // $('.key10').css('border', 'solid 1px white');
  }, function() {
    // on mouseout, reset the background colour
    $('#color').css('background-color', '');
    $('.key10').css('border', '');
  });
          $('.oidentifierad').hover(function() {
    $('#color').css('background-color', '#FFFFFF');
  }, function() {
    // on mouseout, reset the background colour
    $('#color').css('background-color', '');
  });
         $('.Gas').hover(function() {
    $('#color').css('color', '#FFFFFF');
	$('#color').css('text-shadow', ' -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000');
  }, function() {
    // on mouseout, reset the background colour
    $('#color').css('color', '#000000');
	$('#color').css('text-shadow', '0px 0px 0px rgba(0, 0, 2, 0.5)');
  });
	  $('.Flytande').hover(function() {
    $('#color').css('color', '#0115AC');
    
	
  }, function() {
    // on mouseout, reset the background colour
    $('#color').css('color', '#000000');
    $('#color').css('text-shadow', '0px 0px 0px rgba(0, 0, 2, 0.5)');
  });
  
         $('#EttHundraArton tr td, #systembottom tr td').hover(function() {
    $('#color').css('opacity', '1');
  }, function() {
    // on mouseout, reset the background colour
    $('#color').css('opacity', '0.2');
  });    
           $('.borderblock, #color, .Lant2, .Actnid2').hover(function() {
    $('#color').css('opacity', '0.2');
  }, function() {
    // 
    $('#color').css('opacity', '0.2');
  }); 
});



// En för varje av grundämnes klasserna
var key1 = 2;
var key2 = 2;
var key3 = 2;
var key4 = 2;
var key5 = 2;
var key6 = 2;
var key7 = 2;
var key8 = 2;
var key9 = 2;
var key10 = 2;



$(function() {
    $('.key1').click(function() {
	  
	  
	  if (key1 % 2 == 1){ //klasserna har satts till två innan. När talet är jämnt så försvinner övriga klasser, när drt är jämnt kommer de tillbaka, detta upprepas sedan för alla 10 klasser

	$('.key2, .key3, .key4, .key5, .key6, .key7, .key8, .key9, .key10,  .Jordart, .Adelgaser, .Ickemetaller, .Overgang, .Post, .Halv, .Halogener, .Lant, .Actnid, .ActnidKey, .Lantanoid, .oidentifierad, .Lant2, .Actnid2').css('opacity', '1');	
	  } else {
		  
    $('.key2, .key3, .key4, .key5, .key6, .key7, .key8, .key9, .key10,  .Jordart, .Adelgaser, .Ickemetaller, .Overgang, .Post, .Halv, .Halogener, .Lant, .Actnid, .ActnidKey, .Lantanoid, .oidentifierad, .Lant2, .Actnid2').css('opacity', '0.2');
	$('.Alkalimetaller, .key1').css('opacity', '1');	
	  }
  	key1++;
	key2 = 2;
	key3 = 2;
	key4 = 2;
	key5 = 2;
	key6 = 2;
	key7 = 2;
	key8 = 2;
	key9 = 2;
	key10 = 2;	 
  });
  $('.key2').click(function() {
  
  	if (key2 % 2 == 1){
  
	$('.key1, .key2, .key3, .key4, .key5, .key6, .key7, .key8, .key9, .key10, .Alkalimetaller, .Jordart, .Adelgaser, .Ickemetaller, .Overgang, .Post, .Halv, .Halogener, .Lant, .Actnid, .ActnidKey, .Lantanoid, .oidentifierad, .Lant2, .Actnid2').css('opacity', '1');
	} else {
    $('.key1, .key3, .key4, .key5, .key6, .key7, .key8, .key9, .key10, .Alkalimetaller, .Adelgaser, .Ickemetaller, .Overgang, .Post, .Halv, .Halogener, .Lant, .Actnid, .ActnidKey, .Lantanoid, .oidentifierad, .Lant2, .Actnid2').css('opacity', '0.2');
	$('.Jordart, .key2').css('opacity', '1');
		}
	key1 = 2;
  	key2++;
	key3 = 2;
	key4 = 2;
	key5 = 2;
	key6 = 2;
	key7 = 2;
	key8 = 2;
	key9 = 2;
	key10 = 2; 
  });
  $('.key3').click(function() {
  
  	if (key3 % 2 == 1){
  
	$('.key1, .key2, .key3, .key4, .key5, .key6, .key7, .key8, .key9, .key10, .Alkalimetaller, .Jordart, .Adelgaser, .Ickemetaller, .Overgang, .Post, .Halv, .Halogener, .Lant, .Actnid, .ActnidKey, .Lantanoid, .oidentifierad, .Lant2, .Actnid2').css('opacity', '1');
	} else {
    $('.key1, .key2, .key4, .key5, .key6, .key7, .key8, .key9, .key10, .Alkalimetaller, .Jordart, .Adelgaser, .Ickemetaller, .Post, .Halv, .Halogener, .Lant, .Actnid, .ActnidKey, .Lantanoid, .oidentifierad, .Lant2, .Actnid2').css('opacity', '0.2');
	$('.Overgang, .key3').css('opacity', '1');
		}
	key1 = 2;
	key2 = 2;
  	key3++; 
	key4 = 2;
	key5 = 2;
	key6 = 2;
	key7 = 2;
	key8 = 2;
	key9 = 2;
	key10 = 2;
  });
  $('.key4').click(function() {
  
  	if (key4 % 2 == 1){
  
	$('.key1, .key2, .key3, .key4, .key5, .key6, .key7, .key8, .key9, .key10, .Alkalimetaller, .Jordart, .Adelgaser, .Ickemetaller, .Overgang, .Post, .Halv, .Halogener, .Lant, .Actnid, .ActnidKey, .Lantanoid, .oidentifierad, .Lant2, .Actnid2').css('opacity', '1');
	} else {
    $('.key1, .key2, .key3, .key5, .key6, .key7, .key8, .key9, .key10, .Alkalimetaller, .Jordart, .Overgang, .Adelgaser, .Ickemetaller, .Halv, .Halogener, .Lant, .Actnid, .ActnidKey, .Lantanoid, .oidentifierad, .Lant2, .Actnid2').css('opacity', '0.2');
	$('.Post, .key4').css('opacity', '1');
		}
	key1 = 2;
	key2 = 2;
	key3 = 2;
  	key4++;
	key5 = 2;
	key6 = 2;
	key7 = 2;
	key8 = 2;
	key9 = 2;
	key10 = 2; 
  });
  $('.key5').click(function() {
  
  	if (key5 % 2 == 1){
  
	$('.key1, .key2, .key3, .key4, .key5, .key6, .key7, .key8, .key9, .key10, .Alkalimetaller, .Jordart, .Adelgaser, .Ickemetaller, .Overgang, .Post, .Halv, .Halogener, .Lant, .Actnid, .ActnidKey, .Lantanoid, .oidentifierad, .Lant2, .Actnid2').css('opacity', '1');
	} else {
    $('.key1, .key2, .key3, .key4, .key6, .key7, .key8, .key9, .key10, .Alkalimetaller, .Jordart, .Overgang, .Adelgaser, .Ickemetaller, .Post, .Halogener, .Lant, .Actnid, .ActnidKey, .Lantanoid, .oidentifierad, .Lant2, .Actnid2').css('opacity', '0.2');
	$('.Halv, .key5').css('opacity', '1');
		}
	key1 = 2;
	key2 = 2;
	key3 = 2;
  	key4 = 2;
	key5++;
	key6 = 2;
	key7 = 2;
	key8 = 2;
	key9 = 2;
	key10 = 2; 
  });
  $('.key6').click(function() {
  
  	if (key6 % 2 == 1){
  
	$('.key1, .key2, .key3, .key4, .key5, .key6, .key7, .key8, .key9, .key10, .Alkalimetaller, .Jordart, .Adelgaser, .Ickemetaller, .Overgang, .Post, .Halv, .Halogener, .Lant, .Actnid, .ActnidKey, .Lantanoid, .oidentifierad, .Lant2, .Actnid2').css('opacity', '1');
	} else {
    $('.key1, .key2, .key3, .key4, .key5, .key7, .key8, .key9, .key10, .Alkalimetaller, .Jordart, .Overgang, .Adelgaser, .Ickemetaller, .Post, .Halv, .Halogener, .Lant, .Actnid, .ActnidKey, .Lantanoid, .oidentifierad, .Lant2, .Actnid2').css('opacity', '0.2');
	$('.Ickemetaller, .key6').css('opacity', '1');
		}
	key1 = 2;
	key2 = 2;
	key3 = 2;
  	key4 = 2;
	key5 = 2;
	key6++;
	key7 = 2;
	key8 = 2;
	key9 = 2;
	key10 = 2; 
  });
  $('.key7').click(function() {
  
  	if (key7 % 2 == 1){
  
	$('.key1, .key2, .key3, .key4, .key5, .key6, .key7, .key8, .key9, .key10, .Alkalimetaller, .Jordart, .Adelgaser, .Ickemetaller, .Overgang, .Post, .Halv, .Halogener, .Lant, .Actnid, .ActnidKey, .Lantanoid, .oidentifierad, .Lant2, .Actnid2').css('opacity', '1');
	} else {
    $('.key1, .key2, .key3, .key4, .key5, .key6, .key8, .key9, .key10, .Alkalimetaller, .Jordart, .Overgang, .Adelgaser, .Ickemetaller, .Post, .Halv, .Halogener, .Lant, .Actnid, .ActnidKey, .Lantanoid, .oidentifierad, .Lant2, .Actnid2').css('opacity', '0.2');
	$('.Halogener, .key7').css('opacity', '1');
		}
	key1 = 2;
	key2 = 2;
	key3 = 2;
  	key4 = 2;
	key5 = 2;
	key6 = 2;
	key7++;
	key8 = 2;
	key9 = 2;
	key10 = 2; 
  });
  $('.key8').click(function() {
  
  	if (key8 % 2 == 1){
  
	$('.key1, .key2, .key3, .key4, .key5, .key6, .key7, .key8, .key9, .key10, .Alkalimetaller, .Jordart, .Adelgaser, .Ickemetaller, .Overgang, .Post, .Halv, .Halogener, .Lant, .Actnid, .ActnidKey, .Lantanoid, .oidentifierad, .Lant2, .Actnid2').css('opacity', '1');
	} else {
    $('.key1, .key2, .key3, .key4, .key5, .key6, .key7, .key9, .key10, .Alkalimetaller, .Jordart, .Overgang, .Ickemetaller, .Post, .Halv, .Halogener, .Lant, .Actnid, .ActnidKey, .Lantanoid, .oidentifierad, .Lant2, .Actnid2').css('opacity', '0.2');
	$('.Adelgaser, .key8').css('opacity', '1');
		}
	key1 = 2;
	key2 = 2;
	key3 = 2;
  	key4 = 2;
	key5 = 2;
	key6 = 2;
	key7 = 2;
	key8++;
	key9 = 2;
	key10 = 2; 
  });
    $('.key9').click(function() {
  
  	if (key9 % 2 == 1){
  
	$('.key1, .key2, .key3, .key4, .key5, .key6, .key7, .key8, .key9, .key10, .Alkalimetaller, .Jordart, .Adelgaser, .Ickemetaller, .Overgang, .Post, .Halv, .Halogener, .Lant, .Actnid, .ActnidKey, .Lantanoid, .oidentifierad, .Lant2, .Actnid2').css('opacity', '1');
	} else {
    $('.key1, .key2, .key3, .key4, .key5, .key6, .key7, .key8, .key10, .Alkalimetaller, .Jordart, .Adelgaser, .Overgang, .Ickemetaller, .Post, .Halv, .Halogener, .Lant, .Actnid, .ActnidKey, .Lantanoid, .oidentifierad, .Lant2, .Actnid2').css('opacity', '0.2');
	$('.Lant, .key9').css('opacity', '1');
		}
	key1 = 2;
	key2 = 2;
	key3 = 2;
  	key4 = 2;
	key5 = 2;
	key6 = 2;
	key7 = 2;
	key8 = 2;
	key9++;
	key10 = 2; 
  });
      $('.key10').click(function() {
  
  	if (key10 % 2 == 1){
  
	$('.key1, .key2, .key3, .key4, .key5, .key6, .key7, .key8, .key9, .key10, .Alkalimetaller, .Jordart, .Adelgaser, .Ickemetaller, .Overgang, .Post, .Halv, .Halogener, .Lant, .Actnid, .ActnidKey, .Lantanoid, .oidentifierad, .Lant2, .Actnid2').css('opacity', '1');
	} else {
    $('.key1, .key2, .key3, .key4, .key5, .key6, .key7, .key8, .key9, .Alkalimetaller, .Jordart, .Adelgaser, .Overgang, .Ickemetaller, .Post, .Halv, .Halogener, .Lant, .Actnid, .ActnidKey, .Lantanoid, .oidentifierad, .Lant2, .Actnid2').css('opacity', '0.2');
	$('.Actnid, .key10').css('opacity', '1');
		}
	key1 = 2;
	key2 = 2;
	key3 = 2;
  	key4 = 2;
	key5 = 2;
	key6 = 2;
	key7 = 2;
	key8 = 2;
	key9 = 2;
	key10++; 
  });
      // När man klickar utanför rutorna så nollställs allting igen 
       $('.Neutral').click(function() {
  	{
	$('.key1, .key2, .key3, .key4, .key5, .key6, .key7, .key8, .key9, .key10, .Alkalimetaller, .Jordart, .Adelgaser, .Ickemetaller, .Overgang, .Post, .Halv, .Halogener, .Lant, .Actnid, .ActnidKey, .Lantanoid, .oidentifierad, .Lant2, .Actnid2').css('opacity', '1');
	} 
	key1 = 2;
	key2 = 2;
	key3 = 2;
  	key4 = 2;
	key5 = 2;
	key6 = 2;
	key7 = 2;
	key8 = 2;
	key9 = 2;
	key10 = 2; 
  }); 
});

	var Legendknapp = 2;

//funktion för knappen som öppnar som öppnar förklaring. Skiftar mellan display:none och black när man klickar på den
$(function() {
    $('.Legendknapp').click(function() {
	  
	  
	  if (Legendknapp % 2 == 1){ 
	$('.Legend').css('display', 'none');	
	  } else {
		  
    
	$('.Legend').css('display', 'block');	
	  }
  	Legendknapp++;
	 
  });    
});



