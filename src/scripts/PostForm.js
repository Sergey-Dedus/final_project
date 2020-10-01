export class PostForm {
  constructor(root) {
    this.root = root;
  }

  render() {
    this.formEl = document.querySelector(".form-list");
    this.firstName = document.querySelector(".firstname");
    this.lastName = document.querySelector(".lastname");
    this.email = document.querySelector(".email");
    this.phone = document.querySelector(".phone");
    this.city = document.querySelector(".city");
    this.state = document.querySelector(".state");
    this.formBtn = document.querySelector(".form-list__btn");

    this.firstName.name = "firstname";
    this.lastName.name = "lastname";
    this.email.name = "email";
    this.phone.name = "phone";
    this.city.name = "city";
    this.state.name = "state";

    //   ===========================
    this.formEl.addEventListener("submit", (eventObject) => {
      eventObject.preventDefault();

      const firstname = this.firstName.value;
      const lastname = this.lastName.value;
      const email = this.email.value;
      const phone = this.phone.value;
      const city = this.city.value;
      const state = this.state.value;

      // ====== selected radio button ===========================
      let checkboxes = document.getElementsByName("package");
      let selectedPackage = [];
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked === true) {
          selectedPackage.push(checkboxes[i].value);
        }
      }
      //================================
      const requestBody = {
        firstname,
        lastname,
        email,
        phone,
        city,
        state,
        selectedPackage,
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
