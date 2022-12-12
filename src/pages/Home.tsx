import { useEffect, useState } from "react";
import axios from "axios";
import VenueCard from "../components/VenueCard";
import Map from "../components/Map";
import { Grid } from "@mui/material";

export default function Home() {
  const venueKey = "Marseille";
  const apiUrl =
    "https://app.ticketmaster.com/discovery/v2/venues.json?keyword=" +
    venueKey +
    "&apikey=";
  const apiKey = "8X6HVGOGo28k9tEihXCuPGKj1ty0aMBd";
  const [venues, setVenues] = useState<any[]>([]);

  const getVenues = () => {
    axios
      .get(apiUrl + apiKey)
      .then((res) => {
        console.log(res.data);
        setVenues(res.data._embedded.venues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getVenues();
  }, []);

  return (
    <Grid container>
      {venues && (
        <Grid container justifyContent={"space-around"}>
          {venues.map((venue: any) => {
            return <VenueCard key={venue.id} venueProp={venue} />;
          })}
        </Grid>
      )}
      <Grid>
        <Map apiKey={apiKey} venueKey={venueKey} />
      </Grid>
    </Grid>
  );
}
