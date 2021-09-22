{
    // 상수 값을 모아서 사용 할 수 있음. 상수는 대문자
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2 });
    const dayOfToday = DAYS_ENUM.WEDNESDAY;

    //enum of TypeScript 
    //앞글자만 대문자
    //값을 정하지 않으면  0부터시작
    //가능한 enum 사용하지말자 ⚡
    // enum Days {
    //     Monday = 1,
    //     Tuesday,
    //     Wednesday,
    //     Thursday,
    //     Friday,
    //     Saturday,
    //     Sunday,
    // }
    // let day: Days = Days.Saturday;
    // day = Days.Sunday;
    // console.log(day);

    // enum 을 union타입으로 대체해서 사용하자.
    type DaysOfweek = 'Monday' | 'Tuesday' | 'Wednesday';
    const dayOfweek: DaysOfweek = 'Wednesday';
    


}