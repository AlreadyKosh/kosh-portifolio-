import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialButtonComponent } from '../social-button/social-button.component';
import { CardComponent } from '../card/card.component';
import { MyIconComponent } from '../my-icon/my-icon.component';

@Component({
	selector: 'app-projeto-card',
	standalone: true,
	imports: [
		SocialButtonComponent,
		FontAwesomeModule,
		CardComponent,
		CommonModule,
		MyIconComponent,
	],
	templateUrl: './projeto-card.component.html',
	styleUrl: './projeto-card.component.scss',
})
export class ProjetoCardComponent {
	@Input() imgLink: string = '';
	@Input() alt: string = '';
	@Input() label: string = '';
	@Input() description: string = '';
	@Input() icons: any = [];

	showBack: boolean = false;

	virarCard(): void {
		this.showBack = !this.showBack;
	}
}
