import { debounce, debounceTime, filter, Observable, map, distinctUntilChanged, fromEvent } from "rxjs";


const search$ = new Observable<Event>(observer => {
    const search = document.getElementById('search');
    const stop   = document.getElementById('stopBtn');

    if (!search || !stop) {
        observer.error("Element not found!!!");
        return;
    }

    const onSearch = (event : Event) => {
        console.log(1);
        observer.next(event);
        checkSubscription();
    }

    const onStop = () => {
        checkSubscription();
        observer.complete();
        clear();
    }

    const clear = () => {
        search.removeEventListener('input', onSearch);
        stop.removeEventListener('input', onSearch);
    }

    const checkSubscription = () => {
        if (observer.closed) {
            clear();
        }
    }

    search?.addEventListener('input', onSearch);
    stop?.addEventListener('click', onStop);
}); 

// const search$: Observable<Event> = fromEvent<Event>(document.getElementById('search') as HTMLElement, 'input');

const searchSubscription = search$.
pipe(
    map(event => {
        return (event.target as HTMLInputElement).value;
    }),
    debounceTime(500),
    map(value => value.length > 3 ? value : ''),
    distinctUntilChanged(),
)
.subscribe({
    next: event => {
        console.log(event);
    },
    error: err => console.warn(err),
    complete: () => console.log("Event ends!!!"),
});


setTimeout(() => {
    console.log("unsubscribed!!!");
    searchSubscription.unsubscribe();
}, 3000);

