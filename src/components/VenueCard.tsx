import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useEffect } from "react";

export default function VenueCard(venueProp: any) {
  useEffect(() => {
    console.log(venueProp.venueProp);
  });

  return (
    <Card>
      <CardHeader title={venueProp.venueProp.name}></CardHeader>
      <CardContent>
        {/* <p>Code Postal :</p>
        {venueProp.venueProp.postalCode}
        <p>Ville :</p>
        <p>{venueProp.venueProp.city}</p> */}
        <p>{venueProp.venueProp.postalCode}</p>
        {venueProp.venueProp.city}
      </CardContent>
    </Card>
  );
}
