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
