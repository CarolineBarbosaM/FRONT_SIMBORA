import { createMuiTheme } from '@material-ui/core/styles';
import pallet from './pallet';
import typography from './typography';


const theme = createMuiTheme({
    pallet,
    typography
});

export default theme;