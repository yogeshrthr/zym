function ClassSchedule() {
  const schedule = [
    {
      day: "MON",
      classes: [
        { time: "6:00 AM", name: "Morning Yoga" },
        { time: "12:00 PM", name: "Hot Blast" }
      ]
    },
    {
      day: "TUE",
      classes: [
        { time: "6:00 AM", name: "Morning Yoga" },
        { time: "12:00 PM", name: "HIIT Blast" },
        { time: "5:30 PM", name: "Barbell Strength" }
      ]
    },
    {
      day: "WED",
      classes: []
    },
    {
      day: "THU",
      classes: [
        { time: "6:00 AM", name: "Morning Yoga" },
        { time: "12:00 PM", name: "Hot Blast" },
        { time: "5:30 PM", name: "Barbell Strength" }
      ]
    },
    {
      day: "FRI",
      classes: [
        { time: "6:00 AM", name: "Morning Yoga" },
        { time: "12:00 PM", name: "Hot Blast" },
        { time: "5:30 PM", name: "Barbell Strength" }
      ]
    },
    {
      day: "SAT",
      classes: []
    },
    {
      day: "SUN",
      classes: []
    }
  ];

  return (
    <section className="schedule-section">

      <h2 className="schedule-title">LIVE CLASS SCHEDULE</h2>

      <div className="schedule-grid">

        {schedule.map((item, index) => (
          <div key={index} className="schedule-day">

            <h3>{item.day}</h3>

            {item.classes.length === 0 ? (
              <p className="no-class">No Classes</p>
            ) : (
              item.classes.map((cls, i) => (
                <div key={i} className="class-card">
                  <p className="time">{cls.time}</p>
                  <p className="name">{cls.name}</p>
                </div>
              ))
            )}

          </div>
        ))}

      </div>

      <button className="schedule-btn">VIEW FULL SCHEDULE</button>

    </section>
  );
}

export default ClassSchedule;