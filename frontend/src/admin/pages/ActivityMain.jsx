import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Activity() {
  const [title, setTitle] = useState(""); // State for activity title
  const [description, setDescription] = useState(""); // State for activity description
  const [image, setImage] = useState(null); // State for activity image
  const [activities, setActivities] = useState([]); // State for list of activities
  const [edit, setEdit] = useState(null); // State to track which activity is being edited
  const [editTitle, setEditTitle] = useState(""); // State for updated title during editing
  const [editDescription, setEditDescription] = useState(""); // State for updated description during editing
  const [editImage, setEditImage] = useState(null); // State for updated image during editing

  // Fetch activities on component mount
  useEffect(() => {
    fetchActivities();
  }, []);

  // Function to fetch activities from the backend
  const fetchActivities = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/get/calendar`
      );
      setActivities(response.data);
    } catch (error) {
      console.error("Error fetching activities:", error);
      alert("Failed to fetch activities. Please try again.");
    }
  };

  // Handle posting a new activity
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "" || !image) return;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/post/calendar`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setActivities([...activities, response.data]); // Add new activity to the list
      setTitle(""); // Clear the title field
      setDescription(""); // Clear the description field
      setImage(null); // Clear the image field
    } catch (error) {
      console.error("Error posting activity:", error);
      alert("Failed to post activity. Please try again.");
    }
  };

  // Handle editing an activity
  const handleEdit = async (id) => {
    if (editTitle.trim() === "" || editDescription.trim() === "") return;

    const formData = new FormData();
    formData.append("title", editTitle);
    formData.append("description", editDescription);
    if (editImage) formData.append("image", editImage);

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/update/calendar/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Update the activities list with the edited activity
      const updatedActivities = activities.map((activity) =>
        activity._id === id ? response.data : activity
      );
      setActivities(updatedActivities);

      // Reset edit state
      setEdit(null);
      setEditTitle("");
      setEditDescription("");
      setEditImage(null);
    } catch (error) {
      console.error("Error editing activity:", error);
      alert("Failed to edit activity. Please try again.");
    }
  };

  // Handle deleting an activity
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/delete/calendar/${id}`
      );

      // Remove the deleted activity from the list
      const updatedActivities = activities.filter(
        (activity) => activity._id !== id
      );
      setActivities(updatedActivities);
    } catch (error) {
      console.error("Error deleting activity:", error);
      alert("Failed to delete activity. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Activities</h2>

      {/* Form to post a new activity */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300 mb-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300 mb-2"
          rows="3"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300 mb-2"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Post Activity
        </button>
      </form>

      {/* List of activities */}
      <div className="space-y-2">
        {activities.map((activity) => (
          <div
            key={activity._id}
            className="p-3 border rounded-md bg-gray-100 shadow-sm"
          >
            {edit === activity._id ? (
              // Edit mode
              <div className="space-y-2">
                <input
                  type="text"
                  className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300 mb-2"
                  placeholder="Title"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <textarea
                  className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300 mb-2"
                  rows="3"
                  placeholder="Description"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
                <input
                  type="file"
                  className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300 mb-2"
                  onChange={(e) => setEditImage(e.target.files[0])}
                />
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(activity._id)}
                    className="px-4 py-2 bg-green-500 text-white rounded-md"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEdit(null)}
                    className="px-4 py-2 bg-gray-500 text-white rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              // Display mode
              <div className="flex flex-col space-y-2">
                <h1 className="text-xl font-bold">{activity.title}</h1>
                <p>{activity.description}</p>
                <img
                  src={`${process.env.REACT_APP_BACKEND_URL}/${activity.image}`}
                  alt={activity.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setEdit(activity._id);
                      setEditTitle(activity.title);
                      setEditDescription(activity.description);
                      setEditImage(null);
                    }}
                    className="px-2 py-1 bg-yellow-500 text-white rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(activity._id)}
                    className="px-2 py-1 bg-red-500 text-white rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
