import logo from './logo.svg';
import './App.css';
import hero from './images/illustration-hero.svg'

function App() {
  return (
    <div className="App">
      <main className ="order-summary-card">
          <div className="order-summary-img">
            <img src={hero} />
          </div>

          <div className="order-summary-details">
            <h1 className="order-summary-header">Order Summary</h1>

            <p className="order-summary-desc">
                You can now listen to millions of songs, audiobooks, and
                podcasts on any device anywhere you like!
            </p>

            <div className="order-summary-subscription">
              <div className="order-summary-plan">
                <i class="ri-music-2-fill"></i>
                <div className="order-summary-subscription-plan">
                  <p><small><strong>Annual Plan</strong></small></p>
                  <p><small>$59.99/year</small></p>
                </div>
              </div>
              <a href="">change</a>
            </div>


            <button className="order-summary-btn Proceed"> Proceed to Payment</button>
            <button className="order-summary-btn cancel"> Cancel Order</button>

          </div>

      </main>
    </div>
  );
}

export default App;
