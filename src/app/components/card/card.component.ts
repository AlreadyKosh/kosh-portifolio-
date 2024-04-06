import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyIconComponent } from '../my-icon/my-icon.component';

@Component({
	selector: 'app-card',
	standalone: true,
	imports: [FontAwesomeModule, CommonModule, MyIconComponent],
	templateUrl: './card.component.html',
	styleUrl: './card.component.scss',
})
export class CardComponent {
	@Input() iconType: string = 'library';
	@Input() iconName: any = ''; //Nome do icone (FontAwesome)
	@Input() iconPrefix: any = ''; //Nome do icone (FontAwesome)
	@Input() alt: string = ''; // Texto alternativo para as imagens
	@Input() label: string = ''; // Escreve o Texto embaixo do Icone
}
