const shareButton = document.getElementById("btn");

function OP () {
    if (navigator.share) {
        navigator.share({
            text : 'please read this great article : ',
            url:'https://google.com'
        }).then (() => {
            console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
        window.alert("Hii")
    }
} 

