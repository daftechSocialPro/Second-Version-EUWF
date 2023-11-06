import React, { useState } from 'react'
import axios from 'axios'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import ImageResize from 'quill-image-resize-module-react'
import { useNavigate } from 'react-router-dom'
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
  CFormSelect,
} from '@coreui/react'
import { urlTeam} from 'src/endpoints'
import { customToast } from 'src/components/customToast'

function TeamCreate({ setIsLodding }) {
  const navigate = useNavigate()
  const [position, setPosition] = useState('')
  const [name, setName] = useState('')
  const [imagePath, setImg] = useState('')
  const jwt = sessionStorage.getItem('jwt')
  const photoInputHandler = (event) => {
    setImg(event.target.files[0])
  }
  const handleSubmit = async (event) => {
    setIsLodding(true)
    event.preventDefault()
    const formData = new FormData()
    formData.set('name', name)
    formData.set('position', position)
    formData.set('imagePath', imagePath)
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    }
    try {
      await axios.
        post(`${urlTeam}?jwt=${jwt}`, formData)
        .then((res) => {
          setIsLodding(false)
          setPosition('')
          setImg('')
          setName('')
          customToast('Team Successfully created', 0)
          navigate('/team')
        })
        .catch((err) => {
          setIsLodding(false)
          alert(err)
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

  return (
    <CRow>
      <CCol xs={12}>
        <CCallout className="bg-white"></CCallout>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader style={{ backgroundColor: '#1e4356', color: '#fff' }}>
            <strong>Add </strong> <small>Team</small>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3 needs-validation" validated onSubmit={handleSubmit}>
              <CCol md={3}></CCol>
              <CCol md={6}>
                {imagePath && (
                  <img
                    style={{
                      maxHeight: '400px',
                      width: '100%',
                      border: 'solid #1e4356',
                      borderRadius: '20px',
                    }}
                    src={URL.createObjectURL(imagePath)}
                  />
                )}
              </CCol>
              <CCol md={3}></CCol>

              <CCol md={2}>
                <CFormLabel htmlFor="formFileLg">Image</CFormLabel>
                <CFormInput
                  type="file"
                  size="md"
                  accept="image/*"
                  onChange={photoInputHandler}
                  required
                  id="formFileLg"
                />
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
                <CButton
                  size="lg"
                  style={{ backgroundColor: '#1e4356', color: '#fff', borderColor: '#fff' }}
                  type="submit"
                >
                  Submit
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default TeamCreate
