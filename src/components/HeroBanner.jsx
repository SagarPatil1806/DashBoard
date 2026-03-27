export const HeroBanner = () => (
  <div className="p-5 mb-5 text-white rounded-5 shadow-lg bg-aureum border-0">
    <h1 className="display-6 fw-bold">Welcome </h1>
    <p className="opacity-75 mb-4">Manage your social media content effectively</p>
    <div className="row g-3">
      {['Active Campaigns: 7', 'Success Rate: 93%', 'Growth Rate: 17.5%'].map((text, i) => (
        <div key={i} className="col-md-4">
          <div className="p-3 border border-white border-opacity-25 rounded-4 bg-white bg-opacity-10">
            <span className="small fw-bold">{text}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);