import { Component } from '@angular/core';

import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { SocialButtonComponent } from '../../components/social-button/social-button.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [MenuBarComponent, SocialButtonComponent, ButtonComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {}
