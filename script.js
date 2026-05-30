const form = document.getElementById("studentForm");
const studentName = document.getElementById("studentName");
const studentMark = document.getElementById("studentMark");
const result = document.getElementById("result");
const studentList = document.getElementById("studentList");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = studentName.value.trim();
    const mark = parseInt(studentMark.value);

    if (name === "" || isNaN(mark)) {
        result.textContent =
            "Please enter a valid student name and mark.";
        result.className = "result error";
        return;
    }

    if (mark < 0 || mark > 100) {
        result.textContent =
            "Mark must be between 0 and 100.";
        result.className = "result error";
        return;
    }

    let status;
    let grade;

    if (mark >= 80) {
        status = "PASS";
        grade = "Distinction";
    }
    else if (mark >= 65) {
        status = "PASS";
        grade = "Merit";
    }
    else if (mark >= 50) {
        status = "PASS";
        grade = "Pass";
    }
    else {
        status = "FAIL";
        grade = "Fail";
    }

    result.innerHTML =
        `<strong>${name}</strong> scored ${mark}% — ${status} (${grade})`;

    result.className =
        status === "PASS"
            ? "result pass"
            : "result fail";

    const listItem = document.createElement("li");

    listItem.textContent =
        `${name} - ${mark}% - ${status} (${grade})`;

    studentList.appendChild(listItem);

    form.reset();
});