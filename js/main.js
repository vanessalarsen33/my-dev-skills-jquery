$('#form').submit(function(e){
var input = $('input').val();

var newRow = `<li><button class="delete">X</button>${input}</li>`;
    $("#newSkill").append(newRow); 
    e.preventDefault()
    $("input").val("");

    $('.delete').on('click', function(){
        $(this).parent().remove();
      });
});

