/*==========================================
 DISPLAY AND HIDE GAME RULE
==========================================*/
const rules_btn = document.querySelector(".rules_btn");
const rules_conn = document.querySelector(".rules_conn");
const close_rules_btn = document.querySelector(".close_rules_btn");

rules_btn.onclick = ()=>{
	rules_conn.classList.add("open_rules");
}
close_rules_btn.onclick = ()=>{
	rules_conn.classList.remove("open_rules");
}
/*==========================================
 CALLING ALL THE DIV CLASS WE NEED
==========================================*/
/* Calling all the item of the game "rock, paper, scissors" */
const paper = document.querySelector(".paper_one");
const scissors = document.querySelector(".scissors_one");
const rock = document.querySelector(".rock_one");
/* Calling (the div that) display what you and com pick */
const my_pick = document.querySelector(".my_pick");
const com_pick = document.querySelector(".com_pick");
/* Calling the two(2) section we have,
(1) The section for picking,
(2) And the section for deciding who win the game.
*/
const play_game = document.querySelector(".play");
const who_won = document.querySelector(".who_won");
/*
(1) Calling the html tag to alart who win, either "you win" or "com win".
(2) And calling the play-again btn, to let u play the game again
*/
const who_win = document.querySelector(".who_win");
const play_again = document.querySelector(".play_again");
/* The html div for displaying the score */ 
const score_num = document.querySelector(".num");
/*========================================================================
 --THIS LET YOU TO DISPLAY THE WHO-WIN SECTION AFTER AN ITEM IS CLICKED
 --THIS ALSO MAKE SURE U ALWAYS REMOVE THE '.WINNER' CSS CLASS NAME FROM ANY ITEM THAT WON
=======================================================================*/
function DisplayNxtPage_and_RemoveWinnerClass() {
	play_game.style.display = "none";
	who_won.style.display = "flex";

	my_pick.classList.remove("winner");
	com_pick.classList.remove("winner");
}
/*========================================================================
 THIS EITHER INCREMENT(+) OR DECREMENT(-) THE SCORE NUM, WHEN A PLAYER WIN OR LOSES...
=======================================================================*/
var i = 0;
score_num.innerText = 0;
function increment_score() {
	score_num.innerText = ++i;
}
function decrement_score() {
	score_num.innerText = --i;
}
/*========================================================================
 THIS IS THE FUNCTIONS THAT CHECK WHO HAS WON BTW U & COM, AND THEN DISPLAY IT BACK TO THE SCREEN
=======================================================================*/
function check_who_won(){
	if (my_pick.innerHTML == paper.innerHTML && com_pick.innerHTML == rock.innerHTML || 
		my_pick.innerHTML == scissors.innerHTML && com_pick.innerHTML == paper.innerHTML || 
		my_pick.innerHTML == rock.innerHTML && com_pick.innerHTML == scissors.innerHTML) 
	{
    	who_win.innerText = "you win";
    	my_pick.classList.add("winner");
    	increment_score();
    }
    else if (my_pick.innerHTML == paper.innerHTML && com_pick.innerHTML == scissors.innerHTML || 
    	my_pick.innerHTML == scissors.innerHTML && com_pick.innerHTML == rock.innerHTML || 
    	my_pick.innerHTML == rock.innerHTML && com_pick.innerHTML == paper.innerHTML)
    {
        who_win.innerText = "you lose";
        com_pick.classList.add("winner");
        decrement_score();
    }
    else if (my_pick.innerHTML == paper.innerHTML && com_pick.innerHTML == paper.innerHTML || 
    	my_pick.innerHTML == scissors.innerHTML && com_pick.innerHTML == scissors.innerHTML || 
    	my_pick.innerHTML == rock.innerHTML && com_pick.innerHTML == rock.innerHTML)
    {
        who_win.innerText = "it's a draw";
    }
    else{
    	alert("Their seems to be an error in the code.... Sorry about that :)");
    }
}
/*=======================================================
 MAKING USE OF ALL THE ITEM IN THE GAME (ROCK, PAPER, SCISSORS)
========================================================*/
paper.onclick = ()=>{
	const item_array = [paper,scissors,rock];
	const random = item_array[Math.floor(Math.random() * item_array.length)];
    DisplayNxtPage_and_RemoveWinnerClass();
	my_pick.innerHTML = paper.innerHTML;
	com_pick.innerHTML = random.innerHTML;
	check_who_won();
}
scissors.onclick = ()=>{
	const item_array = [paper,scissors,rock];
	const random = item_array[Math.floor(Math.random() * item_array.length)];
    DisplayNxtPage_and_RemoveWinnerClass();
	my_pick.innerHTML = scissors.innerHTML;
	com_pick.innerHTML = random.innerHTML;
	check_who_won();
}
rock.onclick = ()=>{
	const item_array = [paper,scissors,rock];
	const random = item_array[Math.floor(Math.random() * item_array.length)];
    DisplayNxtPage_and_RemoveWinnerClass();
	my_pick.innerHTML = rock.innerHTML;
	com_pick.innerHTML = random.innerHTML;
	check_who_won();
}
/*======================================================
 PLAY AGAIN BTN TO ENABLE U TO CONTINUE PLAYING THE GAME
=======================================================*/
play_again.onclick = ()=>{
	play_game.style.display = "flex";
	who_won.style.display = "none";
}


