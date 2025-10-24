import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuOptions = [
    { label: 'Home', route: '' },
    { label: 'Counter', route: 'counter' },
    { label: 'Structural Directives', route: 'structural-directives' },
    { label: 'Attribute Directives', route: 'attribute-directives' },
    { label: 'Data Binding', route: 'data-binding' },
    { label: 'Service', route: 'service' },
    { label: 'Edu UTVT', route: 'edu' },
    { label: 'Pipes', route: 'pipes' }
  ];
}
