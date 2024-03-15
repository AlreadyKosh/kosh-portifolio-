import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
	selector: 'app-card',
	standalone: true,
	imports: [FontAwesomeModule, CommonModule],
	templateUrl: './card.component.html',
	styleUrl: './card.component.scss',
})
export class CardComponent {
	@Input() iconType: boolean = true;
	@Input() iconName: any = '';
	@Input() iconLink: string = '';
	@Input() alt: string = '';
	@Input() label: string = '';
}
