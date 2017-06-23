import { Location } from "@angular/common";
import { BaseComponent } from "../../models/base.component";
import { Component } from "@angular/core";

@Component({
	selector: "progress-marbles",
	templateUrl: "./progress.component.html"
})
export class ProgressComponent extends BaseComponent {
	constructor(private location: Location) {
		super(location);
	}
}