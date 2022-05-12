// When document is loaded
$(document).ready(function()
{
    // Function to switch duck pictures (if I want to implement more)
    $(".switchDuck").click(function(){
        // Array of duck pictures
        const ducks = ["Ducc.png", "Ente_wurzel_1.png"];
        // Replace image
        $("#duck").attr("src", ducks[Math.floor(Math.random()*2)]);
        x = 0;
        //$("#duck").attr("src", "Ente_wurzel_1.png");
    });
    // Secret easter egg
    $("#duck").click(function(){
        alert("Follow me on Twitter or I'm gonna duck you!");
        $("p").html('<a href="http://twitter.com/kakaofanatiker">Follow me on Twitter or I\'m gonna duck you!</a>');
        console.log("Du HS!");
    });
});
