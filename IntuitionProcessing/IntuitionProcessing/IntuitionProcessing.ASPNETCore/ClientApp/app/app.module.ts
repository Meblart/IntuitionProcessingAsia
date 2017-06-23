import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { ErrorComponent } from './components/common/error.component';
import { ProgressComponent } from './components/common/progress.component';
import { CounterComponent } from './components/counter/counter.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/clients/client-details.component';
import { SiteDetailsComponent } from './components/clients/site-details.component';

import { ClientService } from './components/clients/services/client.service';
import { BackendService } from './services/backend.service';
import { MockBackendService } from './services/mock.backend.service';
import { CurrentDataService } from './services/current-data.service';
import { UsersBackendService } from './services/users-backend.service';
import { MockUsersBackendService } from './services/mock-users-backend.service';
import { UsersService } from './components/users/services/users.service';
import { ClientAssignmentsBackendService } from './services/client-assignments-backend.service';
import { MockClientAssignmentsBackendService } from './services/mock-client-assignments-backend.service';

import { AppRoutingModule } from './app-routing.module';

import { CasesComponent } from './components/cases/components/cases.component';
import { CaseDetailsComponent } from './components/cases/components/case-details.component';

import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/users/user-details.component';
import { AssignClientComponent } from './components/users/assign-client.component';

/*CSSes*/
import './assets/css/animate.min.css';
import './assets/css/fresh-bootstrap-table.css';
import './assets/css/paper-dashboard.css';
import './assets/css/themify-icons.css';

import { CasesService } from "./components/cases/services/cases.service";
import { CasesBackendService } from "./services/cases-backend.service";
import { MockCasesBackendService } from "./services/mock-cases-backend.service";
import { Location, LocationStrategy, PathLocationStrategy } from "@angular/common";

@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		NavMenuComponent,
		CounterComponent,
		ErrorComponent,
		ProgressComponent,
		FetchDataComponent,
		HomeComponent,
		ClientsComponent,
		ClientDetailsComponent,
		CasesComponent,
		CaseDetailsComponent,
		SiteDetailsComponent,
		UsersComponent,
		UserDetailsComponent,
		AssignClientComponent
	],
	imports: [
		UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule
	],
	providers: [
		ClientService,
		UsersService,
		{ provide: BackendService, useClass: MockBackendService },
		{ provide: UsersBackendService, useClass: MockUsersBackendService },
		{ provide: ClientAssignmentsBackendService, useClass: MockClientAssignmentsBackendService },
        CurrentDataService,
        CasesService,
        { provide: CasesBackendService, useClass: MockCasesBackendService },
        Location, { provide: LocationStrategy, useClass: PathLocationStrategy }
	]
})
export class AppModule {
}
