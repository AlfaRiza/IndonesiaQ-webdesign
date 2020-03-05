$(window).on('scroll', function () {
    console.log('berhasil');
    if ($(window).scrollTop()) {
        $('.navbar').addClass('bg-dark');
        $('li').addClass('list-white');
        $('.list-item a').removeClass('list-item');
    } else {
        $('.navbar').removeClass('bg-dark');
        $('li').removeClass('list-white');
        $('.list-white a').addClass('list-item');
    }
});