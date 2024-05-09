// Module for handling form submission
const FormHandler = {
    handleSubmit: function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // Example: Log the form data
        console.log("Form data submitted:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Add code here to handle form submission, such as sending the data to a server
        const newMessage = new Message(name, email, message);
        newMessage.send();
    }
}

// Module for managing contact information
const ContactInfo = {
    address: "Muslim Town, Muhammadi Colony, Rawalpindi, House No. 2130",
    phone: "562-234-9087",
    email: "florative-decore@gmail.com"
}

// Class for creating messages
class Message {
    constructor(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }

    send() {
        // Example: Send the message data to a server using AJAX or fetch
        fetch('http://example.com/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.name,
                email: this.email,
                message: this.message
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Message sent successfully:', data);
            // Add any further processing here
        })
        .catch((error) => {
            console.error('Error sending message:', error);
            // Handle errors gracefully
        });
    }
}

// Array-based data for bouquet showcase
const bouquets = [
    { name: "Rose Bouquet", description: "A beautiful bouquet of fresh roses", price: 25 },
    { name: "Tulip Bouquet", description: "Vibrant tulips arranged elegantly", price: 30 },
    { name: "Sunflower Bouquet", description: "Cheerful sunflowers to brighten any day", price: 20 }
];

// Function to display bouquets on the webpage
function displayBouquets() {
    const bouquetsContainer = document.getElementById("bouquets-container");
    bouquets.forEach(bouquet => {
        const bouquetCard = document.createElement("div");
        bouquetCard.classList.add("bouquet-card");
        bouquetCard.innerHTML = `
            <h3>${bouquet.name}</h3>
            <p>${bouquet.description}</p>
            <p>Price: $${bouquet.price}</p>
            <button onclick="addToCart('${bouquet.name}', ${bouquet.price})">Add to Cart</button>
        `;
        bouquetsContainer.appendChild(bouquetCard);
    });
}

// Function to add bouquets to cart
function addToCart(name, price) {
    const cartItem = { name, price };
    // Add code here to handle adding items to the cart
    console.log("Added to cart:", cartItem);
}

// Export modules and functions for use in other parts of the project
export { FormHandler, ContactInfo, Message, displayBouquets, addToCart };
