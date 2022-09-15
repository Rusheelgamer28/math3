player_1 = localStorage.getItem("login 1")
player_2 = localStorage.getItem("login 2")


document.getElementById("p1").innerText = player_1 + " score is :"
document.getElementById("p2").innerHTML = player_2 + " score is :"

document.getElementById("q1").innerHTML = "Question Turn - " + player_1
document.getElementById("a1").innerHTML = "Answer Turn - " + player_2

function submit() 
{

    num = document.getElementById("num1").value
    num2 = document.getElementById("num2").value

    document.getElementById("output").innerHTML = "<h3>Q. "+ num + " x " + num2 +"</h3><h5>Answer <input type='text'> </h5> <button class='btn btn-info' >Check</button>"
}