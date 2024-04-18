namespace Einkaufsliste {

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


  // window.addEventListener("load", handleLoad);

  // function handleLoad(_event: Event): void {
  //   console.log("Start");
  //   let divs: NodeListOf<HTMLDivElement> = document.querySelectorAll("div.input");

  //   // Install listeners on divs
  //   for (let i: number = 0; i < divs.length; i++) {
  //     let div: HTMLDivElement = divs[i];
  //     div.addEventListener("change", handleEvent);
  //     div.addEventListener("input", handleEvent);
  //   }
  // }

  // // Function handleEvent
  // function handleEvent(_event: Event): void {
  //   let target: HTMLInputElement = <HTMLInputElement>_event.target;
  //   console.log();
  //   if (_event.type == "change")
  //     console.warn("Change: " + target.name + " = " + target.value, _event);
  //   else
  //     console.log("Input: " + target.name + " = " + target.value, _event);

  //   if (target.type == "checkbox")
  //     console.log("Checked: " + target.name + " = " + target.checked);

  //   if (target.name == "Stepper") {
  //     let meter: HTMLMeterElement = <HTMLMeterElement>document.querySelector("meter");
  //     meter.value = parseFloat(target.value);
  //   }
  // }


}
