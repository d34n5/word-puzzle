// Business Logic
$(document).ready(function(){

// User Interface Logic
  $("form").submit(function(event){
    event.preventDefault();
    var puzzleString = $("input#sentence").val();
    var removeArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    for (var i = 0; i < removeArray.length; i += 1) {
      var removeLetter = removeArray[i];
      console.log(puzzleString, removeArray);

      for (var i2 = 0; i2 < puzzleString.length; i2 += 1){
        puzzleString = puzzleString.replace(removeLetter, "-");
      }
      // while (puzzleString.match(removeLetter)) {
      //   puzzleString = puzzleString.replace(removeLetter, "-");
      // }
    };
    $("#output").text(puzzleString);
  });
});
