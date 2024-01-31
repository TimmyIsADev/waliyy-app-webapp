import React from 'react';
import CustomTabPanel from '../../common/CustomTabPanel';
import { Formik, Form } from 'formik';
import { TextInput, SelectInput } from '../../common/form';
import { heightRanges, weightRanges } from '../../data/formValues';

const PersonalDetailSetting = ({ handleComplete, value }) => {
  const initialValues = {
    firstName: 'Oladunni',
    lastName: 'Odetunde',
    dateOfBirth: '15/06/1997',
    gender: 'Female',
    genotype: 'AC',
    height: '170_180_cm',
    weight: '70_80_kg',
    maritalStatus: 'single',
    haveChildren: 'no',
    smoke: 'No',
    drink: 'No',
    addiction: 'No',
  };
  return (
    <CustomTabPanel value={value} index={0}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleComplete();
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="flex flex-col gap-10 px-8">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-lg text-[#2D133A]">
              Personal Details
            </p>
            <p className="text-[#667085] text-sm">
              Update your personal information here
            </p>
            <div className="w-full h-[0.5px] bg-[#e4e7ec9c] mt-4 mb-12" />
          </div>

          <div className="flex justify-between gap-12">
            <TextInput
              label="First Name"
              name="firstName"
              type="text"
              readOnly
            />
            <TextInput label="Last Name" name="lastName" type="text" readOnly />
          </div>

          <div className="flex justify-between gap-12">
            <TextInput
              label="Date of Birth"
              name="dateOfBirth"
              type="text"
              readOnly
            />
            <TextInput label="Gender" name="gender" type="text" readOnly />
          </div>

          <div className="flex justify-between gap-12">
            <SelectInput label="Genotype" name="genotype">
              <option value="">Select option</option>
              <option value="AA">AA</option>
              <option value="AC">AC</option>
              <option value="AS">AS</option>
              <option value="SS">SS</option>
              <option value="CC">CC</option>
              <option value="SC">SC</option>
            </SelectInput>

            <SelectInput label="Height" name="height">
              <option value="">Select option</option>
              {heightRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </SelectInput>

            <SelectInput label="Weight" name="weight">
              <option value="">Select option</option>
              {weightRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </SelectInput>
          </div>

          <div className="flex justify-between gap-12">
            <SelectInput label="Marital Status" name="maritalStatus">
              <option value="">Select option</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </SelectInput>

            <SelectInput label="Do you have children?" name="haveChildren">
              <option value="">Select option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </SelectInput>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#665e6b] text-lg font-semibold">Do you...</p>
            <div className="flex justify-between gap-12">
              <TextInput label="Smoke?" name="smoke" type="text" readOnly />
              <TextInput label="Drink?" name="drink" type="text" readOnly />
              <TextInput
                label="Have any addiction?"
                name="addiction"
                type="text"
                readOnly
              />
            </div>
          </div>

          <div className="w-full h-[0.5px] bg-[#e4e7ec9c] my-8" />

          <div className="w-full flex gap-8 justify-end items-center">
            <button className="bg-white text-[#2D133A] hover:text-white hover:bg-[#2D133A] border border-[#2D133A] w-[150px] py-[10px] rounded-lg font-medium flex items-center justify-center transition-all duration-300">
              Cancel
            </button>
            <button
              className="bg-[#BA9FFE] hover:bg-[#a37eff] text-white w-[150px] py-[10px] rounded-lg font-medium flex items-center justify-center transition-all duration-300"
              type="submit"
            >
              Save Changes
            </button>
          </div>
        </Form>
      </Formik>
    </CustomTabPanel>
  );
};

export default PersonalDetailSetting;
