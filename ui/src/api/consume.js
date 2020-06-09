import api from "./api";

const getInitMessage = async () => await api.get("/");

const getResponseMessage = async (message) => {
    let data = new FormData()
    data.append("question", message)
    return await api.post("/response", data)
}

export { getInitMessage, getResponseMessage };