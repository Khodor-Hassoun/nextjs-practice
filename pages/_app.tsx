import MainLayout from '../src/components/layout/main-layout';
import '../styles/globals.css';
import '../styles/general.sass';

function MyApp({ Component, pageProps }:any) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;