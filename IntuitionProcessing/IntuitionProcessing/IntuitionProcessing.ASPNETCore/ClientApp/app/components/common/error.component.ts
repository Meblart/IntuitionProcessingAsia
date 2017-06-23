import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from "../../models/base.component";

@Component({
	selector: 'error',
	templateUrl: './error.component.html'
})
export class ErrorComponent extends BaseComponent {
	constructor(private location: Location,
		private router: Router) {
		super(location);
	}
}