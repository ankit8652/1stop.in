import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import GetAppIcon from "@mui/icons-material/GetApp";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import { useTheme } from "@mui/material/styles";

export default function DocumentItem(props) {
  const theme = useTheme();
  const { title, category, description } = props.document;

  const handleDownload = () => {
    // Implement download logic here
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: 275,
        "&:hover": {
          boxShadow: `0 0 10px 5px ${theme.palette.primary.main}`,
        },
        margin: "5px",
      }}
    >
      <CardMedia
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.palette.primary.light,
          padding: "20px 0",
        }}
        title="Document"
      >
        <div
          style={{
            backgroundColor: theme.palette.primary.main,
            borderRadius: "50%",
            padding: 10,
          }}
        >
          <PictureAsPdfRoundedIcon
            style={{ fontSize: 60, color: theme.palette.primary.contrastText }}
          />
        </div>
      </CardMedia>
      <CardContent sx={{ flexGrow: 1 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title.length > 15 ? title.substring(0, 15) + "..." : title}
          </Typography>
          <IconButton onClick={handleDownload}>
            <GetAppIcon />
          </IconButton>
        </div>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body2" color="text.secondary">
          <Chip label={category} />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
