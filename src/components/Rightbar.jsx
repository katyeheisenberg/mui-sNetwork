import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/6.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://sun9-61.userapi.com/impg/WW5qGcd74Lznsmq0Z-snlSv3EdJzWZwoK1RCgQ/cuGeKOId1tA.jpg?size=1920x1272&quality=95&sign=f45b8f3c44776f1a3f5929167e420c28&type=album"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://sun9-82.userapi.com/impg/Rh4hWtj-0hCggaVlpPWCwjP44-wgCtv00Dku0A/hF4PFs8YST4.jpg?size=1920x1280&quality=95&sign=70420fe3b946881e8a81c2bf0eb14107&type=album"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://sun9-13.userapi.com/impg/aQ5vR41gkuYr3KIug6wYceyPhN4E6gjWOLGEpQ/Mx6dRB-y4zI.jpg?size=2560x1698&quality=95&sign=a681e4ecab1b1a868632015d6acb20ba&type=album"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://www.hollywoodreporter.com/wp-content/uploads/2014/03/tyler.jpg.jpg?w=1024"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Do you wanna buy some hot cheetos?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Dudisimo
                  </Typography>
                  {" Pumpkin pie whatever shit I'm just kidding"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://i.scdn.co/image/ab67616d0000b2731d1bdc25ccd05940d4d285d1"
              />
            </ListItemAvatar>
            <ListItemText
              primary="I dunno howelse to joke"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to niggers
                  </Typography>
                  {"Papapalalalalalpapapapha"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://m.media-amazon.com/images/M/MV5BMTQyMDQ0MjA4M15BMl5BanBnXkFtZTgwNDM3ODAyMzE@._V1_.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Someone
                  </Typography>
                  {"Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
