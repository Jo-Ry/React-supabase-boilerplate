import Auth from './components/auth/Auth';

const Authentication = () => {
  return (
    <>
      <Auth providers={['apple', 'github', 'google']} />
    </>
  );
};

export default Authentication;
