import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function VenueCard(venueProp: any) {
  const venue = venueProp.venueProp;

  useEffect(() => {
    console.log(venueProp.venueProp);
  }, []);

  return (
    <Grid item xs={12} sm={3}>
      <Card>
        <CardHeader title={venue.name}></CardHeader>
        <CardContent>
          {venue.postalCode && (
            <Grid container alignItems={"center"} justifyContent={"center"}>
              <Grid item>
                <Typography variant="body2">Code Postal : </Typography>{" "}
              </Grid>
              <Grid item>
                <Typography variant="body1"> {venue.postalCode}</Typography>
              </Grid>
            </Grid>
          )}
          <Grid container alignItems={"center"} justifyContent={"center"}>
            <Grid item>
              <Typography variant="body2">Ville : </Typography>{" "}
            </Grid>
            <Grid item>
              <Typography variant="body1"> {venue.city.name}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
