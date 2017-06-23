import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { Case } from '../../../models/case';
import { CasesService } from '../services/cases.service';
import { BaseComponent } from "../../../models/base.component";
import { Observable } from "rxjs/Observable";

@Component({
    templateUrl: './case-details.component.html',
})
export class CaseDetailsComponent extends BaseComponent implements OnInit {
    constructor(private casesService: CasesService,
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private router: Router) {
        super(location);
    }

    case: Case;
    pageTitle: string;
    pageSubBut: string;
    isEditable: boolean;

    ngOnInit(): void {
        this.activatedRoute.params.switchMap((params: Params) => {
            let tmpCase: Observable<Case>;
            try {
                return this.casesService.getCase(params['id']);
            } catch (e) {
                this.error = e;
            }
        }).subscribe(
            caseObj => (caseObj != null) ? this.case = caseObj : this.case = new Case(null, "", "", ""),
            errorObj => this.error = errorObj
        );

        if (this.location.isCurrentPathEqualTo("/cases/case-new")) {
            this.pageTitle = "New Case";
            this.pageSubBut = "Submit";
            this.isEditable = true;
        }
        else if (this.location.isCurrentPathEqualTo("/cases/case-edit/" + this.case.caseId)) {
            this.pageTitle = "Case details";
            this.pageSubBut = "Update";
            this.isEditable = true;
        }
        else {
            this.pageTitle = "Case details";
            this.pageSubBut = "Update";
            this.isEditable = false;
        }
    }

    goBack(): void {
        this.location.back();
    }

    onSubmit(caseObj: Case): void {
        this.showProgress("Working on updates, please wait..")
        try {
            this.casesService.saveCase(caseObj).subscribe(
                caseObj => this.hideProgressAndGoBack(),
                error => this.contextError = error
            );
        }
        catch (e) {
            this.contextError = e;
        }
        this.goBack();
    }

    enableEditing(): void{
        this.isEditable = true;
    }
}