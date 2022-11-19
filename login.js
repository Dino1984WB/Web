function field_focus(field, email)
  {
    if(field.value == email)
    {
      field.value = '';
    }
  }

  function field_blur(field, email)
  {
    if(field.value == '')
    {
      field.value = email;
    }
  }

//Fade in dashboard box
$(document).ready(function(){
    $('.box').hide().fadeIn(1000);
    });

//Stop click event
$('a').click(function(event){
    event.preventDefault(); 
	});

Building an HTTP request by hand can be overwhelming. Fortunately, the XMLHttpRequest specification provides a newer, simpler way to handle form data requests with the FormData object.

The FormData object can be used to build form data for transmission, or to get the data within a form element to manage how it's sent.

Using this object is detailed in Using FormData Objects, but here are two examples:

Using a standalone FormData object
<button>Click Me!</button>
You should be familiar with that HTML sample. Now for the JavaScript:

const btn = document.querySelector('button');

function sendData(data) {
  const XHR = new XMLHttpRequest();
  const FD = new FormData();

  // Push our data into our FormData object
  for (const [name, value] of Object.entries(data)) {
    FD.append(name, value);
  }

  // Define what happens on successful data submission
  XHR.addEventListener('load', (event) => {
    alert('Yeah! Data sent and response loaded.');
  });

  // Define what happens in case of error
  XHR.addEventListener('error', (event) => {
    alert('Oops! Something went wrong.');
  });

  // Set up our request
  XHR.open('POST', 'https://example.com/cors.php');

  // Send our FormData object; HTTP headers are set automatically
  XHR.send(FD);
}

btn.addEventListener('click', () => {
  sendData({ test: 'ok' });
});
Here's the live result:


Using FormData bound to a form element
You can also bind a FormData object to an <form> element. This creates a FormData object that represents the data contained in the form.

The HTML is typical:

<form id="myForm">
  <label for="myName">Send me your name:</label>
  <input id="myName" name="name" value="Dominic" />
  <input type="submit" value="Send Me!" />
</form>
But JavaScript takes over the form:

window.addEventListener("load", () => {
  function sendData() {
    const XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    const FD = new FormData(form);

    // Define what happens on successful data submission
    XHR.addEventListener("load", (event) => {
      alert(event.target.responseText);
    });

    // Define what happens in case of error
    XHR.addEventListener("error", (event) => {
      alert('Oops! Something went wrong.');
    });

    // Set up our request
    XHR.open("POST", "https://example.com/cors.php");

    // The data sent is what the user provided in the form
    XHR.send(FD);
  }

  // Get the form element
  const form = document.getElementById("myForm");

  // Add 'submit' event handler
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    sendData();
  });
});
