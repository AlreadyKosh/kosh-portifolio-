import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
	selector: 'app-my-icon',
	standalone: true,
	imports: [FontAwesomeModule, CommonModule],
	templateUrl: './my-icon.component.html',
	styleUrl: './my-icon.component.scss',
})
export class MyIconComponent {
	@Input() name: any;
	@Input() prefix: any;
	@Input() size: any;
	@Input() type: string = '';
	@Input() iconClass: string = '';
}
