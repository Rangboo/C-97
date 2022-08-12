function logout()
{
    localStorage.removeItem("full_name");
    window.location.replace("index.html");
}
full_name = localStorage.getItem("full_name");
console.log(full_name);
document.getElementById("full_name").innerHTML = "Welcome " + full_name + "!";
function calBmi()
{
    localStorage.getItem("option3");
    localStorage.getItem("option2");
    option3 = document.getElementById("option3").value;
    option2 = document.getElementById("option2").value;
    height = Number(option2)*Number(option2);
    bmi = Number(option3)/Number(height);
    bmi=bmi.toFixed(3);
    document.getElementById("result").innerHTML = bmi;
}