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

export async function getClinicName(axios, toast) {
  try {
    const fields = ["account.email"];
    const res = await axios.get("/clinic", {
      params: {
        fields,
      },
    });

    return res.data.account.email;
  } catch (error) {
    if (error?.response?.status === 400 || error?.response?.status === 500)
      toast.error(
        "There was an error loading your clinic data, please try again."
      );
  }
}
