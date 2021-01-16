import { Box } from "@material-ui/core"

import image from "../images/train.jpg";

const Gallery = () => {
  return (
    <Box ml={1}>
      <img src={image} alt="Train" width="100%" />
    </Box>
  )
}

export default Gallery;