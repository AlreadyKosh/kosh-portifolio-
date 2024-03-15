import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import {
	FontAwesomeModule,
	FaIconLibrary,
} from '@fortawesome/angular-fontawesome';

import {
	faGithub,
	faInstagram,
	faTwitter,
	faAngular,
	faReact,
	faHtml5,
	faCss3Alt,
	faSass,
	faBootstrap,
	faJs,
	faNode,
} from '@fortawesome/free-brands-svg-icons';

import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, HomeComponent, FontAwesomeModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'kosh-portifolio-angular';
	constructor(library: FaIconLibrary) {
		// Add an icon to the library for convenient access in other components
		library.addIcons(
			faInstagram,
			faTwitter,
			faGithub,
			faCoffee,
			faBars,
			faAngular,
			faReact,
			faHtml5,
			faCss3Alt,
			faSass,
			faBootstrap,
			faJs,
			faNode
		);
	}
}
