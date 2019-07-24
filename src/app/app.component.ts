import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '@core/store';
import { LoadCars } from '@core/store/actions/car.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(private readonly store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadCars());
  }
}
