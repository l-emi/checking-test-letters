# Checking Test - Letters
###[Numbers version here](https://l-emi.github.io/checking-test/)

This is the same as the original, but with letters instead. 

Code used to generate random strings of letters and the answer position: 

```javascript
function gen(length) {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function choose() {
  return Math.floor(Math.random() * (4 - 0 + 1)) + 0;  
}

console.log("[" + "'" + gen(5) + "', '" + gen(5) + "', '" + gen(5) + "', '" + gen(5) + "', '" + gen(5) + "', "  + choose() + "]");
"['hbuhx', 'xdolz', 'oymek', 'mcvhb', 'xwxis', 2]"
```

![Preview Image](http://i.imgur.com/Vbrla2U.png?1)
