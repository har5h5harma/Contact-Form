// Function to send message to your email
function sendMessage(event) {
    event.preventDefault(); // Prevent form from reloading the page
  
    const userName = document.getElementById("name").value; // Get user's name
    const userEmail = document.getElementById("email").value; // Get user's email
    const userMessage = document.getElementById("message").value; // Get user's message
  
    // Check if all fields are filled
    if (!userName || !userEmail || !userMessage) {
      alert("Please fill out all fields!");
      return;
    }
  
    // Initialize EmailJS with your public key
    emailjs.init("24kLyWp4CIDRsRvnf"); // Replace with your actual public key
  
    // Send message via EmailJS to your email (you will define template with these variables)
    emailjs.send("service_b0ht7ts", "template_t3z6yp8", {
      from_name: userName,  // Send user's name
      from_email: userEmail,  // Send user's email
      message: userMessage   // Send user's message
    })
    .then(response => {
      alert("Message sent successfully!");
      document.getElementById("responseMessage").innerText = "Your message has been sent!";
      // Optionally clear form after sending
      document.getElementById("contactForm").reset();
    })
    .catch(error => {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
      document.getElementById("responseMessage").innerText = "Error sending message.";
    });
  }
  
  // Attach the sendMessage function to the form submit event
  document.getElementById("contactForm").addEventListener("submit", sendMessage);
  