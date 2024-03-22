import { Component, OnInit, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoCardComponent } from '../projeto-card/projeto-card.component'; // Importe o componente do projeto

@Component({
	selector: 'app-carrossel',
	standalone: true,
	imports: [CommonModule, ProjetoCardComponent],
	templateUrl: './carrossel.component.html',
	styleUrl: './carrossel.component.scss',
})
export class CarrosselComponent implements OnInit {
	@Input() cards: any[] = [];

	activeIndex = 0;
	visibleCards: any[] = [];
	cardWidth = 300; // Largura inicial do card
	numVisibleCards = 3; // Número inicial de cards visíveis
	carouselWidth = 0; // Largura do carrossel

	ngOnInit(): void {
		this.updateVisibleCards();
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
		// Atualiza o número de cards visíveis com base no tamanho da tela
		this.updateVisibleCards();
	}

	nextClicked = false;
	prevClicked = false;

	next() {
		this.nextClicked = true;
		this.prevClicked = false;
		setTimeout(() => {
			this.nextClicked = false;
			this.activeIndex = (this.activeIndex + 1) % this.cards.length;
			this.updateVisibleCards();
		}, 1000); // Tempo de duração da animação em milissegundos
	}

	prev() {
		this.prevClicked = true;
		this.nextClicked = false;
		setTimeout(() => {
			this.prevClicked = false;
			this.activeIndex =
				(this.activeIndex - 1 + this.cards.length) % this.cards.length;
			this.updateVisibleCards();
		}, 1000); // Tempo de duração da animação em milissegundos
	}

	updateVisibleCards() {
		const numVisibleCards = 5; // número de cards visíveis ao mesmo tempo
		const startIndex =
			(this.activeIndex -
				Math.floor(numVisibleCards / 2) +
				this.cards.length) %
			this.cards.length;
		this.visibleCards = [];
		for (let i = 0; i < numVisibleCards; i++) {
			const index = (startIndex + i) % this.cards.length;
			this.visibleCards.push(this.cards[index]);
		}
	}

	getCardScale(index: number): number {
		const middleIndex = Math.floor(this.visibleCards.length / 2);
		const distanceFromMiddle = Math.abs(index - middleIndex);
		return distanceFromMiddle === 0 ? 1.2 : 1; // Ajuste conforme necessário para a escala desejada
	}

	getCardPosition(index: number): number {
		const middleIndex = Math.floor(this.visibleCards.length / 2);
		const distanceFromMiddle = index - middleIndex;
		return distanceFromMiddle * this.cardWidth * 0.5; // Ajuste para o movimento suave dos cards
	}
}
