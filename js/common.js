//гамбургер

function down_menu()
{
    let a = document.querySelectorAll('.hamburger_box');
    for(let i = 0, l = a.length; i < l; i++){
    if ( a[i].style.display == 'block' )
    a[i].style.display = 'none'
    else
    a[i].style.display = 'block';
}
}

function down_hamburger()
{
    let a = document.querySelectorAll('.hamburger_box');
    for(let i = 0, l = a.length; i < l; i++){
    if ( a[i].style.display == 'block' )
    a[i].style.display = 'none'
    else
    a[i].style.display = 'block';
}
}


// кнопка плеера

$(document).on('click', '.movie_btn', function() {
	let $video = $('#video'),
		src = $video.attr('src');
 
	$video.attr('src', src + '&autoplay=1');
});



