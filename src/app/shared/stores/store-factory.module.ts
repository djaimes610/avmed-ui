import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppointmentStoreService } from './appointment/appointment-store.service';
import { UserStoreService } from './user/user-store.service';

@NgModule()
export class StoreFactoryModule {

    static forRoot(): ModuleWithProviders<any> {
        
        return {

            ngModule: StoreFactoryModule,

            providers: [
                {
                    provide: UserStoreService,
                    useClass: UserStoreService
                },
                {
                    provide: AppointmentStoreService,
                    useClass: AppointmentStoreService
                }
            ]

        };

    }
}
