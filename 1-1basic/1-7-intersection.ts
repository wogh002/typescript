{
    // Intersection Types : &
    type Student = {
        name: string,
        score: number,
    }
    type Worker = {
        empolyeId: number;
        work: () => void,
    }
    function interWorker(person: Student & Worker) {
        console.log(person.name, person.empolyeId, person.work());
    }
    interWorker({
        name: 'ellie',
        score: 100,
        empolyeId: 1,
        work: () => { },
    })
}
