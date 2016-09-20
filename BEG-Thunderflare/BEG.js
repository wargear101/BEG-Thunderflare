
// När användaren trycker på knappen så öppnas rutan
function button(item) {

    var currentModal = $(item).attr('id');
    
	$('#myModal'+ currentModal).css('display', 'block');

}

// När användaren trycker på x så stängs rutan ner

   function closeModal(item) {
    var closeId = $(item).attr('id');
    var modalId = "#myModal" + closeId.substring(5,6);
    $(modalId).css('display', 'none');
    
   }
   
	//Hämtar xml-filen och sedan tar ut titeln på nyhetsrubriken samt brödtexten och datumet
$.get('http://ofcourse.oru.se/~IK2009/xml/get_news.php', function(data){
	$('#newsBeg').empty();
	$(data).find('article').each(function(){
		var article = $(this);
		var nyheter = '<p>';
		nyheter += article.find('title').text();
		nyheter += '<br />';
		nyheter += article.find('bodytext').text();
		nyheter += '<br />';
		nyheter += article.find('date').text();		
		nyheter += '</p>';
		$('#newsBeg').append($(nyheter));
	});
}); 

//Anropas när man klickar på kartan
function hamtaOrebro(){
    hamtaStad("orebro");
}
 
function hamtaGoteborg(){
    hamtaStad("goteborg");
}
 
function hamtaSheffield(){
    hamtaStad("sheffield");
}
 
function hamtaToronto(){
    hamtaStad("toronto");
}
 
function hamtaUsa(){
    hamtaStad("snoqualmie");
}
function hamtaKyoto(){
    hamtaStad("kyoto");
}
function getCity(item){
	var city = $(item).attr('title');
	hamtaStad(city);
}
function hamtaStad(stad){
    $.getJSON(
        //Använder url:n och sedan vilken stad som ska anropas.
        'http://ofcourse.oru.se/~IK2009/json/get_office.php?city=' + stad,
        function (data){
            if(data.status == 1){
            $('#skrivUtStad').empty();
            var kontor = '<p>'
            kontor += 'Stad: ' + data.result.name + '<br/>';
            kontor += 'address: ' + data.result.address + '<br/>';
            kontor += 'Telefonnummer: ' + data.result.phone + '<br/>';
            kontor += '</p>';
            $('#skrivUtStad').append($(kontor));
       
            }
            if(data.status == 0){
                $('#skrivUtStad').empty();
                var kontor = '<p>'
                kontor += 'Det finns inget kontor i ' + stad;
                kontor += '</p>';
                $('#skrivUtStad').append($(kontor));
               
            }
           
           
        }
    );
}

function sendForm() {
	//Hämtar alla värden från formuläret med hjälp av DOM
	var email = document.getElementById('email');
	epost = email.value;
	var question = document.getElementById('questBox');
	question = question.value;
	var name = document.getElementById('name');
	name = name.value;
	//Kollar om strängarna är tomma
	if (!email || !name || !question) {
		alert("Vänligen fyll i alla fält");
	}
	//Validerar epostaddressen
	else if (!/(.+)@(.+){2,}\.(.+){2,}/.test(epost)) {
		alert("Epostadressen måste innehålla ett @ och en .");
	} else {
		//Om det går igenom valideringen körs ett anrop till en server och returnerar ett meddelande.
		$('#submit').click(function() {
			$.ajax({
				url : 'http://ofcourse.oru.se/~IK2009/contactform/contact_form.php',
				type : 'GET',
				success : function(msg) {
					alert(msg);
				},
				error : function() {
					alert('Nu var det något som gick fel :(');
				}
			});
		});
	}
};

$(document).ready(function () {

    /* använder get-metod för att hämta extern data genom json */

    $.get("http://ofcourse.oru.se/~IK2009/json/get_jobs.php", function (data) {
        if (data.status == 1) {

     /*  each-metod för att fördela datan vi fått in i en div. */

            $.each(data.result, function () {

     /* när stringarna fördelas har vi lagt dem i paragraf och button element inuti en lista*/

                $('#jobPosition').append('<li class="job">', '<p class="cityDesc">' + this.city + '</p>', '<button class= "showDescBtn">' + this.position + '</button>', '<p class="jobDesc" style="display: none;">' + this.description + '</p>', '</li>');
            });
        }
    });

      /* använder .on för att trigga vår klick-knapp */

    $(document).on('click', '.showDescBtn', function () {

      /* använder .next() att fånga in efterföljande p-element och .slidetoggle() för att visa/dölja det */

        $(this).next().slideToggle();
    });
});