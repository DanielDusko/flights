import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {Flight} from '../../models/flight.model';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightCardComponent {
  @Input() flight: Flight;

  constructor(private cd: ChangeDetectorRef) {
    // aby samemu obsłużyć detekcję
    // cd.detectChanges(); sprawdzi ten komponent wraz z dziecmi
    // cd.markForCheck() - sprawdzi wszystkie komponenty az od roota
  }
}
