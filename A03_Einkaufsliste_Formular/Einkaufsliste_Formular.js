"use strict";
var Einkaufsliste;
(function (Einkaufsliste) {
    // Install listeners on buttons
    let purchasedButton = document.querySelectorAll(".purchasedButton");
    let deleteButton = document.querySelectorAll(".deleteButton");
    let newEntryButton = document.getElementById("newEntryButton");
    purchasedButton.forEach(purchasedButton => {
        purchasedButton.addEventListener("pointerdown", function () {
            console.log("Purchased wurde geklickt");
        });
    });
    deleteButton.forEach(deleteButton => {
        deleteButton.addEventListener("pointerdown", function () {
            console.log("Delete Entry wurde geklickt");
        });
    });
    newEntryButton.addEventListener("pointerdown", function () {
        console.log("New Entry wurde geklickt");
    });
    Einkaufsliste.data = [
        { product: "Milk", checked: true, purchasedButton: "clicked", comment: "cow milk", date: "25.04.2024", amount: 2 },
        { product: "Bread", checked: true, purchasedButton: "clicked", comment: "cow milk", date: "25.04.2024", amount: 2 }
    ];
    for (let entry of Einkaufsliste.data) {
        createNew(entry);
    }
    function createNew(_entry) {
        console.log(_entry);
        // let group: HTMLDivElement = document.createElement("div");
        // for (let item of _items) {
        //   let checkbox: HTMLInputElement = document.createElement("input");
        //   checkbox.type = "checkbox";
        //   checkbox.setAttribute("price", item.price.toFixed(2));
        //   checkbox.value = item.name;
        //   checkbox.name = _category;
        //   checkbox.id = item.name;
        //   let label: HTMLLabelElement = document.createElement("label");
        //   label.textContent = item.name;
        //   label.htmlFor = item.name;
        //   group.appendChild(checkbox);
        //   group.appendChild(label);
        // }
        // return group;
    }
})(Einkaufsliste || (Einkaufsliste = {}));
//# sourceMappingURL=Einkaufsliste_Formular.js.map