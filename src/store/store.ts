import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createAuthSlice, AuthSlice } from './slices/authSlice';
import {
  createFormBuilderSlice,
  FormBuilderSlice,
} from './slices/formBuilderSlice';

type StoreState = AuthSlice & FormBuilderSlice;

const useStore = create<StoreState>()(
  devtools(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createFormBuilderSlice(...a),
    }),
    { name: 'appStore' }
  )
);

export default useStore;
