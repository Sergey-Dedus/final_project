export class PostFormContacts {
  constructor(root) {
    this.root = root;
  }

  render() {
    this.formEl = document.querySelector(".form-contacts");
    this.firstName = document.querySelector(".firstname-contacts");
    this.lastName = document.querySelector(".lastname-contacts");
    this.email = document.querySelector(".email-contacts");
    this.phone = document.querySelector(".phone-contacts");
    this.message = document.querySelector(".form-message");
    this.formBtn = document.querySelector(".form-contacts__btn");

    this.firstName.name = "firstname";
    this.lastName.name = "lastname";
    this.email.name = "email";
    this.phone.name = "phone";
    this.message.name = "city";

    //   ===========================
    this.formEl.addEventListener("submit", (eventObject) => {
      eventObject.preventDefault();

      const firstname = this.firstName.value;
      const lastname = this.lastName.value;
      const email = this.email.value;
      const phone = this.phone.value;
      const message = this.message.value;

      //================================
      const requestBody = {
        firstname,
        lastname,
        email,
        phone,
        message,
      };

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3000/posts");
      xhr.setRequestHeader("Content-Type", "application/json");
      const requestJSON = JSON.stringify(requestBody);
      xhr.send(requestJSON);
      xhr.onload = () => {
        const post = JSON.parse(xhr.response);
        console.log(post);
      };
    });
  }
}
