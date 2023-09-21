function skillsMember() {
    var member = document.getElementById("member");
    var memberName = member.options[member.selectedIndex].value;
    var memberSkills = document.getElementById("memberSkills");
    var skills = "";
    if (memberName == "Tomasz") {
        skills = "HTML, CSS, JS, PHP, SQL, C++, Java, Python, Ruby";
    } else if (memberName == "Kamil") {
        skills = "HTML, CSS, JS, PHP, SQL, C++, Java, Python, Ruby";
    } else if (memberName == "Piotr") {
        skills = "HTML, CSS, JS, PHP, SQL, C++, Java, Python, Ruby";
    } else if (memberName == "Paweł") {
        skills = "HTML, CSS, JS, PHP, SQL, C++, Java, Python, Ruby";
    } else if (memberName == "Krzysztof") {
        skills = "HTML, CSS, JS, PHP, SQL, C++, Java, Python, Ruby";
    }
    memberSkills.value = skills;
}