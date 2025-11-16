import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

interface CoreCommerceState {
  formSubmitted: boolean;
  setFormSubmitted: (submitted: boolean) => void;
}

const useCoreCommerceStore = create<CoreCommerceState>()(
  devtools(
    persist(
      (set) => ({
        formSubmitted: false,
        setFormSubmitted: (submitted: boolean) =>
          set({ formSubmitted: submitted }),
      }),
      {
        name: "core-commerce-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default useCoreCommerceStore;
