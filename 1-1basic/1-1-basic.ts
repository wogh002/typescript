{
    const weight: number = 58.6;
    const name: string = "hello";
    const selectedVideo: boolean = true;

    //undefined 값이 아무것도 결정되지 않은 상태
    let age: number | undefined;
    age = undefined;
    age = 2;

    //null 조금 명확하게 여긴 비었다! 
    let person: string | null;
    person = "박재호";
    person = null;

    function find(): number | null {
        return null;
    }

    //unknown 어떤 데이터타입이 올 지 알 수 없음.
    let notSure: unknown = 0; //가능하면 쓰지말자 ⚡
    notSure = "abc";
    notSure = true;

    //any 아무거나 다와! 
    let anything: any = 0; //가능하면 쓰지말자 ⚡
    anything = "hello";

    //void -> return 값이 비었을때
    function print(): void {
        console.log("hello");
        return;
    }
    //never
    function throwError(message: string): never { //아무것도 리턴하지마!!
        //message  -> server (log)
        throw new Error(message); //throw 는 return 이 아니다.
    }

    //object
    function acceptSomeObject(obj: object) { //가능하면 쓰지말자. ⚡
        console.log(obj);
    }
    acceptSomeObject({ name: 'ellie' });
    acceptSomeObject({ animal: 'dog' });

}