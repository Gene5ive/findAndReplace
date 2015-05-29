var findAndReplace = function(sentence, find, replace) {
  sentence = sentence.split(" ");
  sentence = sentence.map(function(word) {
    return word === find ? replace : word;
  });
  sentence = sentence.join(" ");
  return sentence;
};

$(document).ready(function() {
  $("form").submit(function(event) {
    var sentence = ($("input#sentence").val());
    var find = ($("input#find").val());
    var replace = ($("input#replace").val());

    var newSentence = findAndReplace(sentence, find, replace);

    $("#return").show();
    $('#newSentence').text(newSentence);

    event.preventDefault();
  });
});
