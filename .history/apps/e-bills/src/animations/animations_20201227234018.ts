// import { trigger } from '@angular/animations';

import {
  animateChild,
  transition,
  style,
  query,
  group,
  animate,
  trigger,
} from '@angular/animations';

// export const slideInAnimation = trigger('routeAnimations', [transition('HomePage <=> loginPage', [style({ position: 'relative' }),
// query(':enter, : leave', style({position: 'absolute', top: 0, left: 0, width: '100%'}))])])
export const slideInAnimation = trigger('routeAnimations', [
  transition('loginPage <=> homePage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
]);