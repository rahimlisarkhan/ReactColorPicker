import * as React from 'react';
import {useTheme } from '@mui/material/styles';
// import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Typography';

import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ColorPicker from '../ColorPicker/ColorPicker'
import {drawerWidth,Main,AppBar,DrawerHeader,DrawerBody, ColorBoxList} from './PersistentDrawer.styled'
import ColorBox from '../ColorBox/ColorBox';


const PersistentDrawer = (props) => {

  const {addColorPallette,favoriteColor} = props

  console.log(addColorPallette);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Color Palette
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <List>
          <DrawerBody>
            <ColorPicker addColorPallette={addColorPallette} />
          </DrawerBody>
        </List>
      </Drawer>
      <Main open={open}>
          <ColorBoxList>
            {favoriteColor?.map((colorInfo,index) => <ColorBox key={`Color ${index}`} colorName={colorInfo.colorName} color={colorInfo.background}/>)}
          </ColorBoxList>
      </Main>
    </Box>
  );
}
export default PersistentDrawer
