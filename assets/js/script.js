// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Get the accordion container element
    const accordion = document.querySelector('.accordion');

    // Get all elements with the class 'accordion-question' inside the accordion container
    const questions = accordion.querySelectorAll('.accordion-question');

    // Get all elements with the class 'accordion-title' inside the accordion container
    const titles = accordion.querySelectorAll('.accordion-title');

    // Function to toggle the accordion state when a title is clicked
    function toggleAccordion() {
        // Get the parent node (question) of the clicked title
        const AccordionQuestion = this.parentNode;

        // Loop through all questions
        questions.forEach(question => {
            // Check if the current question is the one associated with the clicked title
            if (AccordionQuestion === question) {
                // Toggle the 'active' class for the clicked question
                AccordionQuestion.classList.toggle('active');
                return; // Exit the loop if the question is found
            }

            // If the current question is not the one associated with the clicked title, remove the 'active' class
            question.classList.remove('active');
        });
    }

    // Add a click event listener to each title element, triggering the toggleAccordion function
    titles.forEach(question => question.addEventListener('click', toggleAccordion));
});