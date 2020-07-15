import { ModuleWithProviders, NgModule} from "@angular/core";

@NgModule({
    imports: [],
    exports:[]
})

export class NgBootstrapModule {
    constructor() {
        // matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }

    static forRoot(): ModuleWithProviders<NgBootstrapModule> {
        return {
            ngModule: NgBootstrapModule
        };
    }
}