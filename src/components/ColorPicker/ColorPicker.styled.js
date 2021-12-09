
import { TextField,Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ColorContent = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
    // justifyContent: 'flex-end',
  }));


  export const TextInput = styled(TextField)(({ theme }) => ({
    padding: theme.spacing(3, 0),
    width:'100%',

    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
    // justifyContent: 'flex-end',
  }));

  export const ColorButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(2, 0),
    width:'100%',
    // height:'51px'
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
    // justifyContent: 'flex-end',
  }));
