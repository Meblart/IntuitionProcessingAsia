"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular2_universal_1 = require("angular2-universal");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var app_component_1 = require("./components/app/app.component");
var navmenu_component_1 = require("./components/navmenu/navmenu.component");
var home_component_1 = require("./components/home/home.component");
var fetchdata_component_1 = require("./components/fetchdata/fetchdata.component");
var error_component_1 = require("./components/common/error.component");
var progress_component_1 = require("./components/common/progress.component");
var counter_component_1 = require("./components/counter/counter.component");
var clients_component_1 = require("./components/clients/clients.component");
var client_details_component_1 = require("./components/clients/client-details.component");
var site_details_component_1 = require("./components/clients/site-details.component");
var client_service_1 = require("./components/clients/services/client.service");
var backend_service_1 = require("./services/backend.service");
var mock_backend_service_1 = require("./services/mock.backend.service");
var current_data_service_1 = require("./services/current-data.service");
var users_backend_service_1 = require("./services/users-backend.service");
var mock_users_backend_service_1 = require("./services/mock-users-backend.service");
var users_service_1 = require("./components/users/services/users.service");
var client_assignments_backend_service_1 = require("./services/client-assignments-backend.service");
var mock_client_assignments_backend_service_1 = require("./services/mock-client-assignments-backend.service");
var app_routing_module_1 = require("./app-routing.module");
var cases_component_1 = require("./components/cases/components/cases.component");
var case_details_component_1 = require("./components/cases/components/case-details.component");
var users_component_1 = require("./components/users/users.component");
var user_details_component_1 = require("./components/users/user-details.component");
var assign_client_component_1 = require("./components/users/assign-client.component");
/*CSSes*/
require("./assets/css/animate.min.css");
require("./assets/css/fresh-bootstrap-table.css");
require("./assets/css/paper-dashboard.css");
require("./assets/css/themify-icons.css");
var cases_service_1 = require("./components/cases/services/cases.service");
var cases_backend_service_1 = require("./services/cases-backend.service");
var mock_cases_backend_service_1 = require("./services/mock-cases-backend.service");
var common_1 = require("@angular/common");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        declarations: [
            app_component_1.AppComponent,
            navmenu_component_1.NavMenuComponent,
            counter_component_1.CounterComponent,
            error_component_1.ErrorComponent,
            progress_component_1.ProgressComponent,
            fetchdata_component_1.FetchDataComponent,
            home_component_1.HomeComponent,
            clients_component_1.ClientsComponent,
            client_details_component_1.ClientDetailsComponent,
            cases_component_1.CasesComponent,
            case_details_component_1.CaseDetailsComponent,
            site_details_component_1.SiteDetailsComponent,
            users_component_1.UsersComponent,
            user_details_component_1.UserDetailsComponent,
            assign_client_component_1.AssignClientComponent
        ],
        imports: [
            angular2_universal_1.UniversalModule,
            forms_1.FormsModule,
            forms_2.ReactiveFormsModule,
            app_routing_module_1.AppRoutingModule
        ],
        providers: [
            client_service_1.ClientService,
            users_service_1.UsersService,
            { provide: backend_service_1.BackendService, useClass: mock_backend_service_1.MockBackendService },
            { provide: users_backend_service_1.UsersBackendService, useClass: mock_users_backend_service_1.MockUsersBackendService },
            { provide: client_assignments_backend_service_1.ClientAssignmentsBackendService, useClass: mock_client_assignments_backend_service_1.MockClientAssignmentsBackendService },
            current_data_service_1.CurrentDataService,
            cases_service_1.CasesService,
            { provide: cases_backend_service_1.CasesBackendService, useClass: mock_cases_backend_service_1.MockCasesBackendService },
            common_1.Location, { provide: common_1.LocationStrategy, useClass: common_1.PathLocationStrategy }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map