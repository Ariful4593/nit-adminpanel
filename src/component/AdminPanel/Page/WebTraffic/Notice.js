import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import admin1 from '../../../../image/student.png'
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import './Notice.css'
import { useEffect } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
}));
const Notice = ({ category }) => {
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/getPost')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [singlePost, setSinglePost] = useState([])
    const [updatePost, setUpdatePost] = useState('')
    const handleClickOpen = (id) => {
        fetch(`http://localhost:4000/singlePost/${id}`)
            .then(res => res.json())
            .then(data => {
                setSinglePost(data)
            })
        setOpen(true);
    };
    const handleClose = (id) => {
        fetch('http://localhost:4000/editPost', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ description: updatePost, id: id })
        })
            .then(res => res.json())
            .then(result => console.log('Post Updated'))
        setOpen(false);
    };

    const handleReeditPost = (e) => {
        if (e.target.name === 'repost') {
            setUpdatePost(e.target.value)
        }
    }
    const handleDelete = (id) => {
        fetch(`http://localhost:4000/deletePost/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Paper square className={classes.paper} style={{ height: `${category === 'Notice Board' ? '700px' : '400px'}`, overflow: 'scroll', width: '100%', background: 'none' }}>
                <Typography className={classes.text} variant="h5" gutterBottom>
                    Inbox
                </Typography>
                <List className={classes.list}>
                    {

                        post.map(({ _id, title, description, date }) => (
                            <React.Fragment key={_id}>
                                {_id === 1 && <ListSubheader className={classes.subheader}>Today</ListSubheader>}
                                {_id === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
                                <div className="container mt-3" style={{ borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px', backgroundColor: '#242526' }}>
                                    <div className="row" >
                                        <div className={`${category === 'Notice Board' ? 'col-md-1 mt-3' : 'col-md-2 mt-3'} col-md-1 mt-3`} style={{ marginLeft: '20px' }}>
                                            <img style={{ width: '50px', borderRadius: '30px', backgroundColor: 'rebeccapurple' }} src={admin1} alt="" />
                                        </div>
                                        <div className="col-md-6 pl-0  mt-3">
                                            <h5 className="m-0 text-white">Nissan</h5>
                                            <small className="text-white">Moderator . {date}</small>
                                        </div>
                                        <div className={`${category === 'Notice Board' ? 'col-md-4' : 'col-md-2'} pl-0  mt-3 d-flex justify-content-end`}>

                                            <div className="dropdown">
                                                <button className="btn text-white" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"

                                                    aria-expanded="false">
                                                    <MoreHorizIcon />
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <ul className="dropdown-item bg-light" >
                                                        {/* <li onClick={() => handlePost(_id, 'Edit Post')}>Edit Post</li> */}

                                                        <li onClick={() => handleClickOpen(_id)}>Edit Post</li>



                                                        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                                                            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                                                                Edit Post
                                                            </DialogTitle>
                                                            <DialogContent dividers>
                                                                <TextareaAutosize aria-label="minimum height"
                                                                    name="repost"
                                                                    defaultValue={open ? singlePost.description : ''}
                                                                    onBlur={handleReeditPost} rowsMin={8} className="w-100" placeholder="Re-post" />

                                                            </DialogContent>
                                                            <DialogActions>
                                                                <Button autoFocus onClick={() => handleClose(_id)} color="primary">
                                                                    Save changes
                                                            </Button>
                                                            </DialogActions>
                                                        </Dialog>
                                                        <li onClick={() => handleDelete(_id)}>Delete Post</li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ListItem button className="">
                                        <ListItemText className="text-white" primary={title} secondary={description} />
                                    </ListItem>
                                </div>

                            </React.Fragment>
                        ))
                    }
                </List>
            </Paper>

        </React.Fragment>
    );
};

export default Notice;