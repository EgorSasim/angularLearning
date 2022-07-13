import { of, map, first, Subject, fromEvent, interval, merge, timer, combineLatest, concatMap, take, tap, concat, pluck, delay} from "rxjs";


of(1, 2, 3)
.pipe(
    map((x) => x * x),
)

.subscribe({
    next: v => console.log(`Value: ${v}`),
    error: err => console.log("Smth goes wrong: ", err),
    complete: function() { console.log("Done!!!")}
});


// const click$ = fromEvent(document, 'click');
// const timer$ = interval(1000);
// const timer2$ = interval(1000);

// const clickOrTimer$ = merge(click$, timer$);
// const clickOrTimer2$ = merge(clickOrTimer$, timer2$);

// clickOrTimer2$.subscribe((v) => console.log(v));




// const timerOne$ = timer(1000, 4000);
// const timerTwo$ = timer(2000, 4000);
// const timerThree$ = timer(3000, 4000);

// combineLatest(timerOne$, timerTwo$, timerThree$).subscribe(
//   ([timerValOne, timerValTwo, timerValThree]) => {
   
//     console.log(
//       `Timer One Latest: ${timerValOne},
//      Timer Two Latest: ${timerValTwo},
//      Timer Three Latest: ${timerValThree}`
//     );
//   }
// );




// const switched = of(1, 2, 3).pipe(map((v) => console.log(v ,v*v, v*v*v)));
// switched.subscribe()


// const clicks = fromEvent(document, 'click');
// const result = clicks.pipe(
//   concatMap(() => interval(1000).pipe(take(4)))
// );
// result.subscribe(x => console.log(x));


// of(Math.random()).pipe(
//     concatMap(() => interval(1000).pipe(
//         tap(console.log),
//         map(n => n > 0.5 ? 'big' : 'small')
//     ))
// ).subscribe(console.log);



// const clicks = fromEvent(document, 'click');
// const tagNames = clicks.pipe(pluck('target', 'tagName'));

// tagNames.subscribe(x => console.log(x));



const clicks = fromEvent(document, 'click');
const delayedClicks = clicks.pipe(delay(1000)); 
delayedClicks.subscribe(x => console.log(x));