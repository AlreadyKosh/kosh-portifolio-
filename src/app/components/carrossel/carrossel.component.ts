import { Component, OnInit, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoCardComponent } from '../projeto-card/projeto-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
	selector: 'app-carrossel',
	standalone: true,
	imports: [CommonModule, ProjetoCardComponent, FontAwesomeModule],
	templateUrl: './carrossel.component.html',
	styleUrl: './carrossel.component.scss',
})
export class CarrosselComponent implements OnInit {
	@Input() cards: any[] = [];

	startIndex: number = 0;
	activeIndex: number = 0;
	visibleCards: any[] = [];
	numVisibleCards!: number;

	nextClicked: boolean = false;
	prevClicked: boolean = false;

	ngOnInit(): void {
		this.updateVisibleCards();
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: Event) {
		this.updateVisibleCards();
	}

	next(): void {
		this.activeIndex = (this.activeIndex + 1) % this.cards.length;
		this.updateVisibleCards();
	}

	prev(): void {
		this.activeIndex =
			(this.activeIndex - 1 + this.cards.length) % this.cards.length;
		this.updateVisibleCards();
	}

	updateVisibleCards(): void {
		const screenWidth: number = window.innerWidth;

		if (screenWidth < 768) {
			this.numVisibleCards = 1;
		} else if (screenWidth <= 1024) {
			this.numVisibleCards = 3;
		} else {
			this.numVisibleCards = 3;
		}

		if (this.numVisibleCards > 1) {
			// Calcular o índice do card central
			const middleIndex = Math.floor(this.numVisibleCards / 2);

			// Adicionar margem aos cards à esquerda e à direita do card central
			for (let i = 0; i < this.visibleCards.length; i++) {
				if (i !== middleIndex) {
					this.visibleCards[i].marginClass = 'custom-margin';
				} else {
					this.visibleCards[i].marginClass = '';
				}
			}
		} else {
			// Remover a classe de margem se houver apenas um card visível
			for (let i = 0; i < this.visibleCards.length; i++) {
				this.visibleCards[i].marginClass = '';
			}
		}

		this.startIndex = this.activeIndex % this.cards.length;

		this.visibleCards = [];
		for (let i = 0; i < this.numVisibleCards; i++) {
			const index = (this.startIndex + i) % this.cards.length;
			this.visibleCards.push(this.cards[index]);
		}
	}
}
