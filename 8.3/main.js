var marks1, marks2, marks3, avg;
marks1 = window.prompt("Enter Marks of first Subject");
marks2 = window.prompt("Enter Marks of Second Subject");
marks3 = window.prompt("Enter Marks of Third Subject");
avg = (marks1 + marks2 + marks3) / 3;
if (avg >= 80) {
    alert("You are above standard, Good to go.");
} else {
    alert("cant say anything");
}