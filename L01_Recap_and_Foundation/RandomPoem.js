"use strict";
var RandomPoem;
(function (RandomPoem) {
    let subject = ["Der Rabe", "Die Katze", "Der Hund", "Der Fuchs"];
    let predicate = ["mag", "hasst", "liebt", "vergisst"];
    let object = ["die Natur", "den Wald", "den Baum", "die Höhle"];
    for (let i = 3; i >= 0; i--) {
        getVerse(subject, predicate, object);
    }
    function getVerse(_subject, _predicate, _object) {
        let randomNumber = Math.floor(Math.random() * 4);
        // console.log(randomNumber);
        let spliceSubject = _subject.splice(randomNumber, 1);
        let splicePredicate = _predicate.splice(randomNumber, 1);
        let spliceObject = _object.splice(randomNumber, 1);
        let verse = spliceSubject[0] + " " + splicePredicate[0] + " " + spliceObject[0];
        console.log(verse);
        return verse;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=RandomPoem.js.map