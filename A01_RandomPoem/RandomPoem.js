"use strict";
var RandomPoem;
(function (RandomPoem) {
    let subject = ["Der Rabe", "Die Katze", "Der Hund", "Der Fuchs"];
    let predicate = ["mag", "hasst", "liebt", "vergisst"];
    let object = ["die Natur", "den Wald", "den Baum", "die Höhle"];
    for (let i = subject.length; i >= 1; i--) {
        let poem = getVerse(subject, predicate, object);
        console.log(poem);
    }
    function getVerse(_subject, _predicate, _object) {
        let verse = "";
        let subjectVariable = Math.floor(Math.random() * _subject.length);
        verse += _subject.splice(subjectVariable, 1)[0] + " ";
        let predicateVariable = Math.floor(Math.random() * _predicate.length);
        verse += _predicate.splice(predicateVariable, 1)[0] + " ";
        let objectVariable = Math.floor(Math.random() * _object.length);
        verse += _object.splice(objectVariable, 1)[0] + " ";
        return verse;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=RandomPoem.js.map