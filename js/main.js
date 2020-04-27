$(document).ready(function() {

    // REFERENCES
    var myApi = 'https://flynn.boolean.careers/exercises/api/random/int';
    var square = $('.Grid-square');


    // CLICK EVENT
    square.click(function() {
        var self = $(this);
        
        $.ajax({
            url: myApi,
            method: 'GET',
            success: function(data) {
                self.text(data.response);

                if (data.response <= 5 ) {
                    self.removeClass('Grid-square--yellow Grid-square--green')
                    self.addClass('Grid-square--yellow');
                } else {
                    self.removeClass('Grid-square--yellow Grid-square--green')
                    self.addClass('Grid-square--green');
                }
            },
            error: function() {
                console.error('Chiamata Ajax non riuscita');
            }
        });
    });

}); // <-- End ready