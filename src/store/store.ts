import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createAuthSlice, AuthSlice } from './slices/authSlice';
import {
  createFormBuilderSlice,
  FormBuilderSlice,
} from './slices/formBuilderSlice';
import {
  createSavedFormsSlice,
  SavedFormsSlice,
} from './slices/savedFormsSlice';

type StoreState = AuthSlice & FormBuilderSlice & SavedFormsSlice;

const useStore = create<StoreState>()(
  devtools(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createFormBuilderSlice(...a),
      ...createSavedFormsSlice(...a),
    }),
    { name: 'appStore' }
  )
);

export default useStore;
