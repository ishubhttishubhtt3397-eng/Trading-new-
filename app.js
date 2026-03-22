function updateAllMarketData() {
    // 1. Nifty Price Update
    let niftyPrice = (19500 + Math.random() * 100).toFixed(2);
    document.getElementById('nifty-price').innerText = "₹ " + niftyPrice;

    // 2. Bank Nifty Price Update
    let bnPrice = (45800 + Math.random() * 200).toFixed(2);
    document.getElementById('banknifty-price').innerText = "₹ " + bnPrice;

    // 3. PCR Logic
    let pcr = (0.7 + Math.random() * 0.8).toFixed(2);
    document.getElementById('pcr-value').innerText = pcr;

    // 4. Sentiment & Jarvis Message
    let sentiment = document.getElementById('market-sentiment');
    let jarvisMessage = document.querySelector('.jarvis-box strong');
    
    if(pcr > 1.2) {
        sentiment.innerText = "Sentiment: Very Bullish 🚀";
        sentiment.style.color = "#00ff88";
        jarvisMessage.nextSibling.textContent = " ईश्वर भाई, PCR मजबूत है, मार्केट ऊपर जा सकता है!";
    } else if(pcr < 0.9) {
        sentiment.innerText = "Sentiment: Bearish 📉";
        sentiment.style.color = "#ff4444";
        jarvisMessage.nextSibling.textContent = " सावधान! PCR कमजोर है, बिकवाली आ सकती है।";
    } else {
        sentiment.innerText = "Sentiment: Neutral ↔️";
        sentiment.style.color = "#ffffff";
        jarvisMessage.nextSibling.textContent = " मार्केट अभी एक रेंज में है, सही मौके का इंतज़ार करें।";
    }
}

// हर 3 सेकंड में सब कुछ अपडेट होगा
setInterval(updateAllMarketData, 3000);
updateAllMarketData();
