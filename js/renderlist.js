$(document).ready(function(){
    $.getJSON("js/generatelist.json", function(data){
        $.each(data, function(i, infos){
            $("tbody").append(
              '<tr>'+
                  '<td>'+infos.day+'</td>'+
                  '<td>'+infos.artist+'</td>'+
                  '<td>'+infos.time+'</td>'+
                  '<td>'+infos.venue+'</td>'+
                  '<td>'+infos.price+'</td>'+
              '</tr>'
            );
      });
  });
});
