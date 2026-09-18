import React from 'react';
import Counter from './components/Counter';

const DeshboardPage = () => {
  return (
    <div>
      <h2>Deshboard Page</h2>
      <ul>
        <li>Deshboard item:1</li>
        <li>Deshboard item:2</li>
        <li>Deshboard item:3</li>
      </ul>
      <Counter/>
    </div>
  );
};

export default DeshboardPage;