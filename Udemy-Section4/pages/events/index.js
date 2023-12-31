import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}/abc`;


    router.push(fullPath)
  }

  return (
    <div>
      <Fragment>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
      </Fragment>
    </div>
  );
}

export default AllEventsPage;
