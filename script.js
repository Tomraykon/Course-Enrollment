const courses = [
  { name: "JavaScript", price: 5000 },
  { name: "HTML and CSS", price: 4000 },
  { name: "Basic Python", price: 4500 }
];

const courseSelect = document.getElementById("courseSelect");
courses.forEach((course, index) => {
  let option = document.createElement("option");
  option.value = index;
  option.textContent = `${course.name} - $${course.price}`;
  courseSelect.appendChild(option);
});

document.getElementById("enrollBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value.trim();
  const courseIndex = courseSelect.value;
  const wantsDiscount = document.getElementById("discountCheck").checked;
  const summaryDiv = document.getElementById("summary");

  if (!name || courseIndex === "") {
    alert("Please enter your name and select a course.");
    return;
  }

  const selectedCourse = courses[courseIndex];
  let finalPrice = wantsDiscount ? selectedCourse.price * 0.9 : selectedCourse.price;

  summaryDiv.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Course:</strong> ${selectedCourse.name}</p>
    <p><strong>Final Price:</strong> $${finalPrice.toFixed(2)}</p>
  `;

  const enrollment = {
    name,
    course: selectedCourse.name,
    price: finalPrice
  };

  localStorage.setItem("lastEnrollment", JSON.stringify(enrollment));
});