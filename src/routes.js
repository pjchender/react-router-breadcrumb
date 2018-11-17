import { Home, Books, Electronics, Mobile, Desktop, Laptop } from './pages';
const rootPath = process.env.PUBLIC_URL;

const routes = [
  {
    path: `${rootPath}/`,
    component: Home,
    exact: true,
    breadcrumbName: 'Home'
  },
  {
    path: `${rootPath}/books`,
    component: Books,
    breadcrumbName: 'Book'
  },
  {
    path: `${rootPath}/electronics`,
    component: Electronics,
    breadcrumbName: 'Electronics',
    routes: [
      {
        path: `${rootPath}/electronics/mobile`,
        component: Mobile,
        breadcrumbName: 'Mobile Phone'
      },
      {
        path: `${rootPath}/electronics/desktop`,
        component: Desktop,
        breadcrumbName: 'Desktop PC'
      },
      {
        path: `${rootPath}/electronics/laptop`,
        component: Laptop,
        breadcrumbName: 'Laptop'
      }
    ]
  }
];

export default routes;
export { rootPath };
