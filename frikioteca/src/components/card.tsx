import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Image from "next/image";

export default function CardComponent() {
  return (
    <Card sx={{ height: 500, width: 500 }}>
      <CardCover>
        <Image
          src="/images/pexels-ketut-subiyanto-4350163.jpg"
          loading="lazy"
          alt=""
          width={500}
          height={500}
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Typography level="title-lg" textColor="#fff">
          Veni a conocernos !
        </Typography>
        <Typography textColor="neutral.300">
          Y a jugar con nosotros...
        </Typography>
      </CardContent>
    </Card>
  );
}
