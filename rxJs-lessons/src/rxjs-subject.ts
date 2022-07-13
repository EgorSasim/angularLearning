import { Subject, BehaviorSubject, ReplaySubject} from "rxjs";

const subject = new ReplaySubject<number>();

subject.next(1);
subject.next(345);
subject.next(2);

subject.subscribe(val => {
    console.log("First", val);
})

subject.next(3);
subject.subscribe(function(val) {
    setTimeout(() => {
        console.log("Second: ", val);
    }, 2000);
})

subject.next(4);