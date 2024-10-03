import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";

const scheduleData = [
  {
    date: "Tuesday 21 February, 2024",
    startTime: "10:00 AM",
    endTime: "02:00 PM",
  },
  {
    date: "Wednesday 22 February, 2024",
    startTime: "11:00 AM",
    endTime: "03:00 PM",
  },
  {
    date: "Wednesday 22 February, 2024",
    startTime: "11:00 AM",
    endTime: "03:00 PM",
  },
  {
    date: "Wednesday 22 February, 2024",
    startTime: "11:00 AM",
    endTime: "03:00 PM",
  },
  {
    date: "Wednesday 22 February, 2024",
    startTime: "11:00 AM",
    endTime: "03:00 PM",
  },
];

const ScheduleDetails = () => {
  return (
    <>
      {/* Header Start Here  */}
      <Header />

      <section className="adminManage-LanguagesSec">
        <div className="container">
          <div className="adminAll-usersHeadMainCard">
            <h2 className="adminAll-usersTitleText">Schedule Details</h2>
            <div className="adminScheduleStartDatesMainCard">
              <div className="adminScheduleStartDateCard">
                <p className="adminScheduleStartDateText">Start date:</p>
                <p className="adminScheduleStartDate">20/02/2024</p>
              </div>

              <div className="adminScheduleStartEndCard">
                <p className="adminScheduleStartDateText">End date:</p>
                <p className="adminScheduleStartDate">10/03/2024</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="adminDashboard-deliveryDetailsMainCard">
                <div className="row">
                  {scheduleData.map((item, index) => (
                    <div key={index} className="col-md-3">
                      <div className="adminSchedule-StartdateTimeMainCard">
                        <p>{item.date}</p>
                        <div className="adminSchedule-StartTimeCard">
                          <p className="adminSchedule-StartTime">
                            {item.startTime}
                          </p>
                          <FontAwesomeIcon icon={faArrowRight} />
                          <p className="adminSchedule-StartTime">
                            {item.endTime}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScheduleDetails;
