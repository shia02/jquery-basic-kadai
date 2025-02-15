// $(function() {
//     $('button').on('click', function() {
//         console.log('click');
//     });
//     $('div').on({
//         'click': () => {
//             $('div').css('background-color', 'red');
//             $('div').text('click');
//         },
//         'dblclick' : () => {
//             $('div').css('background-color', 'green');
//             $('div').text('double click');
//         },
//         'mouseenter' : () => {
//             $('div').css('background-color', 'blue');
//             $('div').text('mouse enter');
//         },
//         'mouseout' : () => {
//             $('div').css('background-color', 'gray');
//             $('div').text('mouse out');
//         }
//     });

//     $(document).on('click keydown', (e) => {
//         if (e.type === 'click') {
//             $('div').text('click');
//         }
//         if (e.type === 'keydown') {
//             $('div').text('key down');
//         }
//     });
// });

$(function() {
    $('#red').on('click', function() {
        $('#target').css('color', 'red');
    });

    $('#blue').on('click', function() {
        $('#target').css('color', 'blue');
    });

    $('#add').on('click', function(){
        $('#target').toggleClass('sample');
    });

    $('#remove').on('click', function() {
        if ($('#target').hasClass('sample')) {
            console.log('sample');
        }
    });


});