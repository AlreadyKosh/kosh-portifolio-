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
	@Input() iconType: boolean = true; // Escolher o tipo do Icone (True = FontAwesome, False = Link da Imagem)
	@Input() iconName: any = ''; //Nome do icone (FontAwesome)
	@Input() iconLink: string = ''; //Link para os Icones
	@Input() alt: string = ''; // Texto alternativo para as imagens
	@Input() label: string = ''; // Escreve o Texto embaixo do Icone
}
