{
    //Array
    const fruits: string[] = ['🚑', '🚚'];
    const scores: number[] = [1, 2, 3, 4, 5];
    const scores2: Array<number> = [1, 3, 4, 5];

    function printArray(fruits: readonly string[]) {
        //readonly object의 불변성을 보장한다.
    }
    //Tuple -> interface ,type alias ,class 에서만 사용하자
    //배열에서 서로 다른 타입의 데이터를 담을 수 있다.
    let student: [string, number];
    student = ['name', 27];
    const [name, age] = student;


}