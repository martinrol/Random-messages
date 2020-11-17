const messages = [
    "Martin",
    "Micaela",
    "Nicolas",
    "Laura",
    "Ariana",
    "Hernan"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * 
        messages.length)];
        
    console.log(message);
}

module.exports = { randomMsg };