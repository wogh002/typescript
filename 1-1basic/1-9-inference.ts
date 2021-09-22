{
    //Type Inference 유추
    let text = "hello";
    // text = 12;
}
//ts는 알아서 return type을 유추(inference)한다 하지만 명시적으로 number  적어주자  ✨
function add(x: number, y: number): number {
    return x + y;
}

const result = add(1, 2);
