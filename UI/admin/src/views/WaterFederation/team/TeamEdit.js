
import React, { useState } from 'react'
import axios from 'axios'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
import { useNavigate,useLocation } from 'react-router-dom'
Quill.register('modules/imageResize', ImageResize);
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CRow,
  CFormLabel,
  CCallout,
  CFormSwitch,
  CFormSelect
} from '@coreui/react'
import { assetUrl, urlTeam} from 'src/endpoints'
import { customToast } from 'src/components/customToast';
function TeamEdit({setIsLodding}) {
    const navigate = useNavigate();
    const location = useLocation();
    const Team = location.state.Team;
    const [position, setPosition] = useState(Team.position)
    const [name, setName] = useState(Team.name)
    const [imagePath, setImg] = useState('');
    const jwt = sessionStorage.getItem('jwt')
    const photoInputHandler = (event) => {
      setImg(event.target.files[0]);
    };
    const handleSubmit = async (event) => {      
      setIsLodding(true)  
      event.preventDefault()  
      const formData = new FormData();  
      formData.set('name', name)
      formData.set('position', position)
      formData.set('imagePath', imagePath)
      formData.set("id",Team.id)
      const form = event.currentTarget
      if (form.checkValidity() === false) {
          event.stopPropagation()
      }
      try {
        await axios.put(`${urlTeam}?jwt=${jwt}`, formData).
        then((res) => {
          setIsLodding(false)
          setPosition('')
          setImg('')
          setName('')
          customToast("Team Successfully update", 0)
          navigate("/team")
          window.location.reload()
        }
        ).catch((err) => {
          setIsLodding(false)
          customToast(err,1)
          console.error(err)
        })
  
      }
      catch (error) {
        setIsLodding(false)
        customToast(error, 1)
        console.error(error)
      }
    }
    const modules = {
      toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' }
        ],
        ['link', 'image', 'video'],
        ['clean']
      ],
      clipboard: {
        matchVisual: false
      },
      imageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize']
      }
    };
    const formats = [
      'header',
      'font',
      'size',
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      'list',
      'bullet',
      'indent',
      'link',
      'image',
      'video'
    ];
    const getImage =(item) =>{
        return `${assetUrl}/${item}`
    } 
  return (
    <CRow>
    <CCol xs={12}>
      <CCallout className='bg-white'>
       
      </CCallout>

    </CCol>
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader style={{ backgroundColor: '#1e4356', color: '#fff' }}>
          <strong>Update </strong> <small>Team</small>
        </CCardHeader>
        <CCardBody>
          <CForm
            className="row g-3 needs-validation"
            validated
            onSubmit={handleSubmit}
          >
            <CCol md={3}></CCol>
            <CCol md={6}>
               <img style={{ maxHeight: '400px', width: "100%", border: "solid #1e4356", borderRadius: "20px" }} src={!imagePath?getImage(Team.imagePath):URL.createObjectURL(imagePath)} />
            </CCol>
            <CCol md={3}></CCol>

            <CCol md={2}>

              <CFormLabel htmlFor="formFileLg">Image</CFormLabel>
              <CFormInput type="file" size="md" accept='image/*' onChange={photoInputHandler}  id="formFileLg" />
            </CCol>

            <CCol md={5}>
                <CFormInput
                  type="text"
                  placeholder="Name..."
                  label="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </CCol>
              <CCol md={5}>
                <CFormInput
                  type="text"
                  placeholder="position..."
                  label="Position"
                  required
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
              </CCol>
            <CCol xs={12} className="d-flex justify-content-end">

              <CButton size='lg' style={{ backgroundColor: '#1e4356', color: '#fff', borderColor: '#1e4356' }} type="submit">
                Update
              </CButton>
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
  )
}

export default TeamEdit