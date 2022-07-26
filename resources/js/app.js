const
  range = document.getElementById('range'),
  rangeV = document.getElementById('rangeV'),
  range2 = document.getElementById('range2'),
  rangeV2 = document.getElementById('rangeV2'),
  setValue = ()=>{
    const
      newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
      newPosition = 10 - (newValue * 0.2);
    rangeV.innerHTML = `<span>${range.value}</span>`;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;

    const
      newValue2 = Number( (range2.value - range2.min) * 100 / (range2.max - range2.min) ),
      newPosition2 = 10 - (newValue2 * 0.2);
    rangeV2.innerHTML = `<span>${range2.value}</span>`;
    rangeV2.style.left = `calc(${newValue2}% + (${newPosition2}px))`;
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);
range2.addEventListener('input', setValue);


$('#fill_adv').click(function(){ 
  $(this).toggleClass('active');
  $('#fill_adv_sub').toggleClass('active');
})

// Listen for click on toggle checkbox
  $('#input-all').change(function () {
    $('.cb-elm').prop('checked',this.checked);
  });
  $('.cb-elm').change(function () {
    if ($('.cb-elm:checked').length == $('.cb-elm').length){
      $('#input-all').prop('checked',true);
    }
    else {
      $('#input-all').prop('checked',false);
    }
  });

  $('#input-cp-all').change(function () {
    $('.cb-elm-cp').prop('checked',this.checked);
  });
  $('.cb-elm-cp').change(function () {
    if ($('.cb-elm-cp:checked').length == $('.cb-elm-cp').length){
      $('#input-cp-all').prop('checked',true);
    }
    else {
      $('#input-cp-all').prop('checked',false);
    }
  });

  $('#input-tm-all').change(function () {
    $('.cb-elm-tm').prop('checked',this.checked);
  });
  $('.cb-elm-tm').change(function () {
    if ($('.cb-elm-tm:checked').length == $('.cb-elm-tm').length){
      $('#input-tm-all').prop('checked',true);
    }
    else {
      $('#input-tm-all').prop('checked',false);
    }
  });

// show click Feature
$("#show").click(function(){
  $(this).toggleClass('transform')
  $("#list_selector").toggle("slow");
});