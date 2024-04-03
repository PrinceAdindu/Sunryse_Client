import { NEW_SERVICE_FORM_RULES } from './newService/newServiceFormRules';

export async function updateService(axios, toast, serviceData) {
  try {
    const data = { ...serviceData };
    const res = await axios.put('/clinic/service', data);
  } catch (error) {
    console.log(error);
    if (error?.response?.status === 400 || error?.response?.status === 500)
      toast.error('There was an error updating the status, please try again.');
  }
}

export async function getCurrentServices(axios, toast) {
  try {
    const properties = ['services'];
    const res = await axios.get('/clinic', {
      params: {
        properties,
      },
    });

    return res.data.services;
  } catch (error) {
    if (error?.response?.status === 400 || error?.response?.status === 500)
      toast.error(
        'There was an error retrieving your service offerings, please try again later.',
      );
  }
}

export async function deleteService(axios, toast, id) {
  try {
    const res = await axios.delete('/clinic/service', { id });
  } catch (error) {
    console.log(error);
    if (error?.response?.status === 400 || error?.response?.status === 500)
      toast.error('There was an error deleting the service, please try again.');
  }
}

export function sanitizeServices(services) {
  const filteredData = services.map((service) => {
    // Create an object for each service with keys from TABLE_HEADERS
    const dataObject = {};
    dataObject['id'] = service['id'];
    TABLE_HEADERS.forEach((header) => {
      if (header.value === 'availabilityType') {
        const availabilityLabel = valueToLabel(
          service['availabilityType'],
          NEW_SERVICE_FORM_RULES.availabilityType.options,
        );
        dataObject[header.value] = availabilityLabel;
      } else {
        dataObject[header.value] = service[header.value];
      }
    });
    dataObject['status'] = service['status'];
    return dataObject;
  });
  return filteredData;
}

// Options: [{value: any, label: string}]
function valueToLabel(value, options) {
  const label = options.map((option) => {
    if (option.value === value) {
      return option.label;
    }
  });
  return label;
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
