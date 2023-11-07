import React, { useState } from 'react'
import axios from 'axios'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import ImageResize from 'quill-image-resize-module-react'
import { useNavigate, useLocation } from 'react-router-dom'
Quill.register('modules/imageResize', ImageResize)
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
  CFormSelect,
} from '@coreui/react'
import { assetUrl, urlClimate } from 'src/endpoints'
import { customToast } from 'src/components/customToast'
function ClimateEdit({ setIsLodding }) {
  const navigate = useNavigate()
  const location = useLocation()
  const Climate = location.state.Climate
  const [description, setDescription] = useState(Climate.description)
  const [title, setTitle] = useState(Climate.title)
  const [imagePath, setImg] = useState('')
  const jwt = sessionStorage.getItem('jwt')
  const photoInputHandler = (event) => {
    setImg(event.target.files[0])
  }
  const handleSubmit = async (event) => {
    setIsLodding(true)
    event.preventDefault()
    const formData = new FormData()
    formData.set('title', title)
    formData.set('description', description)
    formData.set('imagePath', imagePath)
    formData.set('id', Climate.id)
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    }
    try {
      await axios
        .put(`${urlClimate}?jwt=${jwt}`, formData)
        .then((res) => {
          setIsLodding(false)
          setDescription('')
          setImg('')
          setTitle('')
          customToast('Climate Successfully update', 0)
          navigate('/climate')
          window.location.reload()
        })
        .catch((err) => {
          setIsLodding(false)
          customToast(err, 1)
          console.error(err)
        })
    } catch (error) {
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
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      matchVisual: false,
    },
    imageResize: {
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize'],
    },
  }
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
    'video',
  ]
  const getImage = (item) => {
    return `${assetUrl}/${item}`
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCallout className="bg-white"></CCallout>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader style={{ backgroundColor: '#1e4356', color: '#fff' }}>
            <strong>Update </strong> <small>Climate</small>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3 needs-validation" validated onSubmit={handleSubmit}>
              <CCol md={3}></CCol>
              <CCol md={6}>
                <img
                  style={{
                    maxHeight: '400px',
                    width: '100%',
                    border: 'solid #1e4356',
                    borderRadius: '20px',
                  }}
                  src={!imagePath ? getImage(Climate.imagePath) : URL.createObjectURL(imagePath)}
                />
              </CCol>
              <CCol md={3}></CCol>

              <CCol md={2}>
                <CFormLabel htmlFor="formFileLg">Image</CFormLabel>
                <CFormInput
                  type="file"
                  size="md"
                  accept="image/*"
                  onChange={photoInputHandler}
                  id="formFileLg"
                />
              </CCol>

              <CCol md={5}>
                <CFormInput
                  type="text"
                  placeholder="Title..."
                  label="Title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </CCol>
              <CCol md={5}>
                <CFormInput
                  type="text"
                  placeholder="description..."
                  label="Description"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </CCol>
              <CCol xs={12} className="d-flex justify-content-end">
                <CButton
                  size="lg"
                  style={{ backgroundColor: '#1e4356', color: '#fff', borderColor: '#1e4356' }}
                  type="submit"
                >
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

export default ClimateEdit
