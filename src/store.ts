import create, { StoreApi, Mutate, UseBoundStore } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { USER, AppState, Price, Profile } from 'src/ts/store.types';
import createContext from 'zustand/context';
import { useLayoutEffect } from 'react';
const zustandContext = createContext<useContext>();

export const useStore = zustandContext.useStore;
export const Provider = zustandContext.Provider;

let store: useContext;
export type useContext = UseBoundStore<
  Mutate<StoreApi<AppState>, [['zustand/persist', AppState]]>
>;
const initalState = {
  user: null,
  profile: 'account',
  prices: []
};
export const initializeStore = (preloadedState: AppState) =>
  create<AppState>()(
    devtools(
      persist((set) => ({
        ...initalState,
        ...preloadedState,
        setUser: (user: USER | null) => set({ user }),
        setProfile: (profile: Profile) => set({ profile }),
        setPrices: (prices: Price[]) => set({ prices })
      }))
    )
  );

export function useCreateStore(preloadedState: AppState) {
  // For SSR & SSG, always use a new store.
  if (typeof window === 'undefined') {
    return () => initializeStore(preloadedState);
  }

  // For CSR, always re-use same store.
  store = store ?? initializeStore(preloadedState);
  // And if initialState changes, then merge states in the next render cycle.
  //
  // eslint complaining "React Hooks must be called in the exact same order in every component render"
  // is ignorable as this code runs in same order in a given environment
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    if (preloadedState && store) {
      store.setState({
        ...store.getState(),
        ...preloadedState
      });
    }
  }, [preloadedState]);

  return () => store;
}
