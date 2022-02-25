//This function sends messages from Yoda
var computerReply = function(){

    //Collection of yoda quotes
    var yodaQuotes = ["Do or do not. There is no try.","You must unlearned what you have learned.","Named must be your fear before banish it you can.","Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.","The greatest teacher, failure is.","A gift it is, to pass on what you have learned."]

    //Random index generator
    var randoIndex = Math.floor(Math.random()*9000)

    //Random yoda quote generator using the randomly generated index
    var yodaQuote = yodaQuotes[randoIndex%yodaQuotes.length]


    //Creates a yoda message bubble div and adds approrpriate classes, then appends to the body.
        $yodaMessageBubble = $("<div>").html(yodaQuote).addClass("yodaReply").addClass("columnOne").appendTo("#chatMessageArea")

    $("<div>").addClass("columnTwo").appendTo("#chatMessageArea")
    $("<div>").addClass("columnThree").appendTo("#chatMessageArea")

    //Yoda message Timestamp
    var dateObj = new Date()
    var dateValue = dateObj.toDateString() +" "+dateObj.toLocaleTimeString()

    var $timeStamp = $("<span>").append("<br><br><em> Sent on "+dateValue+" from Planet Dagobah</em>");

    $yodaMessageBubble.append($timeStamp.css("font-size","small"))


}
        //Automatically generates the first message of the chat
        computerReply();


//This function instructs the webpage what to do when a user submits a chat.
$("#userMessageForm").on("submit",function(event){

    //Prevents browser from reloading since we're using the submit button (for a better UI)
   event.preventDefault();

    //Saves the user's new message and posts it in the chat after adding appropriate classes
    $userInput = $("#userMessage").val();
    $userMessageBubble = $("<div>").text($userInput).addClass("userReply").addClass("columnThree").appendTo("#chatMessageArea")

    //User message Timestamp
    var dateObj = new Date()
    var dateValue = dateObj.toDateString() +" "+dateObj.toLocaleTimeString()

    var $timeStamp = $("<span>").append("<br><br><em> Sent by you on "+dateValue+"</em>");

    $userMessageBubble.append($timeStamp.css("font-size","small"))


    //Resets the input form for better user experience
    this.reset();

    //Automatic yoda reply
    computerReply();

    //Automatic scroll down (**Citation: this line of code was taken from a post on Stack Overflow)
    window.scrollTo(0,document.body.scrollHeight);

})
