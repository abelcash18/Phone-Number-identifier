function identifyNetworkProvider(phoneNumber) {
    const networkPrefixes = {
        MTN: ["0803", "0806", "0703", "0706", "0810", "0813", "0814", "0816", "0903", "0906", "0913", "0916"],
        Airtel: ["0808", "0708", "0812", "0902", "0907", "0912"],
        Glo: ["0805", "0807", "0811", "0815", "0905", "0915"],
        "9mobile": ["0809", "0817", "0818", "0908", "0909"],
    };

    phoneNumber = phoneNumber.trim();
    if (phoneNumber.startsWith("+234")) {
        phoneNumber = "0" + phoneNumber.slice(4);
    } else if (phoneNumber.startsWith("234")) {
        phoneNumber = "0" + phoneNumber.slice(3);
    }
    phoneNumber = phoneNumber.replace(/[\s-]/g, "");

    const prefix = phoneNumber.slice(0, 4);

    for (const network in networkPrefixes) {
        if (networkPrefixes[network].includes(prefix)) {
            alert(`The network provider is: ${network}`)
            return network;
        }
    }
    alert("Unknown network provider")
    return "Unknown network provider";
}

document.getElementById("identify-button").addEventListener("click", function() {
    const phoneNumber = document.getElementById("phone-number").value;
    const networkProvider = identifyNetworkProvider(phoneNumber);
    document.getElementById("result").innerText = `The network provider is: ${networkProvider}`;
});