let total = 0;
let prices = {
    "Sashimi" : 4,
    "Takoyaki" :6,
};
const quantities = {
    "Sashimi" : 0,
    "Takoyaki": 0,
}

function updateTotal() {
    total = prices["Sashimi"]*quantities["Sashimi"] + prices["Takoyaki"]*quantities["Takoyaki"];
    document.getElementById("totalPrice"). textContent = total;
}

document.querySelectorAll(".btn-primary").forEach(button => {
    button.addEventListener("click",function () {
        const item = this.closest(".card").querySelector(".card-title").textContent;
        quantities[item]++;
        updateTotal();
    })
})