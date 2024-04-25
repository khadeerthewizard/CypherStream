import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import "../style/home.css"

function Index() {
  return (

    <main className="bg">

      <div className="content">
        <div className="title">
          <div id="s-title">
            <p><TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Digital Evidence',
                1500, // wait 1s before replacing "Mice" with "Hamsters"
                'Privacy Regulations',
                1500,
                'Forensics Tools',
                1500
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            /></p>
          </div>
        </div>

        <div className='subtitle'>
          <p>Unlocking the power of blockchain for data.</p>
        </div>

        <button><Link to="/cypher">Get Started</Link></button>

      </div>

      <section id="news">
        <h2>The Internet Computer Protocol</h2>
      <p>The Internet Computer reinvents compute on blockchain, incorporating more than a 1000 years of R&D effort. Everything is now on-chain. HTTP. Data. Compute. AI. Your Web3 social network. Your orderbook exchange. Full stack decentralization has arrived on a sovereign network that extends the internet.</p>
      </section>

      
    </main>
  );
}

export default Index;