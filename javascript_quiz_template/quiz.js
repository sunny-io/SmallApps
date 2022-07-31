

function myReset() {
        /*
    reset function: reset button empties form fields automatically, this  function only deleted the result and markings */ 
        console.log('reset called');
        
        //Empty result
        document.getElementById("yourResult").innerHTML = " ";

        //find aquestions with class = "correct"

        let righto = document.getElementsByClassName('correct');
       // console.log("Elemente mit Klasse korrekt:"+ righto.length + " " + righto[0].id);
        //loop through elements to remove class
        
       while (righto[0]) {
            righto[0].classList.remove('correct');
       }

        //find aquestions with class = "wrong"
        var wrongo = document.getElementsByClassName('wrong');
    //loop through elements to remove class
         while (wrongo[0]) {
            wrongo[0].classList.remove('wrong');

        }
        
    }
    
function getresults() {
        //function to evaluate form and display result
        
        //solution array of arrays [id of question, id of correct answer]
        // if you have more questions, add them here. Make sure to set the question IDs and Answer-Ids!
        var sol = [
            ["q1", "Q1Antwort2"],
            ["q2", "Q2Antwort3"],
            ["q3", "Q3Antwort1"]
        ];

        //Check: Count div.question and match with sol
        var questions = document.getElementsByClassName("question");
            //console.log(questions.length)
        
        if (questions.length != sol.length){
            alert("Check number of questions in var sol and HTML code: Number mismatch");
        }


        //Collect answers

        var yourAnswers = [];

        //loop through questions and store checked item is yourAnswers
        for (var i = 1; i <= questions.length; i++){
            var name= "antwort" + i;
            var answers = document.getElementsByName(name);
            //console.log(answers);
            for (var j= 0; j< answers.length; j++){
                
                if (answers[j].checked){
                    console.log("j-loop" + answers[j].value);
                    yourAnswers.push(answers[j].value);
                }
            }


        }
        //console.log("yourAnswers= " + yourAnswers)


        //compare yourAnswers with sol
        var correctAnswers = 0;

        for (var k=0; k< sol.length; k++){
          //loop through sol to extract and compare answer

            var findq = document.getElementById(sol[k][0]);
            //console.log("aktuelle Frage: " + sol[k][0]);
            //console.log(findq);

            if (sol[k][1] === yourAnswers[k]){
                
                //set class for correct answer
                findq.classList.add("correct");

                //increase counter for correct answers
                correctAnswers +=1;



            }
            else{
                //set class for worng answer
                findq.classList.add("wrong");
            } 
        }
        //console.log(correctAnswers);

        //generate String for result 
        var resulttext = "Du hast " + correctAnswers + " von " + sol.length + " richtig.";
        if (correctAnswers === sol.length){
            resulttext += " Gratuliere!";
        }
        //console.log(resulttext);

        //append text to div.yourResult
        target = document.getElementById('yourResult');
        //console.log(target);
       
        target.append(resulttext);

        
        
        
        
        
    }
    

