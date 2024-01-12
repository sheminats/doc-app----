import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid blue',
  boxShadow: 24,
  p: 5,
};

export default function BasicModal({
 open,setOpen, title,setTitle,addData
}) {
  const handleClose = () => setOpen(false);
  
  return (
    <div>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
       
          <input placeholder='Add Title' className='add-input'
          onChange={(event)=>setTitle(event.target.value)}
          value={title}/>
           <div className='button'>
         <button className='q1' onClick={addData}
                        >
                            Add
                        </button>
                    </div>
        </Box>
      </Modal>
    </div>
  );
}