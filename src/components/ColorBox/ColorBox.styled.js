import { styled, Typography } from "@mui/material";

export const ColorBoxContent = styled('div')(({ theme,color }) => ({
    width:"20%",
    height:160,
    position: "relative",
    backgroundColor:color,
    padding: theme.spacing(2),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  
  
  export const ColorBoxTitle = styled(Typography)((theme)=>({
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    position: "absolute",
    width: 160,
    height: 50,
    right: 0,
    bottom: 0,
    color:'white',
    padding:2,
    backgroundColor:'black'
  }))