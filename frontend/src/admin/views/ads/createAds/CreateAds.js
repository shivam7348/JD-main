import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
  CContainer,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CButton,
  CAlert,
  CCol,
  CRow,
  CInputGroup,
  CFormSwitch,
} from "@coreui/react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  banneSizes,
  mapOptionsToSelect,
} from "../../../../utils/admin/adminComman";
import moment from "moment";

const CreateAds = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const validationSchema = Yup.object({
    adType: Yup.string().required("adType is required"),
  });

  const formik = useFormik({
    initialValues: {
      adType: "banner",
      img: { fileName: "", url: "" },
      webUrl: "",
      header: "",
      AdText: "",
      name: "",
      button: "",
      buttonUrl: "",
      code: "",
      bannerSize: "",
      always: true,
      startDate: null,
      endDate: null,
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const adsFormData = new FormData();
      for (const key in values) {
        if (values[key] instanceof File) {
          adsFormData.append(key, values[key]);
        } else if (Array.isArray(values[key])) {
          adsFormData.append(key, values[key].join(","));
        } else {
          adsFormData.append(key, values[key]);
        }
      }

      try {
        if (isEditing) {
          await axios.put(
            `${process.env.REACT_APP_BASE_URL}/api/ads/edit/${id}`,
            adsFormData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          toast.success("ads updated successfully!");
        } else {
          await axios.post(
            `${process.env.REACT_APP_BASE_URL}/api/ads/add`,
            adsFormData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          toast.success("ads created successfully!");
          formik.resetForm();
        }
        navigate("/admin/ads/manage-ads");
      } catch (error) {
        toast.error("Failed to post/update ads.");
      }
    },
  });
  useEffect(() => {
    if (id) {
      setIsEditing(true);
      const fetchAds = async () => {
        try {
          const { data } = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/ads/get/${id}`
          );

          setImagePreview(data.img ? data.img.url : null);
          formik.setValues({
            adType: data.adType || "banner",
            img: data.img || { fileName: "", url: "" },
            webUrl: data.webUrl || "",
            header: data.header || "",
            AdText: data.AdText || "",
            name: data.name || "",
            button: data.button || "",
            buttonUrl: data.buttonUrl || "",
            code: data.code || "",
            bannerSize: data.bannerSize || "",
            always: data.publish?.always,
            startDate:
              moment(data.publish.startDate).format("YYYY-MM-DD") || null,
            endDate:
              moment(data?.publish?.endDate)?.format("YYYY-MM-DD") || null,
          });
        } catch (error) {
          toast.error("Failed to fetch post.");
        }
      };
      fetchAds();
    } else {
      setIsEditing(false);
      setImagePreview(null);
      formik.resetForm();
    }
  }, [id]);
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const handleChange = (e) => {
    const { name, type, files, value } = e.target;
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

  const handleToggleChange = () => {
    const newValue = !formik.values.always;
    console.log(formik.values.always);
    formik.setFieldValue("always", newValue);

    if (newValue) {
      formik.setFieldValue("startDate", "");
      formik.setFieldValue("endDate", "");
    }
  };

  return (
    <>
      <ToastContainer />
      <CContainer>
        <h1 className="mb-4">Create Ad</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <CRow className="mb-3">
            <CCol md={6}>
              <CFormLabel htmlFor="category">Banner Size</CFormLabel>
              <CFormSelect
                id="bannerSize"
                name="bannerSize"
                value={formik.values.bannerSize}
                onChange={handleChange}
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.touched.bannerSize && formik.errors.bannerSize
                }
                style={{ width: "100%" }}
              >
                <option value="">Select </option>
                {mapOptionsToSelect(banneSizes)}
              </CFormSelect>
              {formik.errors.bannerSize && formik.touched.bannerSize && (
                <CAlert color="danger">{formik.errors.bannerSize}</CAlert>
              )}
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="adType">Ad Type</CFormLabel>
              <CFormSelect
                id="adType"
                name="adType"
                value={formik.values.adType}
                onChange={handleChange}
                invalid={formik.errors.adType && formik.touched.adType}
              >
                <option value="banner">Banner</option>
                <option value="responsive">Responsive</option>
                <option value="code-x">Code X</option>
              </CFormSelect>
              {formik.errors.adType && formik.touched.adType && (
                <CAlert color="danger">{formik.errors.adType}</CAlert>
              )}
            </CCol>
          </CRow>

          {formik.values.adType === "banner" && (
            <>
              <CRow className="mb-3">
                <CCol md={6}>
                  <CFormLabel htmlFor="featuredImg"> Image</CFormLabel>
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
                  <CInputGroup>
                    <CFormInput
                      type="file"
                      id="img"
                      name="img"
                      onChange={handleChange}
                      accept="image/*"
                      required={!isEditing}
                    />
                  </CInputGroup>
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="webUrl">Web URL</CFormLabel>
                  <CFormInput
                    id="webUrl"
                    name="webUrl"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.webUrl}
                    invalid={formik.errors.webUrl && formik.touched.webUrl}
                  />
                  {formik.errors.webUrl && formik.touched.webUrl && (
                    <CAlert color="danger">{formik.errors.webUrl}</CAlert>
                  )}
                </CCol>
              </CRow>
            </>
          )}

          {formik.values.adType === "responsive" && (
            <>
              <CRow className="mb-3">
                <CCol md={6}>
                  <CFormLabel htmlFor="featuredImg"> Image</CFormLabel>
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
                  <CInputGroup>
                    <CFormInput
                      type="file"
                      id="img"
                      name="img"
                      onChange={handleChange}
                      accept="image/*"
                      required={!isEditing}
                    />
                  </CInputGroup>
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="header">Header</CFormLabel>
                  <CFormInput
                    id="header"
                    name="header"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.header}
                    invalid={formik.errors.header && formik.touched.header}
                  />
                  {formik.errors.header && formik.touched.header && (
                    <CAlert color="danger">{formik.errors.header}</CAlert>
                  )}
                </CCol>
              </CRow>

              <CRow className="mb-3">
                <CCol md={6}>
                  <CFormLabel htmlFor="AdText">Ad Text</CFormLabel>
                  <CFormInput
                    id="AdText"
                    name="AdText"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.AdText}
                    invalid={formik.errors.AdText && formik.touched.AdText}
                  />
                  {formik.errors.AdText && formik.touched.AdText && (
                    <CAlert color="danger">{formik.errors.AdText}</CAlert>
                  )}
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="name">Ad Name</CFormLabel>
                  <CFormInput
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    invalid={formik.errors.name && formik.touched.name}
                  />
                  {formik.errors.name && formik.touched.name && (
                    <CAlert color="danger">{formik.errors.name}</CAlert>
                  )}
                </CCol>
              </CRow>

              <CRow className="mb-3">
                <CCol md={6}>
                  <CFormLabel htmlFor="button">Button Text</CFormLabel>
                  <CFormInput
                    id="button"
                    name="button"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.button}
                    invalid={formik.errors.button && formik.touched.button}
                  />
                  {formik.errors.button && formik.touched.button && (
                    <CAlert color="danger">{formik.errors.button}</CAlert>
                  )}
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="buttonUrl">Button URL</CFormLabel>
                  <CFormInput
                    id="buttonUrl"
                    name="buttonUrl"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.buttonUrl}
                    invalid={
                      formik.errors.buttonUrl && formik.touched.buttonUrl
                    }
                  />
                  {formik.errors.buttonUrl && formik.touched.buttonUrl && (
                    <CAlert color="danger">{formik.errors.buttonUrl}</CAlert>
                  )}
                </CCol>
              </CRow>
            </>
          )}

          {formik.values.adType === "code-x" && (
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormLabel htmlFor="code">Code X</CFormLabel>
                <CFormInput
                  id="code"
                  name="code"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.code}
                  invalid={formik.errors.code && formik.touched.code}
                />
                {formik.errors.code && formik.touched.code && (
                  <CAlert color="danger">{formik.errors.code}</CAlert>
                )}
              </CCol>
            </CRow>
          )}

          <CRow className="mb-3">
            <CCol md={12}>
              <CFormLabel htmlFor="publish">Publish</CFormLabel>
              <CFormSwitch
                id="always"
                name="always"
                checked={formik.values.always}
                onChange={handleToggleChange}
              />
            </CCol>
            {!formik.values.always && (
              <>
                <CCol md={6}>
                  <CFormLabel htmlFor="startDate">Start Date</CFormLabel>
                  <CFormInput
                    id="startDate"
                    name="startDate"
                    type="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.startDate || ""}
                    invalid={
                      formik.errors?.startDate && formik.touched?.startDate
                    }
                  />
                  {formik.errors?.startDate && formik.touched?.startDate && (
                    <CAlert color="danger">{formik.errors.startDate}</CAlert>
                  )}
                </CCol>

                <CCol md={6}>
                  <CFormLabel htmlFor="endDate">End Date</CFormLabel>
                  <CFormInput
                    id="endDate"
                    name="endDate"
                    type="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.endDate || ""}
                    invalid={formik.errors?.endDate && formik.touched?.endDate}
                  />
                  {formik.errors?.endDate && formik.touched?.endDate && (
                    <CAlert color="danger">{formik.errors.endDate}</CAlert>
                  )}
                </CCol>
              </>
            )}
          </CRow>

          <CRow className="mb-3">
            <CCol md={12} className="d-flex justify-content-end">
              <CButton
                type="submit"
                color="primary"
                className="me-2"
                disabled={formik.isSubmitting}
              >
                {isEditing ? "Update Ads" : "Create Ads"}
              </CButton>
              <CButton
                type="button"
                color="secondary"
                onClick={() => navigate("/admin/ads/manage-ads")}
              >
                Cancel
              </CButton>
            </CCol>
          </CRow>
        </form>
      </CContainer>
    </>
  );
};

export default CreateAds;
