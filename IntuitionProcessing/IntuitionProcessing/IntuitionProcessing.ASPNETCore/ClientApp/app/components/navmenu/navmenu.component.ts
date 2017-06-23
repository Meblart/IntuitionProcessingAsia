import { Component, OnInit } from '@angular/core';
import { CurrentDataService } from '../../services/current-data.service';
import { BackendService } from '../../services/backend.service';
import { Setup } from '../../models/setup';
import { Product } from '../../models/product';

@Component({
	selector: 'nav-menu',
	templateUrl: './navmenu.component.html',
})
export class NavMenuComponent implements OnInit {
	constructor(private currentDataService: CurrentDataService,
		private backendService: BackendService) {
	}

	ngOnInit(): void {
		this.backendService.getSetup().then(setup => this.currentDataService.setup = setup).catch(error => this.currentDataService.setup = new Setup(new Array<Product>()));
	}
}
