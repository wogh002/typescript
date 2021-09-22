{
    //Type Assertions = !  ⚡ 좋은건 아님.
    function jsStrFunc(): any {
        return 2;
    }
    const result = jsStrFunc();
    //현재 return type any이다 any에는 string의 api인 length 가 없다.
    // 캐스팅(형변환) 
    console.log((result as string).length);
    console.log((<string>result).length);
    const wrong: any = 5;
    // console.log((wrong as Array<number>).push(1));
    function findNumbers(): number[] | undefined {
        return undefined;
    }
    // 뒤에 ! 는 무조건 값이있어! 라는 것. 100%라고 확신한다면 사용하자 ✨ 아래는 undefined라서 사용해서는 안된다.
    const numbers = findNumbers()!;
    numbers.push(2);
    const button = document.querySelector('class')!;
}