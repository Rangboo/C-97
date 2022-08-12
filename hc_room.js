full_name = localStorage.getItem("full_name");
document.getElementById("full_name").innerHTML = "Welcome " + full_name + "!";

function logout()
{
    localStorage.removeItem("full_name");
    localStorage.removeItem("option1");
    localStorage.removeItem("option2");
    localStorage.removeItem("option3");
    localStorage.removeItem("option4");
    window.location = "index.html";
}

