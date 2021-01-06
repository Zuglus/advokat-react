import { Box } from "@material-ui/core"

import image from "./train.jpg";

const Gallery = () => {
  return (
    <Box>
      <img src={image} alt="Pic" width="100%" />
    </Box>
  )
}

export default Gallery;