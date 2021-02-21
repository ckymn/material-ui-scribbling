import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import { Button } from '@material-ui/core';


const SabCard = (props)=>{
  const {avatarUrl, title, price, description, imageUrl} = props;

  return (
    <Card>
      <CardHeader avatar={<Avatar src={avatarUrl}></Avatar>}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={price}
      />
      <CardMedia style={{height:"150px"}} image={imageUrl}/>
      <CardContent>
        <Typography variant="body2" component="p">
            {description?.substring(0,100) + "..."}
        </Typography>
      </CardContent>
      <CardActions>
          <Button size="small">MORE THAN</Button>
      </CardActions>
    </Card>
  );
}

export default SabCard;