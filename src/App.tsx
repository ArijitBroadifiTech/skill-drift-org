import AuthenticatedLayout from './components/layout/authenticated-layout';
import Odd from './modules/Odd';

function App() {
  return (
    <div className='flex min-h-svh flex-col items-center justify-center '>
      <AuthenticatedLayout>
        <Odd />
      </AuthenticatedLayout>
    </div>
  );
}

export default App;
