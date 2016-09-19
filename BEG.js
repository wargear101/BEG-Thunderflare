
$(document).ready(function () {
    $.get("http://ofcourse.oru.se/~IK2009/json/get_jobs.php", function (data) {
        if (data.status == 1) {
            $.each(data.result, function () {
                $('#jobPosition').append('<li class="job">' + this.city + ', <button class="showDesc"> ' + this.position + ' </button>, <p class="testa" style="display: none;">' + this.description + '</p>', '</li>');
            });
        }
    });

    $(document).on('click', '.showDesc', function () {
        $(this).next().toggle();
    });
});
