{
    //Array
    const fruits: string[] = ['π', 'π'];
    const scores: number[] = [1, 2, 3, 4, 5];
    const scores2: Array<number> = [1, 3, 4, 5];

    function printArray(fruits: readonly string[]) {
        //readonly objectμ λΆλ³μ±μ λ³΄μ₯νλ€.
    }
    //Tuple -> interface ,type alias ,class μμλ§ μ¬μ©νμ
    //λ°°μ΄μμ μλ‘ λ€λ₯Έ νμμ λ°μ΄ν°λ₯Ό λ΄μ μ μλ€.
    let student: [string, number];
    student = ['name', 27];
    const [name, age] = student;


}