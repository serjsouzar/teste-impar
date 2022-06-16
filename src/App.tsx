import { Dashboard } from "./components/Dashboard";
import { Navbar } from "./components/Navbar";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";

Modal.setAppElement('#root');

export function App() {

  return (
    <div className="App">
      <Navbar />

      <Dashboard />
      
      <GlobalStyle />
    </div>
  );
}
