import { CommonModule } from '@angular/common';
import {
	Component,
	ElementRef,
	OnInit,
	HostListener,
	ViewChild,
	Input,
} from '@angular/core';

import { ProjetoCardComponent } from '../projeto-card/projeto-card.component';

@Component({
	selector: 'app-carousel',
	standalone: true,
	imports: [ProjetoCardComponent, CommonModule],
	templateUrl: './carousel.component.html',
	styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
	@ViewChild('slider', { static: true }) slider!: ElementRef;
	@Input() cardData: any[] = [];

	touchStartX = 0;
	touchEndX = 0;
	activeIndex = 0;
	slideWidth = 300;
	slideOffset = 0; // Deslocamento horizontal do carrossel

	ngOnInit(): void {
		const middleIndex = Math.floor(this.cardData.length / 2);
		this.activeIndex = middleIndex;
		this.updateSlideOffset();
	}

	updateSlideOffset(): void {
		const sliderWidth = this.slider.nativeElement.offsetWidth;
		this.slideOffset =
			(sliderWidth - this.slideWidth) / 2 -
			this.activeIndex * (this.slideWidth + 10); // Adicione a margem entre os slides
	}

	nextClick(): void {
		this.activeIndex = (this.activeIndex + 1) % this.cardData.length;
		this.updateSlideOffset();
	}

	prevClick(): void {
		this.activeIndex =
			this.activeIndex > 0
				? this.activeIndex - 1
				: this.cardData.length - 1;
		this.updateSlideOffset();
	}

	@HostListener('touchstart', ['$event'])
	onTouchStart(event: TouchEvent): void {
		this.touchStartX = event.touches[0].clientX;
	}

	@HostListener('touchmove', ['$event'])
	onTouchMove(event: TouchEvent): void {
		this.touchEndX = event.touches[0].clientX;
	}

	@HostListener('touchend', ['$event'])
	onTouchEnd(event: TouchEvent): void {
		const touchDiff = this.touchEndX - this.touchStartX;
		if (Math.abs(touchDiff) > 50) {
			// Verifique se o deslocamento foi significativo
			if (touchDiff > 0) {
				this.prevClick();
			} else {
				this.nextClick();
			}
		}
		this.touchStartX = 0;
		this.touchEndX = 0;
	}
}
