
import React, { useEffect, useRef, useState } from 'react'
import Modal from './Modal';
import { collection, addDoc, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { toast } from 'react-toastify';





export default function Docs({
  database
}) {

  const collectionRef = collection(database, 'docsData')
  const addData = () => {
    addDoc(collectionRef, {
      title: title,
      docsDesc: ""
    })
      .then(() => {
        alert('Document Added')
        handleClose()
      })
      .catch(() => {
        alert('Cannot add Document')
      })
  }

  //to delete doc
  function deleteDocument(id) {
    const docRef = doc(database, 'docsData', id)
    deleteDoc(docRef)
      .then(() => {
        toast.success('Document Deleted', {
          autoClose: 2000
        })
      })
      .catch(() => {
        toast.error('Cannot Delete Document', {
          autoClose: 2000

        })
      }, 1500)

  }




  const getData = () => {
    onSnapshot(collectionRef, (data) => {
      setDocsData(data.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }

      }))
      // console.log(data.docs.map((doc)=>{
      // }));
    })
  }

  useEffect(() => {
    if (isMounted.current) {
      return
    }
    isMounted.current = true;
    getData()
  }, [])

  const isMounted = useRef()


  const getId = (id) => {
    // console.log(id);
    navigate(`/editDocs/${id}`)
  }
  let params = useParams();
  console.log(params);

  let navigate = useNavigate();


  const [title, setTitle] = useState('')
  const [docsData, setDocsData] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <div className='main'>
      <h1>DOCS APP</h1>
      <button onClick={handleOpen} className='add-docs'> + Add  Document</button>
      <div className='grid-main '>
        {docsData.map((doc) => {
          return (
            <div className='grid-child' >
              {/* <p className='title'>{doc.title}</p> */}
              <div>
                <b className='title'>{doc.title}</b>

              </div>
              <br />
              <div className='dingi'>

                <div dangerouslySetInnerHTML={{ __html: doc.docsDesc }} />
              </div>
              <div className='blah'>

                {/* <b className='title'>{doc.title}</b> */}

                <DeleteIcon style={{ color: "red" }} onClick={() => deleteDocument(doc.id)} className='delete' />


                <EditIcon style={{ color: "black", marginTop: "10px" }} onClick={() => getId(doc.id)} className='edit' />
              </div>

            </div>
          )
        })}
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        title={title}
        setTitle={setTitle}
        addData={addData}
      />
    </div>
  )
}