import { NEW_SERVICE_FORM_RULES } from './newService/newServiceFormRules';

export async function updateService(serviceData, axios, toast) {
  try {
    const res = await axios.put('/clinic/service', { data: serviceData });
  } catch (error) {
    console.log(error);
    if (error?.response?.status === 400 || error?.response?.status === 500)
      toast.error('There was an error updating the status, please try again.');
  }
}

export async function getCurrentServices(axios, toast) {
  try {
    const fields = ['services'];
    const res = await axios.get('/clinic', {
      params: {
        fields,
      },
    });
    console.log(res.data);
    return res.data.services;
  } catch (error) {
    if (error?.response?.status === 400 || error?.response?.status === 500)
      toast.error(
        'There was an error retrieving your service offerings, please try again later.',
      );
  }
}

export async function deleteService(id, axios, toast) {
  try {
    const res = await axios.delete('/clinic/service', { data: { id: id } });
  } catch (error) {
    console.log(error);
    if (error?.response?.status === 400 || error?.response?.status === 500)
      toast.error('There was an error deleting the service, please try again.');
  }
}

export function sanitizeServices(services) {
  console.log('RAW', services);
  const filteredData = services.map((service) => {
    // Create an object row for each service with keys from TABLE_HEADERS
    const dataObject = {};
    dataObject['id'] = service['id'];
    TABLE_HEADERS.forEach((header) => {
      if (header.value === 'availabilityType') {
        const availabilityLabel = getLabelFromValue(
          services['availabilityType'],
          NEW_SERVICE_FORM_RULES.availabilityType.options,
        );
        dataObject['availabilityType'] = availabilityLabel;
      } else {
        dataObject[header.value] = service[header.value];
      }
    });
    dataObject['status'] = service['status'];
    return dataObject;
  });
  console.log('FILTERED', filteredData);
  return filteredData;
}

// Options: [{value: any, label: string}]
function getLabelFromValue(value, options) {
  console.log(value, options);
  const selectedOption = options.find((op) => op.value === value);
  console.log(selectedOption);
  return selectedOption?.label;
}

export const TABLE_HEADERS = [
  {
    value: 'name',
    label: 'Name',
  },
  {
    value: 'description',
    label: 'Description',
  },
  {
    value: 'duration',
    label: 'Duration',
  },
  {
    value: 'availabilityType',
    label: 'Availability',
  },
  {
    value: 'price',
    label: 'Price',
  },
  {
    value: 'currency',
    label: 'Currency',
  },
];
