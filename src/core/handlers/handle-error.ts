import { Observable, of } from 'rxjs';

export function HandleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

        // TODO: better job of transforming error for user consumption
        console.error(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
    };
}