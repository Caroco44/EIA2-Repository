namespace RandomPoem {

  let subject: string[] = ["Der Rabe", "Die Katze", "Der Hund", "Der Fuchs"];
  let predicate: string[] = ["mag", "hasst", "liebt", "vergisst"];
  let object: string[] = ["die Natur", "den Wald", "den Baum", "die Höhle"];

  for (let i = subject.length; i >= 1; i--) {
    let poem = getVerse(subject, predicate, object);
    console.log(poem);
  }

  function getVerse(_subject: string[], _predicate: string[], _object: string[]) {
    let verse: string = "";

    let subjectVariable: number = Math.floor(Math.random() * _subject.length);
    verse += _subject.splice(subjectVariable, 1)[0] + " ";

    let predicateVariable: number = Math.floor(Math.random() * _predicate.length);
    verse += _predicate.splice(predicateVariable, 1)[0] + " ";

    let objectVariable: number = Math.floor(Math.random() * _object.length);
    verse += _object.splice(objectVariable, 1)[0] + " ";

    return verse;
  }

}

