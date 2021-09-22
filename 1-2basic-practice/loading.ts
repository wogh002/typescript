{
    type LoadingState = {
        state: 'loading';
    };
    type SuccessState = {
        state: 'success';
        response: {
            body: string;
        }
    };
    type FailState = {
        state: 'fail',
        reason: string;
    };
    // 유니온 타입 : 여러 타입들중 하나만 선택 해야 될 경우 사용.
    type ResourceLoadState = LoadingState | SuccessState | FailState;
    function printLoginState2(object: ResourceLoadState) {
        switch (object.state) {
            case 'loading':
                console.log(`😎${object.state}`);
                break;
            case 'success':
                console.log(`😚${object.response.body}`);
                break;
            case 'fail':
                console.log(object.reason);
                break;
            default: throw new Error('asdas');
        }
    }
    printLoginState2({ state: 'loading' });
    printLoginState2({ state: 'success', response: { body: 'loaded' } });
    printLoginState2({ state: 'fail', reason: 'no network' });
}