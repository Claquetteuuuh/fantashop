import React from 'react';
import { SmallTitle } from '../../components/Components';
import Card from '../../components/RecruCard/Card';
import './recruitements.scss';

const Recruitements = () => {
    return (
        <section className="recru__container">
        <div className="content_recru">
          <SmallTitle>Recrutements</SmallTitle>
          <div className="container">
            <Card />
          </div>
          </div>
        </section>
    );
};

export default Recruitements;