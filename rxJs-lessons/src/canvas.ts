import { fromEvent, map, Observable, pairwise, switchMap, takeUntil } from "rxjs";

const canvas = <HTMLCanvasElement>document.getElementById('canvas');

const cx = canvas.getContext('2d');
cx!.lineWidth = 4;


interface Position {
    x: number;
    y: number;
}

function drawLine([prev, next]: Position[]) {
    cx?.beginPath();

    cx?.moveTo(prev.x, prev.y);
    cx?.lineTo(next.x, next.y);
    cx?.stroke();
}

const mousemove$ = fromEvent<MouseEvent>(canvas, 'mousemove');
const mousedown$ = fromEvent<MouseEvent>(canvas, 'mousedown');
const mouseup$ = fromEvent<MouseEvent>(canvas, 'mouseup');
const mouseout$ = fromEvent<MouseEvent>(canvas, 'mouseout');

const points$ = mousemove$.pipe(
    map<MouseEvent, Position>(({clientX, clientY}) => {
        const {top, left} = canvas.getBoundingClientRect();
        return {
            x: clientX - left,
            y: clientY - top,
        };
    }),
    pairwise<Position>(),
);


mousedown$.pipe(
    switchMap(() => points$.pipe(
        takeUntil(mouseout$),
        takeUntil(mouseup$),
    ))
).subscribe(drawLine);