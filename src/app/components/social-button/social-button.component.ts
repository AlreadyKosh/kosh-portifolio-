import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
	selector: 'app-social-button',
	standalone: true,
	imports: [FontAwesomeModule, CommonModule],
	templateUrl: './social-button.component.html',
	styleUrl: './social-button.component.scss',
})
export class SocialButtonComponent {
	@Input() iconName: any = '';
	@Input() iconType: any = '';
	@Input() link: string = '';
	@Input() iconSize: any = 'lg';
	@Input() widthComponent: string = '';
	@Input() heigthComponent: string = '';
}
