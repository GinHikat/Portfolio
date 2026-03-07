import "../css/Habits.css";

const Habits = ({ habitsData }) => {
  return (
    <section id="habits" className="habits-section">
      <div className="container">
        <h2 className="section-title">Daily Habits</h2>

        <div className="habits-grid">
          {habitsData.map((habit, index) => (
            <div key={index} className="habit-card glass-panel">
              <div className="habit-content-wrapper">
                <div className="habit-icon">
                  <span className="gradient-text">{index + 1}</span>
                </div>
                <div className="habit-content">
                  <h3 className="habit-name">{habit.name}</h3>
                  <p className="habit-desc">{habit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habits;
