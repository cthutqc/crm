import ky from "ky";

const kyClient = ky.create({
    prefixUrl: `${import.meta.env.VITE_API_PREFIX_URL}/api`
});
export default kyClient;
