const shareButton = document.getElementById("btn");

shareButton.addEventListener('click', e => {


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
});