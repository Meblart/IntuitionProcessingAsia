import { Location } from '@angular/common';
import { Input } from "@angular/core";

export class BaseComponent {
	protected _error: string;
	@Input() set error(value: string) {
		//hide progress dialog before setting error
		this.hideProgress();
		this._error = value;
		//TODO - only for development
		alert(`Error ${this.contextError}`);
		this.isError = value !== undefined && value !== null && value != "";
	}

	get error(): string {
		return this._error;
	}

	protected _contextError: string;
	set contextError(value: string) {
		//hide progress dialog before setting context error
		this.hideProgress();
		this._contextError = value;
		//TODO - only for development
		alert(`Context error ${this.contextError}`);
		this.isContextError = value !== undefined && value !== null && value != "";
	}

	get contextError(): string {
		return this._contextError;
	}

	protected isError: boolean;
	protected isContextError: boolean;

	constructor(private baseLocation: Location) {
	}

	//go back in current route if no progress is showed currently
	protected goBack() {
		if (!this.isProgressShowed) {
			this.baseLocation.back();
		}
	}

	private isProgressShowed: boolean = false;

	private _progressMessage: string;

	get progressMessage(): string {
		return this._progressMessage;
	}

	@Input() set progressMessage(value: string) {
		this._progressMessage = value;
	}
	//show progress with message for current component
	protected showProgress(message: string): void {
		this.isProgressShowed = true;
		this.progressMessage = message;
		//TODO - angular like progress dialog
	}

	//hide progres indicator for current component
	protected hideProgress(): void {
		if (this.isProgressShowed) {
			//TODO - angular like hide progress dialog
			this.isProgressShowed = false;
		}
	}

	//hide progres indicator for current component and go back in current route
	protected hideProgressAndGoBack(): void {
		this.hideProgress();
		this.goBack();
	}
}
