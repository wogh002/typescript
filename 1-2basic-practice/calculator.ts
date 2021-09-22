{
    type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
    function calculate(command:Command, arg: number, arg2: number): number {
        switch (command) {
            case 'add':
                return arg + arg2;
            case 'substract':
                return arg - arg2;
            case 'multiply':
                return arg * arg2;
            case 'divide':
                return arg / arg2;
            case 'remainder':
                return arg % arg2;
            default:
                throw Error('unknown command');
        }
    }
    console.log(calculate('add', 1, 3));//4
    console.log(calculate('substract', 3, 1))//2
    console.log(calculate('multiply', 4, 2)) //8
    console.log(calculate('divide', 4, 2)) // 2
    console.log(calculate('remainder', 5, 2)) //1
}