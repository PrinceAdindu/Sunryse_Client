export default async function logout(axios, navigate, toast) {
  try {
    await axios.post("/logout");
    navigate("/login");
  } catch (error) {
    if (error?.response.status === 500) {
      toast.error("Error logging out");
    }
  }
}
