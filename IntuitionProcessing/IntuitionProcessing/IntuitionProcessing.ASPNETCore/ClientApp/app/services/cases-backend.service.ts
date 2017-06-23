import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Case } from '../models/case';

@Injectable()
export abstract class CasesBackendService {
	abstract getCases(): Observable<Case[]>;

	abstract getCase(id: number): Observable<Case>;

	abstract saveCase(updatedCase: Case): Observable<void>;

    abstract addCase(newCase: Case): Observable<Case>;

    abstract deleteCase(caseObj: Case): Observable<void>;
}