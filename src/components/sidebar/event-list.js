import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const EventList = () => {
  const { events } = useStaticQuery(
    graphql`
      query {
        events: allEventsYaml(sort: { order: ASC, fields: date }) {
          nodes {
            label
            description
            date
            date_formatted: date(formatString: "DD. MMMM YYYY", locale: "de")
          }
        }
      }
    `
  );
  const filteredEvents = events.nodes.filter(
    a => new Date(a.date) - new Date() > 0
  );

  if (!filteredEvents.length) {
    return <></>;
  }

  return (
    <section>
      <header className="major">
        <h3>Veranstaltungen</h3>
      </header>
      <div className="mini-posts">
        {filteredEvents.map(function(event, i) {
          return (
            <div key={i}>
              <h4>{event.label}</h4>
              <p>
                {event.date_formatted} {event.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EventList;
