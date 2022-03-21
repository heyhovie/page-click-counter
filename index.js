var counts = [];
$(document).click(function(event){
  counts.push(event);
  if (counts.length < 100){
    $("h1.counter").text(counts.length);
  }else{
    alert("Alright that's enough for one day!")
    location.reload();
  }
})
