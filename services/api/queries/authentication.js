import URI_MAP from "../uris";
import { axios } from "../../../config/axios";

export const signin = async (data) => {
    const body = (data);
    const res = await axios.post(`${URI_MAP.auth.signin}`, JSON.stringify(body));
    return res;
};