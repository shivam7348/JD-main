import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CAvatar,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormInput,
  CPagination,
  CPaginationItem,
  CInputGroup,
  CCol,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPeople, cilArrowTop, cilArrowBottom, cifIn } from "@coreui/icons";
import avatar1 from "../../../assets/admin/images/avatars/1.jpg";
import moment from "moment";

const Members = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortData, setSortData] = useState("");
  const itemsPerPage = 25;

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `${process.env.VITE_BACKEND_URL}/api/getUser`,
        {
          params: {
            page: currentPage,
            limit: itemsPerPage,
            sortBy: sortData.key,
            sortDirection: sortData.direction,
            search: searchTerm,
          },
        }
      );
      setUsers(response.data.users);
      setTotalPages(response.data.totalPages);
      setTotal(response.data.total);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage, sortData, searchTerm]);

  const requestSort = (key) => {
    let direction = "asc";
    if (sortData.key === key && sortData.direction === "asc") {
      direction = "desc";
    }
    setSortData({ key, direction });
  };

  const shortByIcon = (column) => {
    if (sortData.key !== column) return null;
    return sortData.direction === "asc" ? (
      <CIcon icon={cilArrowTop} />
    ) : (
      <CIcon icon={cilArrowBottom} />
    );
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <CRow>
      <CInputGroup
        className="me-3"
        style={{ width: "15rem", borderRadius: "1rem" }}
      >
        <CFormInput
          className="mb-3"
          placeholder="Search by user name"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </CInputGroup>

      <CTable align="middle" className="mb-0 border" hover responsive>
        <CTableHead className="text-nowrap">
          <CTableRow>
            <CTableHeaderCell className="bg-body-tertiary text-center">
              <CIcon icon={cilPeople} />
            </CTableHeaderCell>
            <CTableHeaderCell
              className="bg-body-tertiary"
              onClick={() => requestSort("name")}
            >
              User {shortByIcon("name")}
            </CTableHeaderCell>
            <CTableHeaderCell
              className="bg-body-tertiary text-center"
              onClick={() => requestSort("country")}
            >
              Country {shortByIcon("country")}
            </CTableHeaderCell>
            <CTableHeaderCell
              className="bg-body-tertiary"
              onClick={() => requestSort("userType")}
            >
              Status {shortByIcon("userType")}
            </CTableHeaderCell>
            <CTableHeaderCell
              className="bg-body-tertiary text-center"
              onClick={() => requestSort("dou")}
            >
              Activity {shortByIcon("dou")}
            </CTableHeaderCell>

            <CTableHeaderCell
              className="bg-body-tertiary text-center"
              onClick={() => requestSort("createdAt")}
            >
              Signup Date {shortByIcon("createdAt")}
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {users.map((user, index) => (
            <CTableRow key={index}>
              <CTableDataCell className="text-center">
                <CAvatar size="md" src={user?.profileImg?.url || avatar1} />
              </CTableDataCell>
              <CTableDataCell>
                <div>{user?.name}</div>
                <div className="small text-body-secondary">
                  <div>{user.userName}</div>
                  <div>{user.email}</div>
                </div>
              </CTableDataCell>
              <CTableDataCell className="text-center">
                <CIcon size="xl" icon={cifIn} title={user.country} />
              </CTableDataCell>
              <CTableDataCell>
                <div className="d-flex justify-content-between text-nowrap">
                  <div>{user.userType}</div>
                </div>
              </CTableDataCell>
              <CTableDataCell className="text-center">
                <div className="small text-body-secondary text-nowrap">
                  Last login
                </div>
                <div className=" text-nowrap">
                  {moment(user.updatedAt).format("DD MMM YYYY  h:mm a")}
                </div>
              </CTableDataCell>
              <CTableDataCell>
                <div className="d-flex justify-content-between text-nowrap">
                  {moment(user.createdAt).format("DD MMM YYYY h:mm a ")}
                </div>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>

      <CRow className="justify-content-between">
        <CCol xs="auto" className="d-flex align-items-center">
          <span>
            Showing{" "}
            {total === 0 ? 0 : currentPage * itemsPerPage + 1 - itemsPerPage} -{" "}
            {total === 0
              ? 0
              : currentPage * itemsPerPage > total
              ? total
              : currentPage * itemsPerPage}{" "}
            of {total === 0 ? 0 : total} Member
          </span>
        </CCol>

        <CCol xs="auto">
          <CPagination aria-label="Page navigation example">
            <CPaginationItem
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              style={{ cursor: "pointer" }}
            >
              Prev
            </CPaginationItem>
            {Array.from({ length: totalPages }, (_, index) => (
              <CPaginationItem
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
                style={{ cursor: "pointer" }}
              >
                {index + 1}
              </CPaginationItem>
            ))}
            <CPaginationItem
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              style={{ cursor: "pointer" }}
            >
              Next
            </CPaginationItem>
          </CPagination>
        </CCol>
      </CRow>
    </CRow>
  );
};

export default Members;
