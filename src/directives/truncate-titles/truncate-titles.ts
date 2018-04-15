import { Directive , ElementRef } from '@angular/core';

/**
 * Generated class for the TruncateTitlesDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[truncateTitles]' // Attribute selector
})
export class TruncateTitlesDirective {

  constructor( element: ElementRef) {
    console.log(element);
  }

}
