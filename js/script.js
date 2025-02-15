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

// $(function() {
//     $('#red').on('click', function() {
//         $('#target').css('color', 'red');
//     });

//     $('#blue').on('click', function() {
//         $('#target').css('color', 'blue');
//     });

//     $('#add').on('click', function(){
//         $('#target').toggleClass('sample');
//     });

//     $('#remove').on('click', function() {
//         if ($('#target').hasClass('sample')) {
//             console.log('sample');
//         }
//     });
// });

// $(function() {
//     const p = $('p').text('Jquery');
//     p.append('<br>add content');

//     let num = 0;
//     $('#append').on('click', function() {
//         num++;
//         $('ul').append('<li>追加したコンテンツ'+ num + '</li>');
//     })
//     $('#remove2').on('click', function() {
//         num--;
//         $('li:last').remove();
//         if( num < 0) {
//             num = 0;
//         }
//     });
//     $('#show').on('click', function() {
//         $('ul').show();
//     });
//     $('#hide').on('click', function() {
//         $('ul').hide();
//     });
// });

$(function() {
    $('#check').on('click', function() {
        console.log('name:' + $('[name="username"]').val());
        console.log('gender:' + $('[name="gender"]:checked').val());
        console.log('blood:' + $('[name="blood"]').val());
        $('[name="hobby"]:checked').each(function() {
            console.log('hobby:' + $(this).val());
        });
    });

    $('[name="username"]').on("input", function() {
        let input = $(this).val();
        if (input) {
            $('#check').prop('disabled', false);
        } else {
            $('#check').prop('disabled', true);
        }
    })

    $('[name="hobby"]').on('change', function() {
        if ($('[name="hobby"]:checked').length > 3) {
            $(this).prop('checked', false);
            alert('3つまで');
        }
    });
});