import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PressReleaseComponent from "../PressReleaseComponent";
import debounce from "lodash.debounce";
import {
  fetchPressRelease,
  setSearchQuery,
} from "../../../../store/admin/adminPressReleaseSlice";

function Deleted() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { list, totalPages, total, searchQuery } = useSelector(
    (state) => state.adminPressRelease
  );
  const itemsPerPage = 10;

  const handleSearch = debounce((value) => {
    dispatch(setSearchQuery(value));
    setCurrentPage(1);
  }, 300);

  useEffect(() => {
    dispatch(
      fetchPressRelease({
        approvedStatus: "deleted",
        deleted: true,
        page: currentPage,
        limit: itemsPerPage,
        search: searchQuery,
      })
    );
  }, [dispatch, currentPage, searchQuery]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <PressReleaseComponent
      pressReleaseList={list}
      Name="Deleted"
      currentPage={currentPage}
      totalPages={totalPages}
      handlePageChange={handlePageChange}
      total={total}
      itemsPerPage={itemsPerPage}
      onSearch={handleSearch} // Add search handler
    />
  );
}

export default Deleted;
