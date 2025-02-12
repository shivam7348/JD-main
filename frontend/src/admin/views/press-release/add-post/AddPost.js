import React, { useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CRow,
  CCol,
  CBadge,
  CFormFeedback,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import { FaPlus, FaTimes, FaTrash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  PressReleaseContentForOptions,
  mapOptionsToSelect,
  PressReleaseContentTypeOptions,
} from "../../../../utils/admin/adminComman";
import EditorInput from "../../../../utils/admin/EditorInput";
import {
  resetNotificationState,
  sendNotificationToAllUsers,
} from "../../../../store/notificationSlice";

const getAuthorFromLocalStorage = () => {
  const author = localStorage.getItem("author");
  return author
    ? JSON.parse(author)
    : { name: "Default Author", imgurl: "/path/to/default-image.jpg" };
};

const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .trim();
};

const AddPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [singlePressReleaseData, setSinglePressReleaseData] = useState("");

  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState([
    { _id: 1, name: "Category 1" },
    { _id: 2, name: "Category 2" },
  ]); // Example categories
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const dispatch = useDispatch();
  const { loading, success, error, message } = useSelector(
    (state) => state.notification
  );

  const validationSchema = Yup.object({
    type: Yup.string().required("Type is required"),
    category: Yup.string().required("Category is required"),
    heading: Yup.string().required("Heading is required"),
    slug: Yup.string().required("Slug is required"),
    contentFor: Yup.string().required("Content For is required"),
    description: Yup.string().required("Description is required"),
    summary: Yup.string().required("Summary is required"),
  });

  const handleSendNotifications = (news) => {
    const payload = {
      title: `${news?.heading}`,
      message: `${news?.summary}`,
      image: `${news?.featuredImg?.url}`,
      link: `${process.env.REACT_APP_MAIN_ORIGIN}/${news?.type?.replace(
        /\s+/g,
        "-"
      )}/${news?.slug}`,
      type: "news",
    };

    dispatch(sendNotificationToAllUsers(payload));
  };
  useEffect(() => {
    if (success || error) {
      setTimeout(() => {
        dispatch(resetNotificationState());
      }, 3000);
    }
  }, [success, error, dispatch]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/admin/getCategory`
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  const handleAddCategory = async () => {
    if (newCategory.trim() === "") {
      alert("Category name cannot be empty");
      return;
    }
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/api/admin/category`, {
        name: newCategory,
      });
      fetchCategories();
      setCategories([
        ...categories,
        { _id: categories.length + 1, name: newCategory },
      ]);
      setNewCategory("");
      setShowCategoryModal(false);
    } catch (error) {
      console.error("Error saving category", error);
    }
  };

  const handleDeleteCategory = async (categoryName) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/api/admin/deleteCategory/${categoryName}`
      );
      fetchCategories();
      setCategories(categories.filter((cat) => cat.name !== categoryName));
    } catch (error) {
      console.error("Error deleting category", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      type: "",
      category: "",
      featuredImg: null,
      heading: "",
      slug: "",
      contentFor: "",
      description: "",
      summary: "",
      tags: [],
      author: getAuthorFromLocalStorage(),
      approvedStatus: "approved",
      submittedBy: "admin",
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const newsFormData = new FormData();
      if (!values.approvedStatus) {
        newsFormData.append("approvedStatus", "approved");
      }

      for (const key in values) {
        if (values[key] instanceof File) {
          newsFormData.append(key, values[key]);
        } else if (Array.isArray(values[key])) {
          newsFormData.append(key, values[key].join(","));
        } else {
          newsFormData.append(key, values[key]);
        }
      }

      try {
        if (isEditing) {
          await axios.put(
            `${process.env.REACT_APP_BASE_URL}/api/admin/press-release/edit/${slug}`,
            newsFormData,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
                "Content-Type": "multipart/form-data",
              },
            }
          );
          toast.success("Post updated successfully!");
        } else {
          const res = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/api/admin/press-release/add`,
            newsFormData,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
                "Content-Type": "multipart/form-data",
              },
            }
          );

          toast.success("Post created successfully!");

          handleSendNotifications(res?.data?.news);

          console.log(res?.data);
          formik.resetForm();
        }
        navigate(`/admin/press-release/approved`);
      } catch (error) {
        toast.error("Failed to post/update post.");
      }
    },
  });

  useEffect(() => {
    if (slug) {
      setIsEditing(true);

      const fetchPost = async () => {
        try {
          const { data } = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/admin/press-release/get/${slug}`
          );

          setSinglePressReleaseData(data);

          setImagePreview(data.featuredImg ? data.featuredImg.url : null);
          formik.setValues({
            ...data,
            author: getAuthorFromLocalStorage(),
          });
        } catch (error) {
          toast.error("Failed to fetch post.");
        }
      };
      fetchPost();
    } else {
      setIsEditing(false);
      setImagePreview(null);
      formik.resetForm();
    }
  }, [slug]);

  useEffect(() => {
    if (formik.values.heading) {
      formik.setFieldValue("slug", generateSlug(formik.values.heading));
    }
  }, [formik.values.heading]);

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file) {
        formik.setFieldValue(name, file);
        const previewUrl = URL.createObjectURL(file);
        setImagePreview(previewUrl);
      }
    } else {
      formik.setFieldValue(name, value);
    }
  };

  const handleTagInputChange = (e) => {
    const value = e.target.value;
    const tagsArray = value.split(",").map((tag) => tag.trim());
    formik.setFieldValue("tags", tagsArray);
  };

  const handleTagRemove = (tag) => {
    const updatedTags = formik.values.tags.filter((t) => t !== tag);
    formik.setFieldValue("tags", updatedTags);
  };

  return (
    <>
      <ToastContainer />
      <CRow className="justify-content-center mb-3">
        <CCol md={12}>
          <CCard>
            <CCardHeader>
              <h3>{isEditing ? "Edit Post" : "Add Post"}</h3>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={formik.handleSubmit}>
                <CRow className="mb-3">
                  <CCol md={6}>
                    <CFormLabel htmlFor="type">Content Type</CFormLabel>
                    <CFormSelect
                      id="type"
                      name="type"
                      value={formik.values.type}
                      onChange={handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.type && formik.errors.type}
                      style={{ width: "100%" }}
                    >
                      <option value="">Select </option>
                      {mapOptionsToSelect(PressReleaseContentTypeOptions)}
                    </CFormSelect>
                    <CFormFeedback style={{ color: "red" }}>
                      {formik.errors.type}
                    </CFormFeedback>
                  </CCol>
                  <CCol md={6}>
                    <CFormLabel htmlFor="category">Category</CFormLabel>
                    <CInputGroup>
                      <CFormSelect
                        id="category"
                        name="category"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                      >
                        <option value="">Select</option>
                        {categories.map((cat) => (
                          <option key={cat._id} value={cat.name}>
                            {cat.name.replace(/\b\w/g, (char) =>
                              char.toUpperCase()
                            )}
                          </option>
                        ))}
                      </CFormSelect>
                      <CButton onClick={() => setShowCategoryModal(true)}>
                        <FaPlus />
                      </CButton>
                    </CInputGroup>

                    {/* <ul>
                      {categories.map((cat) => (
                        <li key={cat._id}>
                          {cat.name}{" "}
                          <CButton
                            size="sm"
                            color="danger"
                            onClick={() => handleDeleteCategory(cat.name)}
                          >
                            <FaTrash />
                          </CButton>
                        </li>
                      ))}
                    </ul> */}

                    <CFormFeedback style={{ color: "red" }}>
                      {formik.errors.category}
                    </CFormFeedback>

                    <CModal
                      visible={showCategoryModal}
                      onClose={() => setShowCategoryModal(false)}
                    >
                      <CModalHeader>Add New Category</CModalHeader>
                      <CModalBody>
                        <CFormInput
                          placeholder="Add new category"
                          value={newCategory}
                          onChange={(e) => setNewCategory(e.target.value)}
                        />
                      </CModalBody>
                      <CModalFooter>
                        <CButton color="primary" onClick={handleAddCategory}>
                          Save
                        </CButton>
                        <CButton
                          color="secondary"
                          onClick={() => setShowCategoryModal(false)}
                        >
                          Cancel
                        </CButton>
                      </CModalFooter>
                    </CModal>
                  </CCol>
                </CRow>

                <CRow className="mb-3">
                  <CCol md={6}>
                    <CFormLabel htmlFor="featuredImg">
                      Featured Image (1000x500 px)
                    </CFormLabel>
                    {imagePreview && (
                      <div className="mb-3">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          width="100px"
                          height="100px"
                        />
                      </div>
                    )}
                    {formik.touched.featuredImg &&
                      formik.errors.featuredImg &&
                      !isEditing && (
                        <CFormFeedback style={{ color: "red" }}>
                          {formik.errors.featuredImg}
                        </CFormFeedback>
                      )}
                    <CInputGroup>
                      <CFormInput
                        type="file"
                        id="featuredImg"
                        name="featuredImg"
                        onChange={handleChange}
                        accept="image/*"
                        required={!isEditing}
                      />
                    </CInputGroup>
                  </CCol>

                  <CCol md={6}>
                    <CFormLabel htmlFor="contentFor">Content For</CFormLabel>
                    <CFormSelect
                      id="contentFor"
                      name="contentFor"
                      value={formik.values.contentFor}
                      onChange={handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={
                        formik.touched.contentFor && formik.errors.contentFor
                      }
                      style={{ width: "100%" }}
                    >
                      <option value="">Select </option>
                      {mapOptionsToSelect(PressReleaseContentForOptions)}
                    </CFormSelect>
                    <CFormFeedback style={{ color: "red" }}>
                      {formik.errors.contentFor}
                    </CFormFeedback>
                  </CCol>
                </CRow>

                <CRow className="mb-3">
                  <CCol md={12}>
                    <CFormLabel htmlFor="heading">Heading</CFormLabel>
                    <CFormInput
                      type="text"
                      id="heading"
                      name="heading"
                      value={formik.values.heading}
                      onChange={handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={
                        formik.touched.heading && formik.errors.heading
                      }
                      required
                      style={{ width: "100%" }}
                    />
                    <CFormFeedback style={{ color: "red" }}>
                      {formik.errors.heading}
                    </CFormFeedback>
                  </CCol>
                </CRow>

                <CRow className="mb-3">
                  <CCol md={12}>
                    <CFormLabel htmlFor="slug">Slug</CFormLabel>
                    <CFormInput
                      type="text"
                      id="slug"
                      name="slug"
                      value={formik.values.slug}
                      onChange={handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.slug && formik.errors.slug}
                      required
                      disabled
                      style={{ width: "100%" }}
                    />
                    <CFormFeedback style={{ color: "red" }}>
                      {formik.errors.slug}
                    </CFormFeedback>
                  </CCol>
                </CRow>

                <CRow className="mb-3">
                  <CCol md={12}>
                    <CFormLabel htmlFor="summary">Summary</CFormLabel>
                    <CFormTextarea
                      id="summary"
                      name="summary"
                      value={formik.values.summary}
                      onChange={handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={
                        formik.touched.summary && formik.errors.summary
                      }
                      required
                      style={{ width: "100%", height: "200px" }}
                    />
                    <CFormFeedback style={{ color: "red" }}>
                      {formik.errors.summary}
                    </CFormFeedback>
                  </CCol>
                </CRow>

                <CRow className="mb-3">
                  <CCol md={12}>
                    <CFormLabel htmlFor="description">Description</CFormLabel>
                    <EditorInput
                      id="description"
                      name="description"
                      value={formik.values.description}
                      onChange={(value) =>
                        formik.setFieldValue("description", value)
                      }
                    />
                    <CFormFeedback style={{ color: "red" }}>
                      {formik.errors.description}
                    </CFormFeedback>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CCol md={12}>
                    <CFormLabel htmlFor="tags">Tags</CFormLabel>
                    <CInputGroup>
                      <CFormInput
                        type="text"
                        id="tags"
                        name="tags"
                        value={formik.values.tags.join(", ")}
                        onChange={handleTagInputChange}
                        placeholder="Add tags separated by commas"
                        style={{ width: "100%" }}
                      />
                    </CInputGroup>
                    <div className="mt-2">
                      {formik.values.tags.map((tag) => (
                        <CBadge
                          color="info"
                          className="me-2 mb-2"
                          key={tag}
                          onClick={() => handleTagRemove(tag)}
                          style={{ cursor: "pointer" }}
                        >
                          {tag}
                        </CBadge>
                      ))}
                    </div>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CCol md={12} className="d-flex justify-content-end">
                    <CButton
                      type="submit"
                      color="primary"
                      className="me-2"
                      disabled={formik.isSubmitting}
                    >
                      {isEditing ? "Update Post" : "Create Post"}
                    </CButton>
                    <CButton
                      type="button"
                      color="secondary"
                      onClick={() =>
                        navigate(
                          isEditing
                            ? `/admin/press-release/${singlePressReleaseData?.approvedStatus}`
                            : `/admin/press-release/approved`
                        )
                      }
                    >
                      Cancel
                    </CButton>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default AddPost;
