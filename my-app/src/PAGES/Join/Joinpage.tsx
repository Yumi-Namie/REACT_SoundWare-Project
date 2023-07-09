import React from 'react';
import Footer from '../../components/MOLECULES/Footer/Footer';
import { FormComponent, FormData } from '../../components/MOLECULES/FormValidation/Form';
import './joinpage.css';
import './joinpage-laptop.css';

interface JoinpageProps {}

const Joinpage: React.FC<JoinpageProps> = () => {
  const handleSubmit = (data: FormData) => {
    const jsonData = JSON.stringify(data);
    console.log(jsonData);
  };

  return (
    <>
      <main className="main-join">
        <div className="content">
          <div className="text">
            <h2>
              Join the
              <span className="pink-text"> fun.</span>
            </h2>
          </div>
          <FormComponent onSubmit={handleSubmit} />
        </div>
      </main>
      <div className="pink-circle"></div>
      <div className="purple-circle"></div>
      <Footer />
    </>
  );
};

export default Joinpage;
