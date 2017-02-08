
(function($) {
   $(document).ready(function(){

   var popupOn = false;
     
   //#################################
   // Step 1, Step 2, Step 3 ....
   //#################################
   
   //add Interactiv behaviour for step1, step2, step3
    $('.threeStepsBox').on('click', '.step', function(){
        var stepSel = $(this),
            allSteps = stepSel.parent().find('.step');
            stepNumber = stepSel.data('stepNr'),
            progressBar = $('.stepLines span'),
            currentSteps = progressBar.attr('class').split(/\s+/);
        
        //if first selected others without blue, is second just last one without blue etc...
        if( stepNumber === 0 ){
            //remove class blue form each and set for first
            allSteps.removeClass('blue');
            
            //add for first
            stepSel.addClass('blue');

            //change progress bar
            progressBar.removeClass(currentSteps[currentSteps.length-1]).addClass('step'+stepNumber);
        }

        if( stepNumber > 0 ) {
            allSteps.removeClass('blue');

            //add blue class for text steps
            $.each( $(allSteps), function(ind, val){
                if( ind <= stepNumber ){
                    $(val).addClass('blue');
                }
            });

            //change progress bar
            progressBar.removeClass(currentSteps[currentSteps.length-1]).addClass('step'+stepNumber);
        }
    });

    //#################################
    // Setup your transaction ...
    //#################################
    $('.buttonsTouch').on('click', '.button', function(){
        var selButton = $(this);
        
        //remove all selection
        selButton.parent().find('.button').removeClass('blue');

        //add blue class to selected button
        selButton.addClass('blue');
    });

    //#################################
    // Trigger popup - butoon ...
    //#################################
    $('.nextBtn a').on('click', function(e){
        e.preventDefault();
        
        //show transparent - dark background and popup
        $('.popup').css('display', 'block');
        $('.insidePopup').css('display', 'block');

        //go to top
        $('html, body').animate({ scrollTop: $('.insidePopup').offset().top - 40}, 'slow');
    });

    //hide popup
    $('.popup').on('click', function(e){
        
        //hide transparent - dark background and popup
        $('.popup').css('display', 'none');
        $('.insidePopup').css('display', 'none');
    });


   });
})(jQuery);