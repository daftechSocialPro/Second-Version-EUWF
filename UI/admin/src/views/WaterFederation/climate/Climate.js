import React, { useState, useEffect, useMemo, useRef } from 'react'
import axios from 'axios'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardImage,
  CCol,
  CCardTitle,
  CCardText,
  CRow,
  CCardHeader,
  CCardLink,
  CCallout,
  CModalBody,
  CButton,
  CModal,
  CModalTitle,
  CModalHeader,
} from '@coreui/react'
import { urlClimate, assetUrl } from 'src/endpoints'
import { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit'
import dateFormat from 'dateformat'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilObjectGroup } from '@coreui/icons'
import { customToast } from 'src/components/customToast'
import Pagination from 'src/components/Pagination'
let PageSize = 3
function Climate({ user }) {
  const [Climate, setClimate] = useState([])
  const [visibleXL, setVisibleXL] = useState(false)
  const [ne, setNe] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const naviagate = useNavigate()
  let connection = null
  const connectionRef = useRef(connection)
  useEffect(() => {
    getClimate()
  }, [])
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return Climate.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, Climate])
  const getClimate = () => {
    axios
      .get(urlClimate)
      .then((res) => {
        console.log('climate', res.data)
        setClimate(res.data)
      })
      .catch((err) => console.error(err))
  }

  const addClimate = (e) => {
    e.preventDefault()
    naviagate('/climate/create')
  }
  const getDate = (item) => {
    const startDate = moment(item)
    const timeEnd = moment(new Date())
    const diff = timeEnd.diff(startDate)
    const diffDuration = moment.duration(diff)
    return (
      diffDuration.days() +
      ' days ' +
      diffDuration.hours() +
      ' hrs ' +
      diffDuration.minutes() +
      ' mins'
    )
  }
  const getImage = (item) => {
    const imagePath = `${assetUrl}/${item}`
    return imagePath
  }
  const navigateTo = (e, item) => {
    e.preventDefault()
    naviagate('/climate/edit', {
      state: {
        Climate: item,
      },
    })
  }
  return (
    <>
      <CModal size="xl" visible={visibleXL} onClose={() => setVisibleXL(false)}>
        <CModalHeader
          style={{
            backgroundColor: '#1e4356',
            color: '#fff',
          }}
        >
          <CModalTitle>Climate Public View </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCardBody>
            <MDBRow>
              <MDBCol lg="12">
                <MDBCard className="mb-4">
                  <MDBCardBody className="text-center">
                    {ne && (
                      <MDBCardImage
                        src={getImage(ne.imagePath)}
                        alt="avatar"
                        style={{ borderRadius: '20px', border: 'solid #fff' }}
                        fluid
                      />
                    )}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol lg="12">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <h4 style={{ fontWeight: 'bold' }}>{ne.title}</h4>
                    <hr />
                    <h6>
                      By: {ne.user && ne.user.fullName} | ON: {dateFormat(ne.createdAt)}
                    </h6>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="12">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <div dangerouslySetInnerHTML={{ __html: ne.description }}></div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </CCardBody>
        </CModalBody>
      </CModal>

      <CRow>
        <CCol xs={12}>
          <CCallout className="bg-white"></CCallout>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader className="" style={{ backgroundColor: '#1e4356', color: '#fff' }}>
              <CRow>
                <CCol sm={10}>
                  <strong>Climate</strong> <small>List</small>
                </CCol>
                <CCol sm={2} className="d-flex justify-content-end">
                  <CButton
                    className="text-right bg-white"
                    onClick={addClimate}
                    style={{ color: '#1e4356', borderColor: '#1e4356' }}
                    type="submit"
                  >
                    Add Climate Data
                  </CButton>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <>
                <CRow>
                  {currentTableData.map((item) => (
                    <CCol lg={4} key={item.id}>
                      <CCard className="mb-3">
                        <CCardImage
                          orientation="top"
                          style={{ maxHeight: '260px' }}
                          src={getImage(item.imagePath)}
                        />
                        <CCardBody>
                          <CCardTitle>{item.title}</CCardTitle>
                          <CCardText>{item.description}</CCardText>
                          <CCardText>
                            <small className="text-medium-emphasis">
                              created {getDate(item.createdAt)} ago <br />
                            </small>
                          </CCardText>
                          <div className="d-flex justify-content-between">
                            <CCardLink
                              style={{
                                color: '#1e4356',
                                cursor: 'pointer',
                                textDecoration: 'none',
                              }}
                              onClick={(e) => navigateTo(e, item)}
                            >
                              <CIcon icon={cilPencil} />
                              &nbsp; Edit
                            </CCardLink>
                            &nbsp;
                            <CCardLink
                              onClick={(e) => {
                                setNe(item)
                                setVisibleXL(true)
                              }}
                              style={{
                                color: '#1e4356',
                                cursor: 'pointer',
                                textDecoration: 'none',
                              }}
                            >
                              <CIcon icon={cilObjectGroup} />
                              &nbsp; Public View
                            </CCardLink>
                          </div>
                        </CCardBody>
                      </CCard>
                    </CCol>
                  ))}
                </CRow>
                <Pagination
                  className="pagination-bar"
                  currentPage={currentPage}
                  totalCount={Climate.length}
                  pageSize={PageSize}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Climate
