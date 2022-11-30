import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "red" }}
            aria-label="recipe"
            src="https://st2.depositphotos.com/1001911/10268/v/600/depositphotos_102684970-stock-illustration-smiling-emoticon-with-sunglasses.jpg"
          >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Abhishek Kolge"
        subheader="November 26, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://sun9-84.userapi.com/impg/DNjxGYRQhuF8Tu0MKj2I4iJyMkADIqXjOVqv0A/fznIdfx1pR8.jpg?size=640x808&quality=95&sign=72d988b889715259a6464b585572b0f6&type=album"
        alt="Photo"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Film: Ilford HP5+ | Camera: Pentax | Author: Abhishek Kolge
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>

      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "red" }}
            aria-label="recipe"
            src="https://sun9-61.userapi.com/impg/RLNWg0SGcqccFfVn3D0x6r-UdBqygV2Eedv4Jg/_i8VHUnL8eY.jpg?size=1679x2160&quality=95&sign=1bc6ad0935cbe31b35a615dd786b40aa&type=album"
          >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Anna Danilova"
        subheader="September 11, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://sun9-19.userapi.com/impg/RQhFLHClQvJ1d2oN9e-E327M8aH7f-f0ioTdZw/hfMyvSBnoO8.jpg?size=1284x1920&quality=95&sign=873830010d0d4d4732df4c536396d58f&type=album"
        alt="Photo"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Film: Kodak ?? | Camera: Konica | Author: Anna Danilova
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
