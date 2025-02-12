import React, { useState, useEffect } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CRow,
  CCol,
  CPagination,
  CPaginationItem,
  CInputGroup,
  CFormInput,
} from "@coreui/react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GrStatusGood } from "react-icons/gr";
import { FaRegEdit, FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineDeleteForever, MdBlock } from "react-icons/md";
import { IoLockOpenOutline, IoLockClosedOutline } from "react-icons/io5";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import moment from "moment";
import { useDispatch } from "react-redux";

import {
  deletePressReleaseItem,
  updateApprovedStatus,
  updatePressReleaseVisibility,
} from "../../../store/admin/adminPressReleaseSlice";

export default function PressReleaseComponent({
  pressReleaseList = pressReleaseList,
  Name = "pressRelease",
  currentPage,
  handlePageChange,
  totalPages,
  total,
  itemsPerPage,
  onSearch,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "createdAt",
    direction: "desc",
  });

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };
  const [sortedPressReleaseList, setSortedPressReleaseList] = useState([]);
  useEffect(() => {
    const filteredPressReleaseList = pressReleaseList.filter((pressRelease) => {
      return (
        !pressRelease.deleted &&
        (pressRelease.heading
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
          pressRelease.type.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });

    const sortedList = [...filteredPressReleaseList].sort((a, b) => {
      if (sortConfig.key === "createdAt") {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return sortConfig.direction === "asc" ? dateA - dateB : dateB - dateA;
      }
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    setSortedPressReleaseList(sortedList);
  }, [pressReleaseList, dispatch]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this pressRelease item?"
    );

    if (confirmDelete) {
      try {
        await axios.put(
          `${process.env.REACT_APP_BASE_URL}/api/admin/press-release/deletePressRelease/${id}`
        );
        dispatch(deletePressReleaseItem(id));
        toast.success("pressRelease item  deleted successfully!");
        window.location.reload();
      } catch (error) {
        toast.error("Failed to delete pressRelease item.");
      }
    }
  };

  const handleEdit = (slug) => {
    navigate(`/admin/press-release/edit/${slug}`);
  };

  const statusOptions = [
    "approved",
    "unapproved",
    "draft",
    "rejected",
    "deleted",
  ];

  const handleStatusChange = (id, approvedStatus) => {
    // Dispatch the Redux action to update the status
    dispatch(updateApprovedStatus({ id, approvedStatus }))
      .unwrap() // Handle promise resolution
      .then(() => {
        // Reload the page after status update is successful
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };
  const handleToggleVisibility = async (id, currentVisibility) => {
    try {
      const updatedVisibility = currentVisibility === "all" ? "paid" : "all";
      await axios.put(
        `${process.env.REACT_APP_BASE_URL}/api/admin/press-release/update-visibility/${id}`,
        {
          contentFor: updatedVisibility,
        }
      );
      toast.success(
        `pressRelease visibility updated successfully to ${updatedVisibility}!`
      );

      dispatch(
        updatePressReleaseVisibility({ id, visibility: updatedVisibility })
      );
    } catch (error) {
      toast.error("Failed to update visibility.");
    }
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <>
      <ToastContainer />
      <div className="mb-3 d-flex align-items-center justify-content-between">
        <CInputGroup
          className="me-3"
          style={{ width: "50%", borderRadius: "1rem" }}
        >
          <CFormInput
            type="text"
            placeholder="Search by Heading "
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </CInputGroup>
      </div>
      <CRow className="justify-content-center ">
        <CCol xs={12}>
          <CCard className="w-100">
            <CCardHeader>
              <h3 className="text-start font-semibold">{Name} List</h3>
            </CCardHeader>
            <CCardBody>
              <CTable hover>
                <CTableHead>
                  <CTableRow className="text-start">
                    <CTableHeaderCell
                      style={{ width: "45%", cursor: "pointer" }}
                      onClick={() => handleSort("heading")}
                    >
                      <div className="header-content">
                        <span>Title</span>
                        {sortConfig.key === "heading" && (
                          <span className="sort-icon">
                            {sortConfig.direction === "asc" ? (
                              <FaArrowDownLong />
                            ) : (
                              <FaArrowUpLong />
                            )}
                          </span>
                        )}
                      </div>
                    </CTableHeaderCell>
                    <CTableHeaderCell
                      style={{ width: "10%", cursor: "pointer" }}
                      onClick={() => handleSort("type")}
                    >
                      <div className="header-content">
                        <span>Type</span>
                        {sortConfig.key === "type" && (
                          <span className="sort-icon">
                            {sortConfig.direction === "asc" ? (
                              <FaArrowDownLong />
                            ) : (
                              <FaArrowUpLong />
                            )}
                          </span>
                        )}
                      </div>
                    </CTableHeaderCell>
                    <CTableHeaderCell
                      style={{ width: "10%", cursor: "pointer" }}
                      onClick={() => handleSort("category")}
                    >
                      <div className="header-content">
                        <span>Category</span>
                        {sortConfig.key === "category" && (
                          <span className="sort-icon">
                            {sortConfig.direction === "asc" ? (
                              <FaArrowDownLong />
                            ) : (
                              <FaArrowUpLong />
                            )}
                          </span>
                        )}
                      </div>
                    </CTableHeaderCell>
                    <CTableHeaderCell
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("status")}
                    >
                      <div className="header-content">
                        <span>Status</span>
                        {sortConfig.key === "status" && (
                          <span className="sort-icon">
                            {sortConfig.direction === "asc" ? (
                              <FaArrowDownLong />
                            ) : (
                              <FaArrowUpLong />
                            )}
                          </span>
                        )}
                      </div>
                    </CTableHeaderCell>
                    <CTableHeaderCell
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSort("contentFor")}
                    >
                      <div className="header-content">
                        <span>Visibility</span>
                        {sortConfig.key === "contentFor" && (
                          <span className="sort-icon">
                            {sortConfig.direction === "asc" ? (
                              <FaArrowDownLong />
                            ) : (
                              <FaArrowUpLong />
                            )}
                          </span>
                        )}
                      </div>
                    </CTableHeaderCell>
                    <CTableHeaderCell>Edit</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Action
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {sortedPressReleaseList?.map((pressRelease) => (
                    <CTableRow key={pressRelease._id}>
                      <CTableDataCell
                        style={{ width: "45%", textAlign: "start" }}
                      >
                        <div>{pressRelease.heading}</div>
                        <div className="text11">
                          Published On:{" "}
                          {moment(pressRelease.createdAt).format(
                            "DD MMM YYYY  h:mm a"
                          )}
                        </div>

                        {pressRelease.createdAt !== pressRelease.updatedAt && (
                          <div className="text11">
                            Updated On:{" "}
                            {moment(pressRelease.updatedAt).format(
                              "DD MMM YYYY  h:mm a"
                            )}
                          </div>
                        )}
                      </CTableDataCell>
                      <CTableDataCell
                        style={{ width: "10%", textAlign: "start" }}
                      >
                        {pressRelease?.type}
                      </CTableDataCell>
                      <CTableDataCell
                        style={{ width: "10%", textAlign: "start" }}
                      >
                        {pressRelease?.category}
                      </CTableDataCell>

                      <CTableDataCell style={{ textAlign: "center" }}>
                        <select
                          className="status-dropdown"
                          value={pressRelease.approvedStatus}
                          onChange={(e) =>
                            handleStatusChange(pressRelease._id, e.target.value)
                          }
                        >
                          {statusOptions.map((status) => (
                            <option key={status} value={status}>
                              {status.charAt(0).toUpperCase() + status.slice(1)}
                            </option>
                          ))}
                        </select>
                      </CTableDataCell>
                      <CTableDataCell style={{ textAlign: "center" }}>
                        <button
                          className="news-status-btn"
                          onClick={() =>
                            handleToggleVisibility(
                              pressRelease?._id,
                              pressRelease?.contentFor
                            )
                          }
                        >
                          {pressRelease.contentFor === "all" ? (
                            <IoLockOpenOutline
                              style={{ fontSize: "1.3em", color: "green" }}
                            />
                          ) : (
                            <IoLockClosedOutline
                              style={{ fontSize: "1.3em", color: "red" }}
                            />
                          )}
                        </button>
                      </CTableDataCell>

                      <CTableDataCell style={{ textAlign: "center" }}>
                        <FaRegEdit
                          style={{
                            cursor: "pointer",
                            fontSize: "1em",
                          }}
                          onClick={() => handleEdit(pressRelease?.slug)}
                        />
                      </CTableDataCell>

                      <CTableDataCell style={{ textAlign: "center" }}>
                        <div className="flex">
                          <Link
                            to={`/${pressRelease?.type?.replace(/\s+/g, "-")}/${
                              pressRelease?.slug
                            }`}
                            className="news-preview-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaExternalLinkAlt
                              className="me-3"
                              style={{ cursor: "pointer" }}
                            />
                          </Link>
                          {pressRelease?.approvedStatus !== "deleted" ? (
                            <MdOutlineDeleteForever
                              style={{
                                cursor: "pointer",
                                fontSize: "1.2em",
                                color: "red",
                              }}
                              onClick={() => handleDelete(pressRelease?._id)}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
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
            of {total === 0 ? 0 : total} {Name}
          </span>
        </CCol>

        <CCol xs="auto">
          <CPagination className="mt-2 mb-2 justify-content-end">
            <CPaginationItem
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{ cursor: "pointer" }}
            >
              Prev
            </CPaginationItem>
            {[...Array(totalPages).keys()].map((number) => (
              <CPaginationItem
                key={number}
                active={number + 1 === currentPage}
                onClick={() => handlePageChange(number + 1)}
                style={{ cursor: "pointer" }}
              >
                {number + 1}
              </CPaginationItem>
            ))}
            <CPaginationItem
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{ cursor: "pointer" }}
            >
              Next
            </CPaginationItem>
          </CPagination>
        </CCol>
      </CRow>
    </>
  );
}
