class Validation {
  static init() {
    const form = document.getElementById("myForm");

    // Validate on blur
    document.getElementById("username").addEventListener("blur", this.validateUsername);
    document.getElementById("password").addEventListener("blur", this.validatePassword);
    document.getElementById("phone").addEventListener("blur", this.validatePhone);

    // Form submit
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let userValid = Validation.validateUsername();
      let passValid = Validation.validatePassword();
      let phoneValid = Validation.validatePhone();

      if (userValid && passValid && phoneValid) {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let phone = document.getElementById("phone").value;

        alert(`Username: ${username}\nPassword: ${password}\nPhone: ${phone}`);
      } else {
        alert("Please fix the errors before submitting!");
      }
    });
  }

  static validateUsername() {
    const username = document.getElementById("username").value.trim();
    const errorDiv = document.getElementById("userError");
    const pattern = /^[a-zA-Z]{4,10}$/;

    if (pattern.test(username)) {
      errorDiv.style.display = "none";
      document.getElementById("username").style.border = "2px solid green";
      return true;
    } else {
      errorDiv.style.display = "block";
      document.getElementById("username").style.border = "2px solid red";
      return false;
    }
  }

  static validatePassword() {
    const password = document.getElementById("password").value.trim();
    const errorDiv = document.getElementById("passError");
    const pattern = /^(?=.*\d).{6,}$/; // at least 6 chars and 1 digit

    if (pattern.test(password)) {
      errorDiv.style.display = "none";
      document.getElementById("password").style.border = "2px solid green";
      return true;
    } else {
      errorDiv.style.display = "block";
      document.getElementById("password").style.border = "2px solid red";
      return false;
    }
  }

  static validatePhone() {
    const phone = document.getElementById("phone").value.trim();
    const errorDiv = document.getElementById("phoneError");
    const pattern = /^01[0-9]{9}$/;

    if (pattern.test(phone)) {
      errorDiv.style.display = "none";
      document.getElementById("phone").style.border = "2px solid green";
      return true;
    } else {
      errorDiv.style.display = "block";
      document.getElementById("phone").style.border = "2px solid red";
      return false;
    }
  }
}

// Initialize validation
Validation.init();
