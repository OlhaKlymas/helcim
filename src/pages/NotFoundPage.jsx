import MainLayout from './../layouts/MainLayout/MainLayout';
import Button from '../components/UI/Button';

import './../styles/pages/notFound.scss';

const NotFoundPage = () => {
  return (
    <div className='not-found-page'>
      <MainLayout>
        <div className='container not-found-page__container'>
          <h1>Page not found</h1>
          <Button value='Go home' className='btn--pink' link='/helcim' />
        </div>
      </MainLayout>
    </div>
  );
}
  
export default NotFoundPage;
