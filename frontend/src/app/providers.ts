import { OpaqueToken } from '@angular/core';

export const lookupListToken = new OpaqueToken('lookupListToken');

export const lookupLists = {
  gender: ['Male', 'Female', 'Other'],
  maritalStatus: ['Single', 'Married', 'Divorced', 'Widow/Widower', 'Other']
};