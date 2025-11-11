import { Button } from '@/components/ui/button';

function App() {
  return (
    <div className='flex min-h-svh flex-col items-center justify-center bg-black'>
      <Button className='bg-white'>Click me</Button>
      <button className='bg-amber-300 p-2 text-black font-bold'>Again!!</button>
    </div>
  );
}

export default App;
