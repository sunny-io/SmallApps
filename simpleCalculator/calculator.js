/* ADD EVENTLISTENER TO ALL BUTTONS*/

/*Create array for all elements of type button*/
var buttons = document.getElementsByTagName("button");

/*Loop trough array to attach Listeners*/

for (i = 0; i < buttons.length; i++) {

buttons[i].addEventListener("click", function()
    {

      /*change events for 'clear' and 'calc' buttons by ID*/
        switch(this.id){
            case "calc":   document.getElementById("calculator").value = eval(
              document.getElementById("calculator").value
            );
            break;
            case "clear": document.getElementById("calculator").value = ""; break;
            default:  var input = this.id;
          document.getElementById("calculator").value += input; break;

        }
       }


);
}