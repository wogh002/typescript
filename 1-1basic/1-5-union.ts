{
    // Union Types === OR✨ 많이 쓰임
    //여러 케이스들중에 하나만 선택해야 할 경우  Union Type 사용.
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move2(direction: Direction) {
        console.log(direction);
    }
    move2('up');
    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 32;

    //login
    type SuccessState = {
        result: "success",
        response: {
            body: string;
        }
    }
    type FailState = {
        result: "fail",
        reason: string;
    }
    type LoginState = SuccessState | FailState;

    function login(id: string = "park", password: number = 1234): LoginState {
        return {
            result: "success",
            response: {
                body: "logged in!",
            }
        }
    }
    function printLoginState(state: LoginState): void { //void 는 생략가능.
        //response 가 state 안에 있다면 true
        //(key in object)
        if (state.result === 'success') {
            console.log(`😎${state.response.body}`);
        } else {
            console.log(`😥${state.reason}`);
        }
    }
}
