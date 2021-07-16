import React, { useState } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import EditJobApplicationModal from './modals/EditJobApplicationModal';

const JobApplication = (props) => {
  const [show, setShow] = useState(false);

  return (
    // <>
    //   {props.company_name && (
    //     <div className="job-application">
    //       <div className="row space-around">
    //         <p>{props.company_name}</p>
    //         <p className="ml">{props.job_title}</p>
    //         <p className="ml">{props.status}</p>
    //       </div>
    //       <button
    //         className="btn btn-close"
    //         type="button"
    //         onClick={() => setShow(true)}
    //       >
    //         Edit
    //       </button>
    //       <EditJobApplicationModal
    //         // eslint-disable-next-line no-underscore-dangle
    //         jobAppId={props._id}
    //         onClose={() => setShow(false)}
    //         show={show}
    //       />
    //       <button
    //         className=" btn btn-delete"
    //         type="button"
    //         // eslint-disable-next-line no-underscore-dangle
    //         onClick={() => props.deleteJobApplication(props._id)}
    //       >
    //         Delete
    //       </button>
    //     </div>
    //   )}
    // </>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={props.job_title}
        // secondary={secondary ? 'Secondary text' : null}
        secondary={props.status}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit" onClick={() => setShow(true)}>
          <EditIcon />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="delete"
          // eslint-disable-next-line no-underscore-dangle
          onClick={() => props.deleteJobApplication(props._id)}
        >
          <DeleteIcon />
        </IconButton>
        <EditJobApplicationModal
          // eslint-disable-next-line no-underscore-dangle
          jobAppId={props._id}
          onClose={() => setShow(false)}
          show={show}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default JobApplication;
