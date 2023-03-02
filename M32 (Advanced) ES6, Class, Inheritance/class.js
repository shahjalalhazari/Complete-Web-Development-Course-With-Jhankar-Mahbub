// syntactic sugar
class Instructor {
    name;
    designaion = "Web course Instructor"
    team = "Web team"
    location;
    /**To give dynamic values for class fields. We hava to pass thought this consteuctor method. And this is build-in method name. And we have to use only this method to pass data. */
    constructor(name, location) {
        /**For assigining value of class fields use 'this.' keyword. */
        this.name = name;
        this.location = location;

    }
    /** function inside class called method. */
    createQuiz(module) {
        console.log(`Please create quiz for module ${module}`);
    }
}

const aamir = new Instructor()
/**For call classes we have to use 'new' kayword. */
console.log(aamir);
aamir.createQuiz(45);
console.log(aamir);