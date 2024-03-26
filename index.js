const natural = require("natural");

// stemmer function
const GetStems = (words) => {
  const stems = [];
  for (let i = 0; i < words.length; i++) {
    // stemming each words
    const stem = natural.PorterStemmer.stem(words[i]);
    stems.push(stem);
  }

  return stems;
};

module.exports = { GetStems };
