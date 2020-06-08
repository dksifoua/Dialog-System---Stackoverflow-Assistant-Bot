import api from "./api";

const getInitMessage = async () => await api.get("/");

export { getInitMessage };