function isPalindrome(x){
        const s = String(x);
        const n = s.length;

        for(let i=0;i<n/2;i++){
                if(s.charAt(i) !== s.charAt(n-i-1))return false;
        }
        return true;
}

const pal = isPalindrome(121);
console.log(pal);

