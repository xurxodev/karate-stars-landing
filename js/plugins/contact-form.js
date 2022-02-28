/*
 --------------------------------
 Ajax Contact Form
 --------------------------------
 + https://github.com/pinceladasdaweb/Ajax-Contact-Form
 + A Simple Ajax Contact Form developed in PHP with HTML5 Form validation.
 + Has a fallback in jQuery for browsers that do not support HTML5 form validation.
 + version 1.0.1
 + Copyright 2014 Pedro Rogerio
 + Licensed under the MIT license
 + https://github.com/pinceladasdaweb/Ajax-Contact-Form
 */

(function ($, window, document, undefined) {
    "use strict";

    var form = $("#contact-form"),
        messageContainer = $("#message-contact"),
        messageText = $("#message-contact .message-text");

    form.submit(function (e) {
        // remove the error class
        form.find(".form-group").removeClass("error");

        // get the form data
        var formData = {
            name: $('input[name="form-name"]').val(),
            from_email: $('input[name="form-email"]').val(),
            message: $('textarea[name="form-message"]').val(),
        };

        emailjs.send("mailgun", "template_HtOCJajp", formData).then(
            function () {
                // display success message
                messageText.html("Thanks, email sent correctly");
                form.find(".form-control").fadeIn().val("");

                messageContainer.slideDown("slow", "swing");
                setTimeout(function () {
                    messageContainer.slideUp("slow", "swing");
                }, 10000);
            },
            function (err) {
                messageText.html("An error has ocurred sending the email");

                messageContainer.slideDown("slow", "swing");
                setTimeout(function () {
                    messageContainer.slideUp("slow", "swing");
                }, 10000);
            }
        );

        e.preventDefault();
    });
})(jQuery, window, document);
