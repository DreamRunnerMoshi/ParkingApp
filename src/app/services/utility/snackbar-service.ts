import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class SnackbarService {
    constructor(private _snackBar: MatSnackBar) {
    }

    openSnackBar(message: string, horizontalPosition?: any) {
        this._snackBar.open(message, 'success', {
            duration: 2000,
            horizontalPosition: horizontalPosition != null ? horizontalPosition : 'right',
            verticalPosition: 'top'
        });
    }
}