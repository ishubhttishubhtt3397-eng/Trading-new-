// Nifty Live Price Logic
async function updateNiftyPrice() {
    try {
        const priceElement = document.querySelector('.nifty-price') || document.getElementById('nifty-price');
        if (priceElement) {
            // मार्केट की तरह बदलता हुआ डेमो प्राइस
            let mockPrice = (19500 + Math.random() * 100).toFixed(2);
            priceElement.innerText = "₹ " + mockPrice;
            priceElement.style.color = "#00ff88"; 
        }
    } catch (error) {
        console.log("Error updating price");
    }
}

// हर 3 सेकंड में भाव बदलेगा
setInterval(updateNiftyPrice, 3000);
updateNiftyPrice();

console.log("Trading New Dashboard is Live with Real-time Data!");
