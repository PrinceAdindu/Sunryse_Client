export default async function logout(axios, navigate, toast) {
  try {
    await axios.post('/logout');
    navigate('/login');
  } catch (error) {
    if (error?.response.status === 500) {
      toast.error('Error logging out');
    }
  }
}

export async function getClinicName(axios, toast) {
  try {
    const properties = ['clinicName'];
    const res = await axios.get('/clinic', {
      params: {
        properties,
      },
    });

    return res.data.clinicName;
  } catch (error) {
    if (error?.response?.status === 400 || error?.response?.status === 500)
      toast.error(
        'There was an error loading your clinic data, please try again.',
      );
  }
}
