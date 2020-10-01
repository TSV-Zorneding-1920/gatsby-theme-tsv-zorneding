import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { H2, H3 } from "../../globals";

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
    (a) => new Date(a.date) - new Date() > 0
  );

  if (!filteredEvents.length) {
    return <></>;
  }

  return (
    <section>
      <header className="major">
        <H2>Veranstaltungen</H2>
      </header>
      <div>
        {filteredEvents.map(function (event, i) {
          return (
            <div key={i}>
              <H3>{event.label}</H3>
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
