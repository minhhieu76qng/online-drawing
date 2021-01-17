import loadableComponent from '@loadable/component';
import pMinDelay from 'p-min-delay';
import Loading from 'components/Loading';

const fallback = <Loading />;
const delay = 1000;

const HomeComponent = loadableComponent(() => pMinDelay(import('./screens/Home'), delay), {
  fallback,
});
const RoomsComponent = loadableComponent(() => pMinDelay(import('./screens/Rooms'), delay), {
  fallback,
});
const PaintingBoardComponent = loadableComponent(
  () => pMinDelay(import('./screens/PaintingBoard'), delay),
  { fallback },
);

export const routes = [
  {
    path: '/',
    exact: true,
    auth: false,
    title: 'Create, edit, share your own paint | PaintBoard',
    component: HomeComponent,
  },
  {
    path: '/rooms',
    exact: true,
    auth: true,
    title: 'Rooms | PaintBoard',
    component: RoomsComponent,
  },
  {
    path: '/rooms/:id',
    exact: true,
    auth: true,
    component: PaintingBoardComponent,
  },
];
