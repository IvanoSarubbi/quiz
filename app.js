$(document).ready(function(){

    //opening animation for the title and start button//
	$(".title, .title2, .title3, .button").hide();
	$(".title").fadeIn(300, function(){
		$(".title2").fadeIn(300, function(){
		 $(".title3").fadeIn(300, function(){
		  $(".button").fadeIn(300);
		 });
	  });
	});
	

  /*whem the user clicks on the start button the 
  main div will expand and the images at the bottom will appear*/
  	var eveImage = $(".bg7");
   function runIt() {
       eveImage.animate({top:'+=20'}, 1000);
       eveImage.animate({top:'-=20'}, 1000, runIt);
   }

   
	$(".bg1, .bg3, .bg4, .bg5, .bg6, .bg7, .bg8, .quizBody, .gif1, .gif2, .answers, .restart").hide();
	$(function() {
    var state = true;
    $( ".button" ).click(function() {
      if ( state ) {
        $( ".main" ).animate({
          color: "#fff",
          height: 850
        }, 500, "easeInOutQuart", function(){
        	$( ".button" ).fadeOut(100, function(){;
        	$(".quizBody").fadeIn(500, function(){
        	$(".bg1").fadeIn(150, function(){
        	$(".bg3").fadeIn(150, function(){
        	$(".bg4").fadeIn(150, function(){
        	$(".bg5").fadeIn(150, function(){
        	$(".bg6").fadeIn(150, function(){	
        	$(".bg7").fadeIn(150, function(){
        	$(".bg8").fadeIn(200);
        		});
        	runIt();
        	});
        });
        });
        });
        });
        });
        });
        });
      }
      state = !state;
    });
	});




//set global variables
var questionsOrder = [];
var currentQuestion = 0;
var count = 1,
	numberCorrect = 0,
	currentQuestion = 0,
	$answers = $('#answers'),
	$count = $('#count'),
	$end = $('#end'),
	$quiz = $('#quiz'),
	$quizContainer = $('#quiz-container'),
	$restart = $('.restart'),
	$result = $('.result'),
	$resultFinal = $('.result-final'),
	$submit = $('.submit'),
	$totalCorrect = $('#total-correct');
	



var allQuestions = [{
    question: "In what year was Toy Story released?",
    answer: "The first Toy Story movie was released in 1995",
    choices: ["1995", "1998", "1992", "2001"],
    correctAnswer: 0
	}, 
	{
    question: "What was Nemo's advnture companion's name?",
    answer: "The correct answer is Dory",
    choices: ["Lucy", "Dory", "Nelly", "Dolly"],
    correctAnswer: 1
	}, 
	{
    question: "Where did the movie Ratatouille take place in?",
    answer: "The movie took place in beautiful Paris",
    choices: ["Tokyo", "Paris", "Rome", "New York City"],
    correctAnswer: 1
	}, 
	{
    question: "What is Wall-E favorite hobby?",
    answer: "Believe it or not but Wall-E favorite hobby is collecting things!",
    choices: ["Sleeping", "Reading", "Collection Things", "Drawing"],
    correctAnswer: 2
	}, 
	{
    question: "In the movie Cars what car model was Lightning McQueen?",
    answer: "Lighting McQueen is a Red Racing Car",
    choices: ["Fiat", "Volvo", "Red Racing Car", "Toyota"],
    correctAnswer: 2
	}, 
	{	
    question: "What is the latest movie relased by Pixar?",
    answer: "The latest movie relased by Pixar was Inside Out in 2015",
    choices: ["Toy Story 3", "Brave", "Monster University", "Inside Out"],
    correctAnswer: 3
}];



//checks the question number
var checkQuestion = function(){
	count++;
	$count.text(count);
};

//display questions 

var showQuestion = function(){
	$quiz.empty();
	$answers.empty();
	$quiz.append('<h3>'+allQuestions[currentQuestion].question + '</h3>');
	for (var i = 0; i <= 3; i++){
		document.getElementById('answers').innerHTML += '<input type="radio" name="choice" value='+i+'>' + allQuestions[currentQuestion].choices[i] + '<br/>';
	}
}

//check user's choice

var userChoice = function(){
	var choice = $('input[type="radio"]:checked').val();

		if (choice == undefined) {
			alert('Please make a selection');
		}
		else if (choice == allQuestions[currentQuestion].correctAnswer) {
			numberCorrect++;
			$totalCorrect.text(numberCorrect);
			$(".submit").hide();
			$('input[type="radio"]').attr("disabled",true);
			$result.text('Correct, Next Question').show();
		}
		else {
			$(".quiz-container").hide();
			$(".answers").slideDown();
			$(".answers").append('<h4>'+allQuestions[currentQuestion].answer + '</h4>');
			$(".submit").hide();
			$('input[type="radio"]').attr("disabled",true);
			$result.text('Next Question').show();
		}
}



showQuestion();

//buttons functionality
$(".restart").click(function(){
	location.reload();
});


$(".submit").click(function() {
	userChoice();
});

$(".close_button").click(function(){
	$(".quiz-container").show();
	$(".answers").slideUp();
	$(".answers").children("h4").remove();
	

});
	
$(".result").click(function(){
	$(".result").hide();
			$(".submit").show();
		if (currentQuestion <= 4) {
			currentQuestion++;
			showQuestion();
			checkQuestion();
		}
		else {
			$(".submit").hide();
			$resultFinal.text('End of Quiz! Check your score').show();
		};
});


//what happens when the quiz is over
$(".result-final").click(function() {
		$(".quiz-container").hide();
		
		
		if(numberCorrect <= 4) {
			$(".quizBody").prepend("Sorry!! You did not pass the test...you only got" + " " + numberCorrect + " " + "correct answers<br>" );
			$(".gif1").show();
			$(".restart").fadeIn(200);
		}else{
			$(".quizBody").prepend("Look at you! You got" + " " + numberCorrect + " " + "correct answers<br>" );
			$(".gif2").show();
			$(".restart").fadeIn(200);
		}
	});

});

