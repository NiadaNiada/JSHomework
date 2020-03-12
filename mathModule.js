function getMathModule(x) {
    const y = 2;
    return  {
        sub: () => {
            console.log(x - y);
            return x - y;
        },
        divide: () => {
            console.log(x / y);
            return x / y;
        },
        multiply: () => {
            console.log(x * y);
            return x * y;
        },
        sum:() => {
            console.log(x + y);
            return x + y;
        }
    };
}