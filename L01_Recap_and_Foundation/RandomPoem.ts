namespace RandomPoem {

  let subject: string[] = ["Der Rabe", "Die Katze", "Der Hund", "Der Fuchs"];
  let predicate: string[] = ["mag", "hasst", "liebt", "vergisst"];
  let object: string[] = ["die Natur", "den Wald", "den Baum", "die Höhle"];


  for (let i = 3; i >= 0; i--) {
    getVerse(subject, predicate, object);
  }


  function getVerse(_subject: string[], _predicate: string[], _object: string[]) {

    let randomNumber: number = Math.floor(Math.random() * 4);
    // console.log(randomNumber);

    let spliceSubject: string[] = _subject.splice(randomNumber, 1);
    let splicePredicate: string[] = _predicate.splice(randomNumber, 1);
    let spliceObject: string[] = _object.splice(randomNumber, 1);

    let verse: string = spliceSubject[0] + " " + splicePredicate[0] + " " + spliceObject[0];
    console.log(verse);
    return verse;
  }

}

