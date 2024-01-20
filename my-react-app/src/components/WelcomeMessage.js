// src/components/WelcomeMessage.js
import React from 'react';
import HoverBox from './HoverBox';
import './WelcomeMessage.css'; // Import the CSS for styling

function WelcomeMessage() {
  const categories = [
    
    { title: 'Agriculture et alimentation', subtitle: 'Explore agriculture and food data' },
    { title: 'Économie et entreprises', subtitle: 'Explore economy and business data' },
    { title: 'Éducation et recherche', subtitle: 'Explore education and research data' },
    { title: 'Environnement, ressources naturelles et énergie'},
    { title: 'Gouvernement et finances', subtitle: 'Explore government and finance data' },
    { title: 'Infrastructures', subtitle: 'Explore infrastructure data' },
    { title: 'Loi, justice et sécurité publique', subtitle: 'Explore law, justice, and public safety data' },
    { title: 'Politiques sociales', subtitle: 'Explore social policy data' },
    { title: 'Santé', subtitle: 'Explore health data' },
    { title: 'Société et culture', subtitle: 'Explore society and culture data' },
    { title: 'Tourisme, sports et loisirs', subtitle: 'Explore tourism, sports, and leisure data' },
    { title: 'Transport', subtitle: 'Explore transportation data' },
  ];

  return (
    <div style={{ marginTop: '60px', padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to Our Data Portal</h1>
      <p>Explore a variety of datasets across different categories:</p>
      <div className="category-container">
        {categories.map((category, index) => (
          <HoverBox key={index} title={category.title} subtitle={category.subtitle} />
        ))}
      </div>
    </div>
  );
}

export default WelcomeMessage;
