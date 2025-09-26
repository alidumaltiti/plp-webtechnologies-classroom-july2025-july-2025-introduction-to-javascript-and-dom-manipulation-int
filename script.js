document.getElementById("checkAgeBtn").addEventListener("click", function() {
    let age = prompt("Enter your age:");
    age = Number(age);

    let resultText = "";
    if (age >= 18) {
        resultText = "✅ You are an adult.";
    } else if (age > 0) {
        resultText = "👶 You are still a minor.";
    } else {
        resultText = "⚠️ Invalid input!";
    }

    document.getElementById("ageResult").textContent = resultText;
});



function calculateTotal(price, quantity) {
    return price * quantity;
}

document.getElementById("calcTotalBtn").addEventListener("click", function() {
    let price = Number(prompt("Enter price of item:"));
    let quantity = Number(prompt("Enter quantity:"));

    let total = calculateTotal(price, quantity);
    document.getElementById("totalResult").textContent = "Total: " + total;
});


document.getElementById("countdownBtn").addEventListener("click", function() {
    let list = document.getElementById("countdownList");
    list.innerHTML = ""; 

    for (let i = 5; i >= 1; i--) {
        let li = document.createElement("li");
        li.textContent = "Countdown: " + i;
        list.appendChild(li);
    }
});


document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("dynamicText").textContent = "🎉 The text has changed!";
});


document.getElementById("toggleColorBtn").addEventListener("click", function() {
    document.body.classList.toggle("bg-toggled");
});


document.getElementById("addItemBtn").addEventListener("click", function() {
    let list = document.getElementById("itemList");
    let newItem = document.createElement("li");
    newItem.textContent = "New Item " + (list.children.length + 1);
    list.appendChild(newItem);
});
