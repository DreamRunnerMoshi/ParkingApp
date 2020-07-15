import { MatDialog } from "@angular/material/dialog";
import { ErrorComponent } from "../../components/error/error.component";

export class ErrorDisplay {
    constructor(private dialog: MatDialog) { }

    public showError(errorResponse) {
        var errorMessage = '';
        if (!!errorResponse.error.errors) {
            var keys = Object.keys(errorResponse.error.errors)
            if (keys.length > 0) {
                var error = errorResponse.error.errors[keys[0]];
                errorMessage = error[0];
            } else {
                errorMessage = errorResponse.error.title;
            }
        } else {
            errorMessage = errorResponse.error.ErrorMessage;
        }
        this.dialog.open(ErrorComponent, {
            data: {
                message: errorMessage
            }
        });
    }
}