class FormValidation {
  static formSubmit() {
    let form = document.getElementById("f");
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let phone = document.getElementById("phone").value.trim();
      let city = document.getElementById("city").value;
      let comment = document.getElementById("comment").value.trim();

      let selectedGender = "";
      let selectedSubject = "";

      let gender = document.getElementsByName("gender");
      let subject = document.getElementsByName("subject");

      Array.from(gender).forEach(g => { if(g.checked) selectedGender = g.value; });
      Array.from(subject).forEach(s => { if(s.checked) selectedSubject += s.value + " "; });

      
      let nameRegex = /^[a-zA-Z.\-\s]{3,50}$/;
      let phoneRegex = /^(?:\+?88)?01[3-9]\d{8}$/; 
      let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

      let error = "";
      if(!nameRegex.test(name)) error += "Name invalid. ";
      if(!emailRegex.test(email)) error += "Email invalid. ";
      if(!phoneRegex.test(phone)) error += "Phone invalid. ";

      document.getElementsByClassName("namevalidation")[0].style.display = nameRegex.test(name) ? "none":"block";
      document.getElementsByClassName("emailvalidation")[0].style.display = emailRegex.test(email) ? "none":"block";
      document.getElementsByClassName("phonevalidation")[0].style.display = phoneRegex.test(phone) ? "none":"block";

      if(error === "") {
        let w = open("", "_blank", "width=500,height=400");
        w.document.write(`<h4>Name : ${name}</h4>`);
        w.document.write(`<p><b>Email :</b> ${email}</p>`);
        w.document.write(`<p><b>Phone :</b> ${phone}</p>`);
        w.document.write(`<p><b>City :</b> ${city}</p>`);
        w.document.write(`<p><b>Gender :</b> ${selectedGender}</p>`);
        w.document.write(`<p><b>Subjects :</b> ${selectedSubject}</p>`);
        w.document.write(`<p><b>Comment :</b> ${comment}</p>`);
        w.document.write(`<button onclick="self.close()" style="margin-right:20px;"><b>Close</b></button>`);
        w.document.write(`<button onclick="print()"><b>Print</b></button>`);
      }
    });
  }

  static nameValidation() {
    let name = document.getElementById("name");
    name.addEventListener("blur", function() {
      let nameRegex = /^[a-zA-Z.\-\s]{3,50}$/;
      if(nameRegex.test(this.value)) this.style.border = "3px solid #1abc9c";
      else this.style.border = "2px solid #ff6b6b";
    });
  }

  static emailValidation() {
    let email = document.getElementById("email");
    email.addEventListener("blur", function() {
      let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
      if(emailRegex.test(this.value)) this.style.border = "3px solid #1abc9c";
      else this.style.border = "2px solid #ff6b6b";
    });
  }

  static phoneValidation() {
    let phone = document.getElementById("phone");
    phone.addEventListener("blur", function() {
      let phoneRegex = /^(?:\+?88)?01[3-9]\d{8}$/;
      if(phoneRegex.test(this.value)) this.style.border = "3px solid #1abc9c";
      else this.style.border = "2px solid #ff6b6b";
    });
  }
}
