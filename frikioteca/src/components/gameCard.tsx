import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Game } from "@/types/types";

export default function GameCard(props: Game) {
  const { id, name, description, people, image, alt } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <div className="flex justify-between">
            <Typography variant="body2" color="text.secondary">
              {people}
            </Typography>
            <a href={`/gameDetail/${id}`} className="text-[#a0a0a0] text-ls">
              Ver mas
            </a>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
