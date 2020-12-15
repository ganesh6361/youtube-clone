import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import VideoItem from "./VideoItem";

const VideoList= ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={10} video={video} />)
	
  return (
     <Grid container spacing={10}>
          {listOfVideos}
     </Grid>
  )
	
}

export default VideoList;