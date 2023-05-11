import { useState } from 'react';

function App() {
  return (
    <main className="min-h-screen bg">
      <div className="mb-1 text-purple font-black bg-tahiti">Апаыпы</div>
      <h1 className="text-">Hello</h1>
      <div className="m-10">
        <span className="mx-10"></span>
        <span className="3x"></span>
      </div>
      <ul className="flex  flex-wrap list-none [&>*:nth-child(4)]:mr-0 [&>*:nth-child(2)]:text-blue-50 ">
        <li className="w-52 bg-metal mr-3">Work</li>
        <li className="w-52 bg-metal mr-3">Work</li>
        <li className="w-52 bg-metal mr-3">Work</li>
        <li className="w-52 bg-metal mr-3">Work</li>
        <li className="w-52 bg-metal mr-3">Work</li>
        <li className="w-52 bg-metal mr-3">Work</li>
      </ul>
    </main>
  );
}

export default App;
