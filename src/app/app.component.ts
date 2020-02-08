import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	addArticle(title:HTMLInputElement, link:HTMLInputElement):Boolean {
		console.log(`Adding aritcle Title:${title.value} and adding article Link:${link.value} `);
		console.log('test');
		return false;
	}
}
