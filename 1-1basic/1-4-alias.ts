{
    // Type Aliases
    //type 변수명(대문자) = 타입 | 값 | 객체.
    type Text = string;
    const address: Text = '경기';
    type Num = number;
    type Student = {
        name: string,
        age: number;
    };
    const student: Student = {
        name: 'jaeho',
        age: 26,
    }
    // String Literal Type 
    type Name = 'name';
    let ellieName: Name;
    type JSON = 'json';
    const json: JSON = 'json';
    type Boal = true;
    const isCat: Boal = true;

}