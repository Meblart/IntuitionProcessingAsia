import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Case } from '../../../models/case';
import { CasesService } from '../services/cases.service';
import { ArrayHelper } from '../../../models/array-helper';

import { BaseComponent } from '../../../models/base.component';

@Component({
    //selector: 'hero-form',
    templateUrl: './cases.component.html',
})

export class CasesComponent extends BaseComponent implements OnInit {
    _cases: Case[];

    get cases(): Case[] {
        return this._cases;
    }

    set cases(value: Case[]) {
        this._cases = value;
    }

    constructor(private casesService: CasesService,
        private location: Location,
        private router: Router) {
        super(location);
    }

    ngOnInit(): void {
        this.showProgress("Please wait, loading cases in progress...");
        this.casesService.getCases().subscribe(
            cases => {
                this.hideProgress();
                this.cases = cases;
            }),
            error => { this.error = error; }
    }
    
    goBack(): void {
        this.location.back();
    }

    addCase(): void {
        this.router.navigate(['./cases/case-new',])
    }

    editCase(caseId: number): void {
        this.router.navigate(['./cases/case-edit', caseId]);
    }

    getCase(caseId: number): void {
        this.router.navigate(['./cases/case-details', caseId]);
    }

    deleteCase(caseObj: Case): void {
        this.showProgress("Deleting case, please wait...")
        try {
            this.casesService.deleteCase(caseObj).subscribe(
                () => { },
                error => this.contextError = error,
                () => {
                    this.hideProgress();
                    ArrayHelper.removeItem<Case>(this.cases, caseObj);
                });
        }
        catch (e) {
            this.contextError = e;
        }
    }

}

