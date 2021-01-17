import loadableComponent from '@loadable/component';
import Loading from 'components/Loading';

const fallback = <Loading />;

const HomeComponent = loadableComponent(() => import('./screens/Home'), { fallback });
const RoomsComponent = loadableComponent(() => import('./screens/Rooms'), { fallback });
const PaintingBoardComponent = loadableComponent(() => import('./screens/PaintingBoard'), {
  fallback,
});

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
