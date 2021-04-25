import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';
import RectImage from "../../images/Rect.png";
import LineImage from "../../images/Line.png";
import PaperImage from "../../images/Paper.png";
import CircleImage from "../../images/Circle.png";
import EllipseImage from "../../images/Ellipse.png";
import PenImage from "../../images/Pen.png";
import './index.css';

const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

export default function Header()
{

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <>
            <div className="jumbotron">
                <h1 className="display-4 title">SVG Compiler</h1>
                <p className="lead sub-title" style={{display: 'inline'}}>This is a simple compiler that compiles DBN like code to SVG</p>
                <span>
                    <div style={{display: 'inline'}}>
                    <IconButton onClick={() => setOpen(true)} style={{marginLeft: '2px'}}><InfoIcon/></IconButton>
                    </div>
                </span>
            </div>
            <div>
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                      SVG Compiler
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            This compiler enables the users to write simple code in order to draw shapes and generate the corresponding SVGs, along with an option to download the SVG code
                        </Typography>
                        <h4 style={{marginTop: '20px', marginBottom: '20px'}}>Examples</h4>
                        <p style={{marginTop: '20px', marginBottom: '20px'}}>
                            The compiler currently supports the following statements
                        </p>
                        <Typography gutterBottom>
                            1. Paper - Creates a frame
                        </Typography>
                        <img src={PaperImage} alt="rect-help" style={{marginTop: '10px', marginBottom: '10px'}}/>
                        <Typography gutterBottom>
                            2. Pen - Selects stroke color for the next shape
                        </Typography>
                        <img src={PenImage} alt="rect-help" style={{marginTop: '10px', marginBottom: '10px'}}/>
                        <Typography gutterBottom>
                            3. Line - Draws a line
                        </Typography>
                        <img src={LineImage} alt="rect-help" style={{marginTop: '10px', marginBottom: '10px'}}/>
                        <Typography gutterBottom>
                            4. Rect - Draws a rectangle
                        </Typography>
                        <img src={RectImage} alt="rect-help" style={{marginTop: '10px', marginBottom: '10px'}}/>
                        <Typography gutterBottom>
                            5. Circle - Draws a circle
                        </Typography>
                        <img src={CircleImage} alt="rect-help" style={{marginTop: '10px', marginBottom: '10px'}}/>
                        <Typography gutterBottom>
                            6. Ellipse - Draws an ellipse
                        </Typography>
                        <img src={EllipseImage} alt="rect-help" style={{marginTop: '10px', marginBottom: '10px'}}/>
                        <h4 style={{marginTop: '10px', marginBottom: '10px'}}>Colors</h4>
                        <Typography gutterBottom>
                            The Fill / Stroke color supported ranges from 0 to 100, where
                        </Typography>
                        <Typography gutterBottom>
                            0 - White & 100 - Black
                        </Typography>
                        <Typography gutterBottom>
                            The numbers in between give different shades of grey.
                        </Typography>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
}