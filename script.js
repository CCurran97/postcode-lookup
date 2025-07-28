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
    "ST": "Abbott",
    "SA": "Abbott",
    "CH": "Nutricia",
    "NP12": "Nutricia",
    "ST1": "Abbott",
    "ST2": "Abbott",
    "ST3": "Abbott",
    "ST4": "Abbott",
    "ST5": "Abbott"
    "ST6": "Abbott",
    "ST7": "Abbott",
    "ST8": "Abbott",
    "ST9": "Abbott",
    "ST10": "Abbott",
    "ST11": "Abbott",
    "ST12": "Abbott",
    "ST13": "Abbott",
    "ST14": "Abbott",
    "ST15": "Abbott",
    "ST16": "Abbott",
    "ST17": "Abbott",
    "ST18": "Abbott",
    "ST19": "Abbott",
    "ST20": "Abbott",
    "ST21": "Abbott",
    "SY1": "Abbott",
    "SY2": "Abbott",
    "SY3": "Abbott",
    "SY4": "Abbott",
    "SY5": "Abbott",
    "SY6": "Abbott",
    "SY7": "Abbott",
    "SY8": "Abbott",
    "SY9": "Abbott",
    "SY10": "Abbott",
    "SY11": "Abbott",
    "SY12": "Abbott",
    "SY13": "Abbott",
    "SY14": "Abbott",
    "SY15": "Abbott",
    "SY16": "Abbott",
    "SY17": "Abbott",
    "SY18": "Abbott",
    "SY19": "Abbott",
    "SY20": "Abbott",
    "SY21": "Abbott",
    "SY22": "Abbott",
    "TF1": "Abbott",
    "TF2": "Abbott",
    "TF3": "Abbott",
    "TF4": "Abbott",
    "TF5": "Abbott",  
"TF6": "Abbott",
  "TF7": "Abbott",
  "TF8": "Abbott",
  "TF9": "Abbott",
  "TF10": "Abbott",
  "TF11": "Abbott",
  "TF12": "Abbott",
  "TF13": "Abbott",
  "NN1": "Abbott",
  "NN2": "Abbott",
  "NN3": "Abbott",
  "NN4": "Abbott",
  "NN5": "Abbott",
  "NN6": "Abbott",
  "NN7": "Abbott",
  "NN8": "Abbott",
  "NN9": "Abbott",
  "NN10": "Abbott",
  "NN11": "Abbott",
  "NN12": "Abbott",
  "NN13": "Abbott",
  "NN14": "Abbott",
  "NN15": "Abbott",
  "NN16": "Abbott",
  "NN17": "Abbott",
  "NN18": "Abbott",
  "HR1": "Abbott",
  "HR2": "Abbott",
  "HR3": "Abbott",
  "HR4": "Abbott",
  "HR5": "Abbott",
  "HR6": "Abbott",
  "HR7": "Abbott",
  "HR8": "Abbott",
  "HR9": "Abbott"



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
