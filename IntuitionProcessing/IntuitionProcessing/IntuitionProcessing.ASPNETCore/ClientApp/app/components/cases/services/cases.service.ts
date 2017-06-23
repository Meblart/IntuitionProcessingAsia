import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Case } from '../../../models/case';
import { CasesBackendService } from '../../../services/cases-backend.service';

@Injectable()
export class CasesService {
    constructor(private casesBackendService: CasesBackendService) {
    }

    getCases(): Observable<Case[]> {
        return this.casesBackendService.getCases();
    }

    getCase(id: number): Observable<Case> {
        return this.casesBackendService.getCase(id);
    }

    saveCase(caseObj: Case): Observable<void> {
        this.casesBackendService.saveCase(caseObj);
        return Observable.of<void>();
    }

    addCase(caseObj: Case): Observable<Case> {
        return this.casesBackendService.addCase(caseObj);
    }

    deleteCase(caseObj: Case): Observable<void> {
        this.casesBackendService.deleteCase(caseObj);
        return Observable.empty<void>();
    }
}