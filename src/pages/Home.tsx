import { useEffect, useState } from "react";
import axios from "axios";
import VenueCard from "../components/VenueCard";
import { Grid } from "@mui/material";

export default function Home() {
  const cityExample = "Marseille";
  const apiUrl =
    "https://app.ticketmaster.com/discovery/v2/venues.json?keyword=" +
    cityExample +
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

    console.log("VENUES : ", venues);
  };

  useEffect(() => {
    getVenues();
  }, []);

  return (
    <Grid>
      {venues && (
        <div>
          {venues.map((venue: any) => {
            return <VenueCard key={venue.id} venueProp={venue} />;
            // return <p>Salut</p>;
          })}
        </div>
      )}
    </Grid>
  );
}
