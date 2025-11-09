import { Component,Input } from '@angular/core';


@Component({
    selector: 'app-number-box',
    templateUrl: './number-box.component.html',
    styleUrl: './number-box.component.css',
    imports: []
})
export class NumberBoxComponent {
 @Input() label: string = 'Casual';
 @Input() isRequired: boolean = true;
}

