$(document).ready(function(){
  var partials = $('.partial');
  partials.each(function(element) {
    replacePartial(partials[element].id);
  });
});

function replacePartial(element){
  var rawFile = new XMLHttpRequest();
    rawFile.open("GET", `Partials/${element}.html`, false);

    rawFile.onreadystatechange = function (){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
                var allText = rawFile.responseText;
                $(`#${element}`).replaceWith(allText);
            }
        }
    }
    rawFile.send(null);
}
