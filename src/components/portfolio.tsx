function Portfolio() {
  return (
    <div>
      <h1>My Work</h1>
      <div className="flex justify-between">
        <div className="max-w-72">
          <img src="/assets/projects/cogo.jpg" className="w-72 rounded-lg" />
          <h2>Cogo</h2>
          <p>Group travel made hassle-free.</p>
        </div>
        <div className="max-w-72">
          <img
            src="/assets/projects/subtrackd.jpg"
            className="w-72 rounded-lg"
          />
          <h2>Subtrackd</h2>
          <p>The ultimate subscription management tool.</p>
        </div>
        <div>
          <img
            src="/assets/projects/ZoneHopper1.png"
            className="w-96 rounded-lg"
          />
          <h2>ZoneHopper</h2>
          <p>Discover London</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
