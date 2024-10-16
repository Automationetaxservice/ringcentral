import { ObjectMap } from '@ringcentral-integration/core/lib/ObjectMap';
import { moduleActionTypes } from '@ringcentral-integration/commons/enums/moduleActionTypes';

export const actionTypes = ObjectMap.prefixKeys([
  ...ObjectMap.keys(moduleActionTypes),
  'saveCustomizeData',
  'savePersonalCustomizeData',
], 'localPresence');
export default actionTypes;