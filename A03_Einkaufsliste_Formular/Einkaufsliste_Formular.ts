namespace Einkaufsliste {
  export interface Product {
    item: string;
    checked: boolean;
    purchased: string;
    comment: string;
    date: string;
    amount: number;
    deleteBtn: string
  }

  // Install listeners on buttons
  let purchasedButton = document.querySelectorAll(".purchasedButton");
  let deleteButton = document.querySelectorAll(".deleteButton");
  let newEntryButton: HTMLElement = <HTMLElement>document.getElementById("newEntryButton");

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
  ]


  for (let entry of data) {
    createNewEntry(entry)
  }

  function createNewEntry(_entry: Product): HTMLElement {
    console.log(_entry);

    let group: HTMLDivElement = document.createElement("div");

    let item: HTMLInputElement = document.createElement("input");
    item.type = "text";
    item.placeholder = "Product";
    item.value = _entry.item;
    group.appendChild(item);

    let checked: HTMLInputElement = document.createElement("input");
    checked.type = "checkbox";
    checked.name = _entry.item;
    checked.className = "checkboxClass"
    checked.checked = _entry.checked;
    group.appendChild(checked);

    let purchased: HTMLButtonElement = document.createElement("button");
    purchased.className = "purchasedButton";
    purchased.type = "button";
    purchased.textContent = "Purchased";
    group.appendChild(purchased);

    let comment: HTMLInputElement = document.createElement("input");
    comment.type = "text";
    comment.placeholder = "Kommentar";
    comment.value = _entry.comment;
    group.appendChild(comment);

    let date: HTMLInputElement = document.createElement("input");
    date.type = "text";
    date.placeholder = "Datum";
    date.value = _entry.date;
    group.appendChild(date);

    let amount: HTMLInputElement = document.createElement("input");
    amount.type = "number";
    amount.name = "Stepper";
    amount.step = "1";
    amount.min = "0";
    amount.max = "100";
    amount.value = _entry.amount.toString();
    group.appendChild(amount);

    let deleteBtn: HTMLButtonElement = document.createElement("button");
    deleteBtn.className = "deleteButton";
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete";
    group.appendChild(deleteBtn);

    document.body.appendChild(group);

    return group;
}

}
