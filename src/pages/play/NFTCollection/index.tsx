import React from "react";
import { Grid } from "@mui/material";
import NFTCard from "../NFTCard";

const NFTCollection = () => {
  return (
    <Grid container justifyContent="space-between" spacing={2}>
      <Grid item xs={3}>
        <NFTCard name="Hottez" tokenId={0} imgUrl="/h1.png" />
      </Grid>
      <Grid item xs={3}>
        <NFTCard name="Snazzy FKR" tokenId={1} imgUrl="/h2.png" />
      </Grid>
      <Grid item xs={3}>
        <NFTCard name="Neonz" tokenId={2} imgUrl="/h3.png" />
      </Grid>
      <Grid item xs={3}>
        <NFTCard name="Hic et Equum" tokenId={3} imgUrl="/h4.png" />
      </Grid>
      {/* <Grid item>
        <NFTCard name="Snazzy FKR" tokenId={1} imgUrl="/h1.png" />
      </Grid>
      <Grid item>
        <NFTCard name="Neonz" tokenId={2} imgUrl="/h4.png" />
      </Grid> */}
    </Grid>
  );
};

export default NFTCollection;
