const feedbackForm = document.getElementById("feedbackForm");
const message = document.getElementById("message");

feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const studentName =
        document.getElementById("studentName").value.trim();

    const rollNumber =
        document.getElementById("rollNumber").value.trim();

    const department =
        document.getElementById("department").value;

    const subject =
        document.getElementById("subject").value;

    const teacher =
        document.getElementById("teacher").value.trim();

    const rating =
        document.getElementById("rating").value;

    const comments =
        document.getElementById("comments").value.trim();

    if (
        !studentName ||
        !rollNumber ||
        !department ||
        !subject ||
        !teacher ||
        !rating ||
        !comments
    ) {
        message.style.color = "red";
        message.textContent = "Please fill in all fields.";
        return;
    }

    message.style.color = "green";
    message.textContent =
        "Thank you, " + studentName +
        "! Your feedback has been submitted successfully.";

    console.log("Feedback Details:", {
        studentName,
        rollNumber,
        department,
        subject,
        teacher,
        rating,
        comments
    });

    feedbackForm.reset();
});