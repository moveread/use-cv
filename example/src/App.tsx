import React from 'react';
import { useOpenCv } from 'use-cv';
import { Component } from './Component';


function App() {
  const cv = useOpenCv();
  if (cv)
    return <Component cv={cv} />
  else
    return <p>Loading</p>
}

export default App;
