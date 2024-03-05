import React from 'react';
import { TextInput, SelectInput, TextArea } from '../../common/form';

import { salatOptions } from '../../data/formValues';

export default function AboutDeenForm(){
  return (
    <div className="flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row justify-between gap-12">
          <SelectInput label="Are you a revert?" name="revert">
            <option value="">Select option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </SelectInput>

          <SelectInput label="Are you Sunni or Shi'a" name="sect">
            <option value="">Select option</option>
            <option value="sunni">Sunni</option>
            <option value="Shi'a">Shi'a</option>
          </SelectInput>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-12">
          <SelectInput
            label="Do you belong to any Islamic Organization?"
            name="islamicOrganization"
          >
            <option value="">Select option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </SelectInput>

          <TextInput
            type="text"
            label="If yes, specify"
            name="organizationType"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-12">
          <TextInput
            type="text"
            label="Speakers/Scholars you listen to"
            name="speakers"
          />
          <SelectInput
              label="When did you start practicing?"
              name="startPractising"
            >
              <option value="">Select option</option>
              <option value="childhood">Childhood</option>
              <option value="adolescence">Adolescence</option>
              <option value="adulthood">Adulthood</option>
              <option value="recent">Recently</option>
              <option value="none">Not Practicing</option>
            </SelectInput>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-12">
           <SelectInput label="Pattern of salat" name="salat">
              <option value="">Select option</option>
             {salatOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            </SelectInput>

          <TextInput
            type="text"
            label="If yes, specify"
            name="relocationType"
            classname="hidden sm:flex sm:invisible"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-12">
          <TextArea
            label="Describe your Islamic practice"
            name="islamicPractice"
            placeholder="Tell us about your family’s relationship with Islam, upbringing, when you started practising, what are you currently learning about, how much Qur’an memorised..."
          />
          <TextInput label="something" name="something" classname="hidden sm:flex sm:invisible" />
        </div>

    
      </div>
  );
}
