import { useLocation } from 'react-router-dom';

const routeToTitleMap = {
  '/': 'Home Page',
  '/about': 'About Us',
  '/contact': 'Contact Us',
};

function GetTitleFromUrl() {
  const location = useLocation();
  const { pathname } = location;

  const title = routeToTitleMap[pathname] || 'Zomato';
  return title;
}

export default GetTitleFromUrl;
