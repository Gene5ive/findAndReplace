var findAndReplace = function(sentence, find, replace) {
  sentence = sentence.split(" ");
  sentence = sentence.map(function(word) {
    return word === find ? replace : word;
  });
  sentence = sentence.join(" ");
  return sentence;
};
