"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sort = (list) => {
    const length = list.length;
    if (length <= 1) {
        return list;
    }
    for (let i = 0; i < length - 1; i++) {
        let min = 1;
        for (let j = i + 1; j < length; j++) {
            if (list[min] > list[j]) {
                min = j;
            }
        }
        if (min !== i) {
            const temp = list[i];
            list[i] = list[min];
            list[min] = temp;
        }
    }
    return list;
};
const listArr = sort([11, 12, 54, 65, 56, 34, 676]);
console.log((listArr));
