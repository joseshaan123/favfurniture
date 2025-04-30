document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");

    // Handle form submission
    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent default form submission behavior (page refresh)

        // Collect form data
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            username: document.getElementById("username").value,
            age: document.getElementById("age").value,
            dob: document.getElementById("dob").value,
            password: document.getElementById("password").value,
        };

        try {
            // Send registration data to the backend
            const response = await fetch("http://localhost:4000/api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const newUser = await response.json();
                alert("Registration successful!");
                console.log("New User:", newUser);
            } else {
                const error = await response.json();
                alert(`Registration Error: ${error.message}`);
            }
        } catch (err) {
            console.error("Error during registration:", err);
            alert("An error occurred while connecting to the backend.");
        }
    });
});
