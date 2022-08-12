function calBmr()
{
    full_name = document.getElementById("full_name").value;
    localStorage.setItem("full_name",full_name);
    window.location="hc_bmr.html";
}
function logout()
{
    localStorage.removeItem("full_name");
    localStorage.removeItem("option1");
    localStorage.removeItem("option2");
    localStorage.removeItem("option3");
    localStorage.removeItem("option4");
    window.location = "index.html";
}