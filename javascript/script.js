$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    }); 
    const sections = $('section');
    const navitems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        let activeSectionIndex = 0;
        
        console.log(scrollPosition);
        
        if (scrollPosition <= 0){
            header.css('box-shadow', '1px 1px 10px rgba(94, 255, 0, 0)');
        }else{
            header.css('box-shadow', '1px 1px 10px rgba(94, 255, 0, 0)');
        }

        sections.each(function(i){ 
            const section = $(this);
            const sectionTop = section.offset().top - 69;
            const sectionBottom = sectionTop + section.outerHeight();

            if(scrollPosition >= sectionTop && scrollPosition <= sectionBottom){
                activeSectionIndex = i;
                return false; 
            }
        });

        $(navitems).removeClass('active');
        $(navitems[activeSectionIndex]).addClass('active');
    });
});
