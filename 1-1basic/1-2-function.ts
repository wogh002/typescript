{
    // function jsAdd(num1: number, num2: number): number {
    //     return num1 + num2
    // }

    // function jsFetchNum(id: string): Promise<number> {
    //     //code..
    //     //code..
    //     return new Promise((resolve, reject) => {
    //         resolve(200);
    //     })
    // }

    //옵셔널 ? 있어도되고 없어도된다.
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('aaaa');
    printName('jaeho', 'good person');
    printName('jaeho', undefined);

    //Default Parameter
    function printMessage(message: string = "default message") {
        console.log(message);
    }
    printMessage();

    //Rest parameter
    // Rest parameter는 인자를 배열로 나타낼 수 있게 합니다.
    function addNumbers(...number: number[]): number {
        return number.reduce((previous, current) => {
            return previous + current;
        });
    }
    console.log(addNumbers(5, 8, 9, 7, 2, 2, 3));

}