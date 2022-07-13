import { map, Observable, Subscriber, take } from "rxjs"


// const obs$ = new Observable(subscriber => {
//     subscriber.next(1);
//     subscriber.next(2);
//     subscriber.next(3);
//     setTimeout(() => {
//         subscriber.next("azaza");
//         subscriber.complete();
//     }, 3000);
// });

// obs$.subscribe({
//     next: val => {
//         console.log("Got the value: ", val);
//     },
//     error: err => console.log("Hmmm... Smth goes wrong"),
//     complete: () => console.log("Done"),
// });



const foo$ = new Observable(subscriber => {
    console.log("hello");
    subscriber.next(2);
});

foo$.subscribe({
    next: val => {console.log(val)},
    error: err => {console.log("Smth goes wrong...", err)},
    complete: () => {console.log('Completed')},
});

foo$
.subscribe({
    next: val => {console.log(val)},
    error: err => {console.log("Smth goes wrong...", err)},
    complete: () => {console.log('Completed')},
});