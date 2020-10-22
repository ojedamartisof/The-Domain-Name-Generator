
window.onload = () => {
    var pronoun = ['The', 'Our', 'My', 'Your', 'We'];
    var adj = ['great', 'big', 'awesome', 'amazing', 'perfect'];
    var noun = ['monkey', 'racoon', 'elephant', 'dog', 'bird'];
    let result = "";
    for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
            for (let k = 0; k < noun.length; k++) {
                console.log(pronoun[i] + adj[j] + noun[k] + ".com");
                result += pronoun[i] + adj[j] + noun[k] + ".com" + "</br>";
                document.querySelector("#container").innerHTML = result;
            }
        }
    }
}