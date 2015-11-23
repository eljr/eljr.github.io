/*!
 * Clean Blog v1.0.0 (http://startbootstrap.com)
 * Copyright 2014 Start Bootstrap
 * Licensed under Apache 2.0 (https://github.com/IronSummitMedia/startbootstrap/blob/gh-pages/LICENSE)
 */

// Contact Form Scripts
jQuery(document).ready(function() {
     
    /*
        Fullscreen background
    */
    $.backstretch("assets/img/backgrounds/1.jpg");
     
    /*
    Contact form
    */
    $('.contact-form form input[type="text"], .contact-form form textarea').on('focus', function() {
        $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('input-error');
    });
    $('.contact-form form').submit(function(e) {
        e.preventDefault();
        $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('input-error');
        var postdata = $('.contact-form form').serialize();
        $.ajax({
            type: 'POST',
            url: 'assets/contact.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.emailMessage != '') {
                    $('.contact-form form .contact-email').addClass('input-error');
                }
                if(json.subjectMessage != '') {
                    $('.contact-form form .contact-subject').addClass('input-error');
                }
                if(json.messageMessage != '') {
                    $('.contact-form form textarea').addClass('input-error');
                }
                if(json.antispamMessage != '') {
                    $('.contact-form form .contact-antispam').addClass('input-error');
                }
                if(json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '' && json.antispamMessage == '') {
                    $('.contact-form form').fadeOut('fast', function() {
                        $('.contact-form').append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
                        // reload background
                        $.backstretch("resize");
                    });
                }
            }
        });
    });
     
});
  
