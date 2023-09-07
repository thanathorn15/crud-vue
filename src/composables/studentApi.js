import { ref } from "vue";
import axios from "axios";


export default function useStudent() {
  const url = "http://localhost:4000/students/";
  const studentData = ref([]);
  const error = ref(null);
  const getAllStudent = async () => {
    studentData.value = [];
    error.value = null;
    try {
      const res = await axios(url);
      console.log(res.data);
      studentData.value = res.data;
    } catch (err) {
      console.log(err);
      error.value = err;
    }
  };

  const getSingleStudent = async (id) => {
    studentData.value = [];
    error.value = null;
    try {
      const res = await axios(url + id);
      studentData.value = res.data;
    } catch (err) {
      error.value = err;
    }
  };

  const createStudent = async (formData) => {
    studentData.value = [];
    error.value = null;
    try {
      const config = {
        method: "POST",
        url: url,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(formData),
      };
      const res = await axios(config);
      studentData.value = res.data;
      console.log("formData", formData);
    } catch (err) {
      error.value = err;
    }
  };

  const updateStudent = async (id, data) => {
    studentData.value = [];
    error.value = null;
    try {
      const config = {
        method: "PUT",
        url: url + id,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
      };
      const res = await axios(config);
      studentData.value = res.data;
      console.log("formData", formData);
    } catch (err) {
      error.value = err;
    }
  };

  const destroyStudent = async (id) => {
    studentData.value = [];
    error.value = null;
    try {
      const config = {
        method: "DELETE",
        url: url + id,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios(config);
      studentData.value = res.data;
    } catch (err) {
      error.value = null;
    }
  };
  return {
    studentData,
    error,
    getAllStudent,
    getSingleStudent,
    createStudent,
    updateStudent,
    destroyStudent
  };
}
