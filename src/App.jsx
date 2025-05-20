import React from 'react';
import Form from './components/Form';

const App = () => {
  return (
    <div className="max-w-145 mx-auto mt-10 ">
      {/* Centered Label Without Border */}
      <div className="text-center text-black font-semibold text-xl mb-6">
        Post Your Ad
      </div>

      {/* Bordered Form Container */}
      <div className="border border-gray-300 rounded p-4">
        <Form />
      </div>
    </div>
  );
}

export default App;
