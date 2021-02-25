player_1_name = localStorage.getItem("player_1_name");
player_2_name = localStorage.getItem("player_2_name");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player_1_name").innerHTML = player_1_name + ":";
document.getElementById("player_2_name").innerHTML = player_2_name + ":";

document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;

document.getElementById("player_question").innerHTML = "Question turn - "+player_1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - "+player_2_name;

function Send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Word in lower case - "+word);

    charat1 = word.charAt(1);
    console.log(charat1);

    length_divided_by_2 = Math.floor(word.length/2);
    charat2 = word.charAt(length_divided_by_2);
    console.log(charat2);

    length_minus_1 = word.length - 1;
    charat3 = word.charAt(length_minus_1);
    console.log(charat3);

    remove_charat1 = word.replace(charat1, "_");
    remove_charat2 = remove_charat1.replace(charat2, "_");
    remove_charat3 = remove_charat2.replace(charat3, "_");
    console.log(remove_charat3);

    question_word = "<h4 id='word_display'> Q. "+remove_charat3+"</h4>";
     input_box = "<br>Answer : <input type='text' id='input_check_box'>";
      check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
       row = question_word + input_box + check_button ;
        document.getElementById("output").innerHTML = row;
        document.getElementById("word").value = "";

}

var question_turn = "player_1";
var answer_turn = "player_2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case is "+answer);
    if (answer == word) {
        if (answer_turn == "player_1") {
            player_1_score = player_1_score+1;
            document.getElementById("player_1_score").innerHTML = player_1_score;

        }
        else{
            player_2_score = player_2_score+1;
            document.getElementById("player_2_score").innerHTML = player_2_score;

        }
    }
    if (question_turn == "player_1") {
        question_turn = "player_2";
        document.getElementById("player_question").innerHTML = "Question Turn - "+player_2_name;
    }
    else{
        question_turn = "player_1";
        document.getElementById("player_question").innerHTML = "Question Turn - "+player_1_name;
    }

    if (answer_turn == "player_1") {
        answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - "+player_2_name;
    }
    else{
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - "+player_1_name;
    }
    document.getElementById("output").innerHTML = "";
}