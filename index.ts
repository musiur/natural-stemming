import natural from "natural"

// stemmer function
export function GetStems(words: string[]){
  const stems: string[] = [];
  for (let i = 0; i < words.length; i++) {
    // stemming each words
    const stem = natural.PorterStemmer.stem(words[i]);
    stems.push(stem);
  }

  return stems;
};
