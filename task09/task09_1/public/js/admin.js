$(function () {
    $('.del').click(function (e) {
        var target = $(e.target);
        var id = target.data('id');
        var tr = $('.item-id-' + id);

        $.ajax({
            type: 'DELETE',
            url: '/admin/control/delete?newsid=' + id
        })
        .done(function (results) {
          
            tr.remove();
             
        })
    });
});
