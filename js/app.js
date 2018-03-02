(function main() {

    // ######## SANDBOX CONTAINING SNIPPETS OF CODE WHICH I CAN 
    // ######## POSSIBLY USE OR NEED TO KEEP FOR TE MOMENT
    // ######## 
    // ######## THESE SNIPPETS ARE 'COMMENTED' TO AVOID 
    // ######## INTERFERENCE WITH THE PROPER JAVASCRIPTCODE

    // var test = function ()  {
    //   object= document.getElementById("bouton")
    //   object.onclick=function() {

    //       function ;

    //             var nombre1 = parseInt(document.getElementById("nombre1").value);

    //             var resultat = nombre1+nombre2;
    //             alert (resultat);

    //       endfunction;
    //     }
    // }  

    // <script type="text/javascript">

    //   function calculateTotal() {

    //     var totalAmt = document.addem.total.value;
    //     totalR = eval(totalAmt - document.addem.tb1.value);

    //     document.getElementById('update').innerHTML = totalR;
    //   }

    // </script>

    // <form name="addem" action="" id="addem" > 
    //   <span id="update">100</span>
    //   <p><input type="text" name="tb1" onkeyup="calculateTotal()"/>first textbox</p>

    //   <input type="hidden" name="total" value="100" />
    // </form>


    // on ENTER simulate TAB to move to next field 
    $('form input').keydown(function(e) {
        if (e.keyCode == 13) {
            var inputs = $(this).parents("form").eq(0).find(":input");
            if (inputs[inputs.index(this) + 1] != null) {
                inputs[inputs.index(this) + 1].focus();
            }
            e.preventDefault();
            return false;
        }
    });



   
    $("input").blur(function() {
        var ldf = ldc = ldo = lad = ltd = lrs = lra = lrr = lar = ltr = lep = ltx = 0;

        // fixed expences
        var a = ($("#DF1").val()) * 1;
        var b = ($("#DF2").val()) * 1;
        var c = ($("#DF3").val()) * 1;
        var d = ($("#DF4").val()) * 1;
        var e = ($("#DF5").val()) * 1;
        var f = ($("#DF6").val()) * 1;
        var g = ($("#DF7").val()) * 1;
        var h = ($("#DF8").val()) * 1;
        var i = ($("#DF9").val()) * 1;

        ldf = a + b + c + d + e + f + g + h + i;
        $("#STDF").val(ldf);

        // general expences
        var a = ($("#FC1").val()) * 1;
        var b = ($("#FC2").val()) * 1;
        var c = ($("#FC3").val()) * 1;

        // calculate/convert expenditures
        // weekly expenditures * 4.16 = monthly (=52/12)
        // yearly expenditures / 12   = monthly
        a *= 4, 16;
        b *= 4, 16;
        c /= 12;
        $("#DC1").val(a);
        $("#DC2").val(b);
        $("#DC3").val(c);

        ldc = a + b + c;
        $("#STDC").val(ldc);

        // occaisional expences
        var a = ($("#FC4").val()) * 1;
        // calculate/convert expenditures
        // weekly expenditures * 4.16 = monthly (=52/12)
        a *= 4, 16;
        $("#DO1").val(a);

        ldo = a;
        $("#STDO").val(ldo);

        // other expences
        var a = ($("#AD1").val()) * 1;
        var b = ($("#AD2").val()) * 1;
        var c = ($("#AD3").val()) * 1;
        var d = ($("#AD4").val()) * 1;
        var e = ($("#AD5").val()) * 1;

        lad = a + b + c + d + e;
        $("#STAD").val(lad);


        // total depences
        ltd = ldf + ldc + ldo + lad;
        $("#STTD").val(ltd);


        // revenue salary
        var a = ($("#RS1").val()) * 1;
        var b = ($("#RS2").val()) * 1;

        lrs = a + b;
        $("#STRS").val(lrs);

        // revenue support
        var a = ($("#RA1").val()) * 1;
        var b = ($("#RA2").val()) * 1;
        var c = ($("#RA3").val()) * 1;

        lra = a + b + c;
        $("#STRA").val(lra);

        // revenue interret
        var a = ($("#RR1").val()) * 1;

        lrr = a;
        $("#STRR").val(lrr);

        // other revenues
        var a = ($("#AR1").val()) * 1;
        var b = ($("#AR2").val()) * 1;
        var c = ($("#AR3").val()) * 1;
        var d = ($("#AR4").val()) * 1;
        var e = ($("#AR5").val()) * 1;

        lar = a + b + c + d + e;
        $("#STAR").val(lar);

        // savings
        var a = ($("#EP1").val()) * 1;

        lep = a;

        // total revenue
        ltr = lrs + lra + lrr + lar;
        $("#STTR").val(ltr);

        // calculate result
        ltx = ltr - (ltd + lep);
        $("#STXX").val(ltx);

    });



    // #######  Sticky navbar  ####### 
    // #######  =============  ####### 
    $(document).ready(function() {
        // Custom function which toggles between sticky class (is-sticky)
        var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
            var stickyHeight = sticky.outerHeight();
            var stickyTop = stickyWrapper.offset().top;
            if (scrollElement.scrollTop() >= stickyTop) {
                stickyWrapper.height(stickyHeight);
                sticky.addClass("is-sticky");
            } else {
                sticky.removeClass("is-sticky");
                stickyWrapper.height('auto');
            }
        };

        // Find all data-toggle="sticky-onscroll" elements
        $('[data-toggle="sticky-onscroll"]').each(function() {
            var sticky = $(this);
            var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
            sticky.before(stickyWrapper);
            sticky.addClass('sticky');

            // Scroll & resize events
            $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
                stickyToggle(sticky, stickyWrapper, $(this));
            });

            // On page load
            stickyToggle(sticky, stickyWrapper, $(window));
        });
    });




    // ####### Native browser smooth scrolling with jQuery              #######
    // ####### https://css-tricks.com/snippets/jquery/smooth-scrolling  #######

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    // ####### END SMOOTH SCROLLING #######




    // #######  Sticky BACK to TOP button  #######
    // https://cotswoldphoto.co.uk/bootstrap-float-to-top-button 
    // 
    $(document).ready(function() {
        // "Back to top" for english version, "Haut de page" for french version
        $('body').append('<div id="toTop" class="btn btn-back"><i class="fa fa-arrow-up"></i>Haut de page</div>');
        $(window).scroll(function() {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });
        $('#toTop').click(function() {
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    });
    //
    // #######  END BACK to TOP button  #######



})();