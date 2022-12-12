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
    <Grid item xs={3}>
      <Card>
        <CardHeader title={venue.name}></CardHeader>
        <CardContent>
          {venue.postalCode && (
            <Grid container alignItems={"center"} justifyContent={"center"}>
              <Grid item>
                <p>Code Postal : </p>{" "}
              </Grid>
              <Grid item>
                <Typography> {venue.postalCode}</Typography>
              </Grid>
            </Grid>
          )}
          <Grid container alignItems={"center"} justifyContent={"center"}>
            <Grid item>
              <p>Ville : </p>{" "}
            </Grid>
            <Grid item>
              <Typography> {venue.city.name}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
