import { Observable } from "rxjs";


const search$ = new Observable(observer => {
    console.log("Observable start: ")
    observer.next(1);
    observer.next(2);
    observer.next(3);
    console.log("Observable end");
});

console.log("Start subscribe");
search$.subscribe(value => {
    console.log(value);
});
console.log("End subscribe");
