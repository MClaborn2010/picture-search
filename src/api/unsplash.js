import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 9lwfyCpb87h90YzEkfFIBOS2uylYWxzt3kTE5T2smuA",
  },
});
