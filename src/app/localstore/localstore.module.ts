import { NgModule} from '@angular/core';
import { localStoreRouting} from './localstore-routing.module';
import { LocalstoreComponent} from './localstore.component'
import { shareModule} from '../share/share.module'

@NgModule({
    declarations:[
        LocalstoreComponent
    ],
    imports:[
        localStoreRouting,
        shareModule
    ]
})

export class localStoreModule{

}