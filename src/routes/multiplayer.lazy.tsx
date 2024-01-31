import { useEffect } from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import {io} from 'socket.io-client';
import {usePersistStore} from '@/store';

function Index() {
  const socket = io('http://localhost:8010/tic-tac-toe');
  const {bears, addBear,username} = usePersistStore()
  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected');
    });
  }, []);
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <button onClick={() => addBear()}>add a bear</button>
      <div>{bears}</div>
      <div>{username}</div>
    </div>
  )
}



export const Route = createLazyFileRoute('/multiplayer')({
  component: Index,
})