import { debounce, debounceTime, filter, Observable, map, distinctUntilChanged } from "rxjs";


const search$ = new Observable<Event>(observer => {
    const search = document.getElementById('search');

    if (!search) {
        observer.error("Element not found!!!");
        return;
    }

    search?.addEventListener('input', event => {
        observer.next(event);
    })
});

search$.
pipe(
    map(event => {
        return (event.target as HTMLInputElement).value;
    }),
    debounceTime(500),
    distinctUntilChanged(),
)
.subscribe({
    next: event => {
        console.log(event);
    },
    error: err => console.warn(err),
    complete: () => console.log("Event ends!!!"),
});
