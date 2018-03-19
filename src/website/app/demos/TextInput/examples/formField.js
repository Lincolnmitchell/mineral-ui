/* @flow */
import IconAccountBox from 'mineral-ui-icons/IconAccountBox';
import TextInput from '../../../../../library/TextInput/';
import { FormField } from '../../../../../library/Form';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'form-field',
  title: 'FormField',
  description: `Use a [FormField](/components/form-field) to provide an accessible label
and other features as well as a more streamlined API.`,
  scope: { DemoLayout, FormField, IconAccountBox, TextInput },
  source: `
    <DemoLayout>
      <FormField
        input={TextInput}
        label="Last Name"
        caption="Surname, family name"
        iconStart={<IconAccountBox />}
        required />
    </DemoLayout>
  `
};
