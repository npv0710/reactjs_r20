class Excercise4 {
    question2(str: string) {
        switch (str) {
            case 'c)':
                //let b = a => a + 100;
                return (a, b, c?) => a + b + c + 1000;
            case 'a)':
                return a => a + 100;
            case 'b)':
                //let b = a => a + 100;
                return (a, b) => a + b + 1000;
        }

        // if (str === 'a') {
        //     return a => a + 100;
        // }else if (str === 'b)'){
        //     return (a, b) => a + b + 1000;
        // }else if (str === 'c)'){
        //     return (a, b, c?) => a + b + c + 1000;
        // }
    }
}

export default Excercise4;