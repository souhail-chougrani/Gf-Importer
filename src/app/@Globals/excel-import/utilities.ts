import { from } from 'rxjs';


export class AsyncArray {

    data: any[];
    constructor(arr) {
        this.data = arr;
    }

    filterAsync(predicate) {
        // Take a copy of the array, it might mutate by the time we've finished
        const data = Array.from(this.data);
        // Transform all the elements into an array of promises using the predicate
        // as the promise
        return from(

            Promise.all(data.map((element, index) => predicate(element, index, data)))
                // Use the result of the promises to call the underlying sync filter function
                .then(result => {
                    return data.filter((element, index) => {
                        return result[index];
                    });
                })
        );
    }
    // NOTE:
    // split result to valide an not valid data :  this function should retun data LIKE =>
    //   {dataValid:[],dataNotValid:[]}
    splitResultAsync(predicate) {
        const data = Array.from(this.data);

        return from(

            Promise.all(data.map((element, index) => predicate(element, index, data)))
                .then(result => {
                    return data.reduce((init, curr, i) => {
                        if (result[i]) {
                            init = { ...init, dataValid: [...init["dataValid"], data[i]] };
                        } else {
                            init = { ...init, dataNotValid: [...init["dataNotValid"], data[i]] };
                        }
                        return init;
                    }, { dataValid: [], dataNotValid: [] });
                })
        );
    }
    mapAsync(predicate) {
        const data = Array.from(this.data);
        return from(
            Promise.all(data.map((element, index) => predicate(element, index, data)))
                .then(result => {
                    return data.map((element, index) => {
                        return result[index];
                    });
                })
        );
    }

}
export interface DataProcessed<T> {
    dataValid: T[];
    dataNotValid: T[];
}



export function IsEmpty(data) {
    if (typeof (data) === 'number' || typeof (data) === 'boolean') {
        return false;
    }
    if (typeof (data) === 'undefined' || data === null) {
        return true;
    }
    if (typeof (data.length) !== 'undefined') {
        return data.length === 0;
    }
    let count = 0;
    for (const i in data) {
        if (data.hasOwnProperty(i)) {
            count++;
        }
    }
    return count === 0;
}


