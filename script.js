document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");
  
    if (registerForm) {
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = registerForm.email.value;
        const contact = registerForm.contact.value;
        if (!email.includes("@")) {
          alert("Invalid email format");
          return;
        }
        if (contact.length < 10) {
          alert("Contact number must be at least 10 digits");
          return;
        }
        alert("Registration successful!");
      });
    }
  
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = loginForm.email.value;
        const password = loginForm.password.value;
        if (email === "user@example.com" && password === "123456") {
          alert("Login successful!");
        } else {
          alert("Invalid credentials");
        }
      });
    }
  });
  