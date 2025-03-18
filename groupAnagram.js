function groupAnagram(strs){
    let wordmap = new Map();
    let result = [];
    for(i=0;i<strs.length;i++){
        word = strs[i].split('').sort().join('');
        if(wordmap.has(word)){
            wordmap.get(word).push(strs[i])
        }else{
        wordmap.set(word,[strs[i]])}
    }
    // console.log(wordmap)
    return Array.from(wordmap.values())

}
console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))