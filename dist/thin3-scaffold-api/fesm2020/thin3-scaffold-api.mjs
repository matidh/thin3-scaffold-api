import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class Thin3ScaffoldApiService {
    constructor() { }
}
Thin3ScaffoldApiService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: Thin3ScaffoldApiService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
Thin3ScaffoldApiService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: Thin3ScaffoldApiService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: Thin3ScaffoldApiService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class Thin3ScaffoldApiComponent {
    constructor() { }
}
Thin3ScaffoldApiComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: Thin3ScaffoldApiComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
Thin3ScaffoldApiComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: Thin3ScaffoldApiComponent, selector: "lib-thin3-scaffold-api", ngImport: i0, template: `
    <p>
      thin3-scaffold-api works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: Thin3ScaffoldApiComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-thin3-scaffold-api',
                    template: `
    <p>
      thin3-scaffold-api works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class Thin3ScaffoldApiModule {
}
Thin3ScaffoldApiModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: Thin3ScaffoldApiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
Thin3ScaffoldApiModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: Thin3ScaffoldApiModule, declarations: [Thin3ScaffoldApiComponent], exports: [Thin3ScaffoldApiComponent] });
Thin3ScaffoldApiModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: Thin3ScaffoldApiModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: Thin3ScaffoldApiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        Thin3ScaffoldApiComponent
                    ],
                    imports: [],
                    exports: [
                        Thin3ScaffoldApiComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of thin3-scaffold-api
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Thin3ScaffoldApiComponent, Thin3ScaffoldApiModule, Thin3ScaffoldApiService };
//# sourceMappingURL=thin3-scaffold-api.mjs.map
