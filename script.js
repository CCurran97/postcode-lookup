const postcodeMap = {
    "B98": "Nutricia",
    "B60": "Nutricia",
    "B61": "Nutricia",
    "B": "Nutricia",
    "DY": "Nutricia",
    "WS7": "Abbott",
    "WS13": "Abbott",
    "WS14": "Abbott",
    "WS": "Nutricia",
    "WV": "Nutricia",
    "WR": "Nutricia",
    "BB": "Fresubin",
    "HR": "Abbott",
    "ST": "Abbott"
};

function lookupCompany() {
    const input = document.getElementById("postcodeInput").value.toUpperCase().replace(/\s+/g, '');
    const resultElement = document.getElementById("result");

    // Sort keys by length descending to match longer prefixes first
    const sortedKeys = Object.keys(postcodeMap).sort((a, b) => b.length - a.length);

    for (const prefix of sortedKeys) {
        if (input.startsWith(prefix)) {
            resultElement.textContent = `Feed Company: ${postcodeMap[prefix]}`;
            return;
        }
    }

    resultElement.textContent = "Feed Company not found for this postcode.";
}
