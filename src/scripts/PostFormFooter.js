export class PostFormFooter {
  constructor(root) {
    this.root = root;
  }

  render() {
    this.formElFooter = document.querySelector(".email-container__enter-email");
    this.emailFooter = document.querySelector(".enter-email__email");

    // this.emailFooter.name = "emailFooter";

    this.formBtnFooter = document.querySelector(".email-container__btn");

    //   ===========================
    this.formElFooter.addEventListener("submit", (eventObject) => {
      eventObject.preventDefault();

      const emailFooter = this.emailFooter.value;

      const requestBody = { emailFooter };

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3000/posts");
      xhr.setRequestHeader("Content-Type", "application/json");
      const requestJSON = JSON.stringify(requestBody);
      xhr.send(requestJSON);
      xhr.onload = () => {
        const postFooter = JSON.parse(xhr.response);
        console.log(postFooter);
      };
    });
  }
}
