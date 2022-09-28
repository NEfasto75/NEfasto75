
/* const ave = function() {
 var x = 15;
 return x;
};

const cesare = function() {
    var y = ave();
    console.log(y);
};
cesare(); */

{/* <script>
        const greeting = function () {
          let person = prompt("Welcome! What is your name?");
          if (person != null) {
            document.getElementById("dude").innerHTML =
              "Hey " + person + "! How are you?";
          }
          window.person = person;
        };

        const guessTheNumber = function (pickNumber) {
          let getNumber = Math.floor(Math.random() * 5 + 1);
          if (pickNumber == getNumber) {
            alert("Congratulations! You won the game.");
            alert("Bye ," + person + " see you!");
          } else {
            alert(
              "Ops! It seems you choose the wrong number...\n The right number was " +
                getNumber
            );
            alert("Try again.");
          }
        };
      </script> */}

     /*  let box = 0;
      for (item = 5; item != box; box++)
      { console.log("goodbye!")}
      console.log(box); */

      /* let age = 0;
      while (age != 5) {
        console.log(age);
        age++;
      } */
      /* let getNumber = Math.floor(Math.random() * (5 - 4 + 1) + 4);
      console.log(getNumber); */
      const guessTheNumber = function () {
        let min = parseInt(prompt('choose your min number: '));
        let max = parseInt(prompt('choose your max number: '));
        let getNumber = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(getNumber);
      };
      guessTheNumber();