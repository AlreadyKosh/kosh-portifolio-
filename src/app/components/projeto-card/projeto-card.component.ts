import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialButtonComponent } from '../social-button/social-button.component';
import { CardComponent } from '../card/card.component';

@Component({
	selector: 'app-projeto-card',
	standalone: true,
	imports: [
		SocialButtonComponent,
		FontAwesomeModule,
		CardComponent,
		CommonModule,
	],
	templateUrl: './projeto-card.component.html',
	styleUrl: './projeto-card.component.scss',
})
export class ProjetoCardComponent {
	@Input() iconType: any = '';
	@Input() iconName: any = '';
	@Input() imgLink: string = '';
	@Input() alt: string = '';
	@Input() label: string = '';
	@Input() description: string = '';

	showBack: boolean = false;

	virarCard(): void {
		this.showBack = !this.showBack;
	}
}
