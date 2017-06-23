import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Case } from '../models/case';
import { CasesBackendService } from './cases-backend.service';

var cases: Case[] = [
    { caseId: 1, site: "1 www.bombeltestuje.intuition.com", description: "This is description", creationDate: "11/12/12" },
    { caseId: 2, site: "2 www.bombeltestuje.intuition.com", description: "This is description", creationDate: "12/12/12" },
    { caseId: 3, site: "3 www.bombeltestuje.intuition.com", description: "This is description", creationDate: "13/12/12" },
    { caseId: 4, site: "4 www.bombeltestuje.intuition.com", description: "This is description", creationDate: "14/12/12" },
    { caseId: 5, site: "5 www.bombeltestuje.intuition.com", description: "This is description", creationDate: "15/12/12" },
    { caseId: 6, site: "6 www.bombeltestuje.intuition.com", description: "This is description", creationDate: "16/12/12" }
];

@Injectable()
export class MockCasesBackendService extends CasesBackendService {
	getCases(): Observable<Case[]> {
		return Observable.of(cases);
	}

    getCase(id: number): Observable<Case> {
        return Observable.of(cases.find(obj => obj.caseId == id));
	}

	saveCase(caseToBeSaved: Case): Observable<void> {
        let caseFromDb = cases.find((value, index, obj) => value.caseId === caseToBeSaved.caseId);
        let caseFromDbIndex = cases.indexOf(caseFromDb);
        cases.splice(caseFromDbIndex, 1, caseToBeSaved);
		return Observable.empty<void>();
	}

    addCase(newCase: Case): Observable<Case> {
        cases.push(newCase);
        return Observable.of(newCase);
	}

    deleteCase(caseObj: Case): Observable<void> {
		return Observable.empty<void>();
	}
}