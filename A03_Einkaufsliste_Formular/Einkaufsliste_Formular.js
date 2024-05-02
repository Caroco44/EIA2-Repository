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
    let data = [
        { item: "Milk", checked: true, purchased: "clicked", comment: "cow milk", date: "25.04.2024", amount: 2, deleteBtn: "clicked" },
        { item: "Bread", checked: true, purchased: "clicked", comment: "white", date: "25.04.2024", amount: 2, deleteBtn: "clicked" },
    ];
    for (let entry of data) {
        createNewEntry(entry);
    }
    function createNewEntry(_entry) {
        console.log(_entry);
        let group = document.createElement("div");
        let item = document.createElement("input");
        item.type = "text";
        item.placeholder = "Product";
        item.value = _entry.item;
        group.appendChild(item);
        let checked = document.createElement("input");
        checked.type = "checkbox";
        checked.name = _entry.item;
        checked.className = "checkboxClass";
        checked.checked = _entry.checked;
        group.appendChild(checked);
        let purchased = document.createElement("button");
        purchased.className = "purchasedButton";
        purchased.type = "button";
        purchased.textContent = "Purchased";
        group.appendChild(purchased);
        let comment = document.createElement("input");
        comment.type = "text";
        comment.placeholder = "Comment";
        comment.value = _entry.comment;
        group.appendChild(comment);
        let date = document.createElement("input");
        date.type = "text";
        date.placeholder = "Date";
        date.value = _entry.date;
        group.appendChild(date);
        let amount = document.createElement("input");
        amount.type = "number";
        amount.name = "Stepper";
        amount.step = "1";
        amount.min = "0";
        amount.max = "100";
        amount.value = _entry.amount.toString();
        group.appendChild(amount);
        let deleteBtn = document.createElement("button");
        deleteBtn.className = "deleteButton";
        deleteBtn.type = "button";
        deleteBtn.textContent = "Delete";
        group.appendChild(deleteBtn);
        document.body.appendChild(group);
        return group;
    }
})(Einkaufsliste || (Einkaufsliste = {}));
//# sourceMappingURL=Einkaufsliste_Formular.js.map