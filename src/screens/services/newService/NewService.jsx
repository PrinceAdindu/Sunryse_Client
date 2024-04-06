import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import useToast from '../../../hooks/useToast';

import InputField from '../../../components/inputField/InputField';
import TextField from '../../../components/textField/TextField';
import Dropdown from '../../../components/dropdown/Dropdown';
import WeeklyHours from '../../businessHours/weeklyHours/WeeklyHours';
import StyledButton from '../../../components/styledButton/StyledButton';

import { NEW_SERVICE_FORM_RULES } from './newServiceFormRules';
import { DEFAULT_SCHEDULE } from '../../businessHours/businessHoursHelper';
import { createService, sanitizeData, validateData } from './newServiceHelper';

import styles from './NewService.module.scss';

export default function NewService() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    duration: '',
    price: '',
    tax: '',
    taxPercent: '',
    location: '',
    availabilityType: '',
    availability: DEFAULT_SCHEDULE,
    policy: '',
    notice: '',
    lateFee: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    duration: '',
    price: '',
    tax: '',
    taxPercent: '',
    location: '',
    availabilityType: '',
    availability: '',
    policy: '',
    notice: '',
    lateFee: '',
  });

  const navigate = useNavigate();
  const axios = useAxiosPrivate();
  const toast = useToast();

  async function save() {
    const valid = validateData(formData, setErrors);
    if (valid) {
      const sanitizedFormData = await sanitizeData(formData);
      await createService(axios, toast, sanitizedFormData);
      navigate('/services');
    } else {
      toast.error('Required information is missing');
    }
  }

  const updateForm = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const updateErrors = (field, value) => {
    setErrors((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <p className={styles.header}>New Service Details</p>
        <div className={styles.detailsContainer}>
          <div className={styles.infoContainer}>
            <InputField
              value={formData.name}
              setValue={(value) => updateForm('name', value)}
              placeholder="Service Name..."
              title="Service Name"
              error={errors.name}
              resetError={() => updateErrors('name', '')}
              size="sm"
            />
            <TextField
              value={formData.description}
              setValue={(value) => updateForm('description', value)}
              title={'Description'}
              className={styles.textField}
            />
            <InputField
              value={formData.duration}
              setValue={(value) => updateForm('duration', value)}
              minValue={0}
              placeholder="50"
              title="Duration (minutes)"
              error={errors.duration}
              resetError={() => updateErrors('duration', '')}
              size="sm"
              type="number"
            />
          </div>
          <div className={styles.pricingContainer}>
            <InputField
              value={formData.price}
              setValue={(value) => updateForm('price', value)}
              minValue={0}
              placeholder="150.00"
              title="Price"
              error={errors.price}
              resetError={() => updateErrors('price', '')}
              size="sm"
              type="number"
            />
            <Dropdown
              id={'taxDropdown'}
              classname={styles.taxDropdown}
              value={formData.tax}
              options={NEW_SERVICE_FORM_RULES.tax.options}
              indicator={true}
              onChange={(value) => updateForm('tax', value)}
              title={'Tax'}
              error={errors.tax}
              resetError={() => updateErrors('tax', '')}
            />
            {formData.tax !== 'none' && formData.tax !== '' && (
              <InputField
                classname={styles.textField}
                value={formData.taxPercent}
                setValue={(value) => updateForm('taxPercent', value)}
                minValue={0}
                placeholder="5"
                title="Tax Percentage"
                error={errors.taxPercent}
                resetError={() => updateErrors('taxPercent', '')}
                size="sm"
                type="number"
              />
            )}
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <p className={styles.header}>New Service Availability</p>
        <Dropdown
          id={'locationDropdown'}
          classname={styles.locationDropdown}
          value={formData.location}
          options={NEW_SERVICE_FORM_RULES.location.options}
          indicator={true}
          onChange={(value) => updateForm('location', value)}
          title={'Location'}
          error={errors.location}
          resetError={() => updateErrors('location', '')}
        />
        <Dropdown
          id={'availabilityDropdown'}
          className={
            formData.availabilityType === 'custom' &&
            styles.availabilityDropdown
          }
          value={formData.availabilityType}
          options={NEW_SERVICE_FORM_RULES.availabilityType.options}
          indicator={true}
          onChange={(value) => updateForm('availabilityType', value)}
          title={'Availability'}
          error={errors.availabilityType}
          resetError={() => updateErrors('availabilityType', '')}
        />
        {formData.availabilityType === 'custom' && (
          <WeeklyHours
            schedule={formData.availability}
            setSchedule={(value) => updateForm('availability', value)}
          />
        )}
      </div>
      <div className={styles.container}>
        <p className={styles.header}>Cancellation Policy</p>
        <Dropdown
          id={'policy'}
          classname={styles.policyDropdown}
          value={formData.policy}
          options={NEW_SERVICE_FORM_RULES.policy.options}
          indicator={true}
          onChange={(value) => updateForm('policy', value)}
          title={'Policy'}
          error={errors.policy}
          resetError={() => updateErrors('policy', '')}
        />
        {formData.policy === 'notice' && (
          <div className={styles.noticeContainer}>
            <Dropdown
              id={'notice'}
              classname={styles.policyDropdown}
              value={formData.notice}
              options={NEW_SERVICE_FORM_RULES.notice.options}
              indicator={true}
              onChange={(value) => updateForm('notice', value)}
              title={'Notice'}
              error={errors.notice}
              resetError={() => updateErrors('notice', '')}
            />
            <InputField
              value={formData.lateFee}
              setValue={(value) => updateForm('lateFee', value)}
              minValue={0}
              placeholder="25.00"
              title="Late Notice Charge"
              error={errors.lateFee}
              resetError={() => updateErrors('lateFee', '')}
              size="sm"
              type="number"
            />
          </div>
        )}
      </div>
      <StyledButton
        className={styles.button}
        text="Create New Service"
        onClick={() => {
          save();
        }}
      />
    </div>
  );
}
