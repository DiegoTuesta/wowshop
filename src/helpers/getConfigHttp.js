export default getConfigHttp = () =>(
    {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
)