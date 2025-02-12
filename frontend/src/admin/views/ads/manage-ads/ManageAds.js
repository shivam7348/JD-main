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
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilArrowTop, cilArrowBottom, cilPeople } from "@coreui/icons";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import avatar1 from "../../../assets/admin/images/avatars/1.jpg";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const ManageAds = () => {
  const [ads, setAds] = useState([]);
  const [sortData, setSortData] = useState({
    key: null,
    direction: "ascending",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/ads/get`
        );
        setAds(response.data);
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    };

    fetchAds();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this ads?"
    );

    if (confirmDelete) {
      try {
        await axios.put(
          `${process.env.REACT_APP_BASE_URL}/api/ads/delete/${id}`
        );

        setAds((prevInfluencers) =>
          prevInfluencers.filter((ads) => ads._id !== id)
        );

        toast.success("Influencer deleted successfully!");
      } catch (error) {
        toast.error("Failed to delete ads.");
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/ads/edit/${id}`);
  };

  const sortedData = () => {
    let sortableItems = [...ads];
    if (sortData.key) {
      sortableItems.sort((a, b) => {
        let aValue, bValue;
        switch (sortData.key) {
          case "name":
            aValue = a.name?.toLowerCase() || "";
            bValue = b.name?.toLowerCase() || "";
            break;
          case "category":
            aValue = a.category?.toLowerCase() || "";
            bValue = b.category?.toLowerCase() || "";
            break;
          case "city":
            aValue = a.city?.toLowerCase() || "";
            bValue = b.city?.toLowerCase() || "";
            break;
          case "goatScore":
            aValue = a.goatScore;
            bValue = b.goatScore;
            break;
          case "rank":
          default:
            aValue = a.rank || 0;
            bValue = b.rank || 0;
        }

        if (aValue < bValue) {
          return sortData.direction === "ascending" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortData.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  };

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortData.key === key && sortData.direction === "ascending") {
      direction = "descending";
    }
    setSortData({ key, direction });
  };

  const filteredData = sortedData().filter((item) =>
    (item.name || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const shortByIcon = (column) => {
    if (sortData.key !== column) return null;
    if (sortData.direction === "ascending") {
      return <CIcon icon={cilArrowTop} />;
    } else {
      return <CIcon icon={cilArrowBottom} />;
    }
  };

  return (
    <>
      <ToastContainer />
      <CRow>
        <CInputGroup
          className="me-3"
          style={{ width: "15rem", borderRadius: "1rem" }}
        >
          <CFormInput
            className="mb-3"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </CInputGroup>
        <CTable align="middle" className="mb-0 border" hover responsive>
          <CTableHead className="text-nowrap">
            <CTableRow>
              <CTableHeaderCell className="bg-body-tertiary text-center">
                <CIcon icon={cilPeople} />
              </CTableHeaderCell>
              {/* <CTableHeaderCell
                className="bg-body-tertiary"
                onClick={() => requestSort("name")}
              >
                Name {shortByIcon("name")}
              </CTableHeaderCell> */}
              <CTableHeaderCell
                className="bg-body-tertiary"
                onClick={() => requestSort("category")}
              >
                AdType {shortByIcon("category")}
              </CTableHeaderCell>
              <CTableHeaderCell
                className="bg-body-tertiary"
                onClick={() => requestSort("goatScore")}
              >
                Created Date {shortByIcon("goatScore")}
              </CTableHeaderCell>
              <CTableHeaderCell className="bg-body-tertiary text-center">
                Publish
              </CTableHeaderCell>
              <CTableHeaderCell className="bg-body-tertiary text-center">
                Total Clicks
              </CTableHeaderCell>

              <CTableHeaderCell className="bg-body-tertiary text-center">
                Actions
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {paginatedData.map((ads, index) => (
              <CTableRow key={index}>
                <CTableDataCell className="text-center">
                  <CAvatar
                    size="md"
                    src={ads?.img?.url ? ads?.img?.url : avatar1}
                    alt={ads.name}
                  />
                </CTableDataCell>

                {/* <CTableDataCell>{ads.name}</CTableDataCell> */}
                <CTableDataCell>{ads.adType}</CTableDataCell>
                <CTableDataCell>
                  {moment(ads.createdAt).format("DD MMM YYYY  h:mm a")}
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  {(ads?.publish?.always).toString()}
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  {ads?.adClicks}
                </CTableDataCell>
                <CTableDataCell style={{ textAlign: "center" }}>
                  <div className="flex">
                    <FaRegEdit
                      className="me-3"
                      style={{
                        cursor: "pointer",
                        fontSize: "1em",
                      }}
                      onClick={() => handleEdit(ads._id)}
                    />
                    <MdOutlineDeleteForever
                      style={{
                        cursor: "pointer",
                        fontSize: "1.2em",
                        color: "red",
                      }}
                      onClick={() => handleDelete(ads._id)}
                    />
                  </div>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>

        <div className="d-flex justify-content-end mt-3">
          <CPagination>
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
        </div>
      </CRow>
    </>
  );
};

export default ManageAds;
