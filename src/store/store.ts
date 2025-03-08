import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createAuthSlice, AuthSlice } from './slices/authSlice';

type StoreState = AuthSlice;

const useStore = create<StoreState>()(
  devtools(
    (...a) => ({
      ...createAuthSlice(...a),
    }),
    { name: 'appStore' }
  )
);

export default useStore;
