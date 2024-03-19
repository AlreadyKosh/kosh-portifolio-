import { Component } from '@angular/core';

import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { SocialButtonComponent } from '../../components/social-button/social-button.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';
import { ProjetoCardComponent } from '../../components/projeto-card/projeto-card.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [
		MenuBarComponent,
		SocialButtonComponent,
		ButtonComponent,
		CardComponent,
		ProjetoCardComponent,
		CarouselComponent,
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {}
