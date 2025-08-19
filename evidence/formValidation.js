class FormValidation {
  static formSubmit() {
    let form = document.getElementById("f");
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;
      let city = document.getElementById("city").value;
      let comment = document.getElementById("comment").value;

      let selectedGender = "";
      let selectedSubject = "";

      let gender = document.getElementsByName("gender");
      let subject = document.getElementsByName("subject");

      Array.from(gender).forEach(g => { if(g.checked) selectedGender += g.value; });
      Array.from(subject).forEach(s => { if(s.checked) selectedSubject += s.value + " "; });

      // validation check
      let error = "";
      if(!/^[a-zA-Z]{4,6}$/.test(name)) error += "Name invalid. ";
      if(!/^[a-zA-Z0-9]{3,}[@][a-z]{3,}[.][a-z]{2,}$/.test(email)) error += "Email invalid. ";
      if(!/^\d{11}$/.test(phone)) error += "Phone invalid. ";

      if(error === "") {
        let w = open("", "_blank", "width=500,height=400");
        w.document.write(`<h4>Name :${name}</h4>`);
        w.document.write(`<p><b>Email :</b>${email}</p>`);
        w.document.write(`<p><b>Phone :</b>${phone}</p>`);
        w.document.write(`<p><b>City :</b>${city}</p>`);
        w.document.write(`<p><b>Gender :</b>${selectedGender}</p>`);
        w.document.write(`<p><b>Subject :</b>${selectedSubject}</p>`);
        w.document.write(`<p><b>Comment :</b>${comment}</p>`);
        w.document.write(`<button onclick="self.close()" style="margin-right:20px;"><b>close</b></button>`);
        w.document.write(`<button onclick="print()"><b>Print</b></button>`);
      } else {
        document.getElementsByClassName("namevalidation")[0].style.display = /^[a-zA-Z]{4,6}$/.test(name) ? "none":"block";
        document.getElementsByClassName("emailvalidation")[0].style.display = /^[a-zA-Z0-9]{3,}[@][a-z]{3,}[.][a-z]{2,}$/.test(email) ? "none":"block";
        document.getElementsByClassName("phonevalidation")[0].style.display = /^\d{11}$/.test(phone) ? "none":"block";
      }
    });
  }

  static nameValidation() {
    let name = document.getElementById("name");
    name.addEventListener("blur", function() {
      if(/^[a-zA-Z]{4,6}$/.test(this.value)){
        this.style.border = "5px solid green";
        document.getElementsByClassName("namevalidation")[0].style.display = "none";
      } else {
        this.style.border = "2px solid red";
        document.getElementsByClassName("namevalidation")[0].style.display = "block";
      }
    });
  }

  static emailValidation() {
    let email = document.getElementById("email");
    email.addEventListener("blur", function() {
      if(/^[a-zA-Z0-9]{3,}[@][a-z]{3,}[.][a-z]{2,}$/.test(this.value)){
        this.style.border = "5px solid green";
        document.getElementsByClassName("emailvalidation")[0].style.display = "none";
      } else {
        this.style.border = "2px solid red";
        document.getElementsByClassName("emailvalidation")[0].style.display = "block";
      }
    });
  }

  static phoneValidation() {
    let phone = document.getElementById("phone");
    phone.addEventListener("blur", function() {
      if(/^\d{11}$/.test(this.value)){
        this.style.border = "5px solid green";
        document.getElementsByClassName("phonevalidation")[0].style.display = "none";
      } else {
        this.style.border = "2px solid red";
        document.getElementsByClassName("phonevalidation")[0].style.display = "block";
      }
    });
  }
}