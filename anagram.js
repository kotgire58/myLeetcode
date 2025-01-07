//leetcode 242

function anagram(s,t){
    s1=s.split('')
    t1=t.split('')
    s1.sort()
    t1.sort()
    s1=s1.join('')
    t1=t1.join('')
    return s1==t1    


}

console.log(anagram("ana.gram","nagaram."))
