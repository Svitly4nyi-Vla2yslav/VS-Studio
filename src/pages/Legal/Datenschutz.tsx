const Datenschutz: React.FC = () => {
  return (
    <div className='page'>
      <div className='container'>
        <section className='hero'>
          <h1>Datenschutzerklärung</h1>
          <p>Kurzinformation zur Verarbeitung personenbezogener Daten.</p>
        </section>
        <section className='section card'>
          <p>Wir verarbeiten Daten nur zweckgebunden (Kontaktanfragen, Angebotserstellung, Statistik).</p>
          <p>Rechtsgrundlagen: Art. 6 Abs. 1 lit. b und f DSGVO.</p>
          <p>Betroffene Rechte: Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch.</p>
          <p>Kontakt für Datenschutz: datenschutz@vs-web-studio.de</p>
        </section>
      </div>
    </div>
  );
};

export default Datenschutz;
