const alert_message = document.getElementById("alert");
const user_field = document.getElementById("userField");
const message_field = document.getElementById("messageField");
const send_button = document.getElementById("send");

alert_message.innerHTML = 
  `  
  <div class="alert-banner">
    <p><strong>Alert:You have 2 overdue tasks to complete </strong></p>
    <button class="alert-banner-close">x</button>
  </div>
  `
  alert_message.addEventListener('click', event => {
    const element = event.target;
    if(element.classList.contains('alert-banner-close')) {
      alert_message.style.display = "none"
    }
  });

send_button.addEventListener('click', () => { 
  if (user_field.value === "" && message_field.value === "") {
    alert("Please fill out user and message fields before sending....");
  } else if (user_field.value === "") {
    alert("Please fill out user field before sending");
  } else if (message_field.value === "") {
    alert("Please fill out message field before sending");
  } else {
    alert(`Message successfully sent to: ${user_field.value}`);
    user_field.value = null;
    message_field.value = null;
  }
}); 

