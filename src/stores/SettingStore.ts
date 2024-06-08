import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface ISettingStore {
    persist: boolean;
    order: "random" | "forward" | "backward";

    setPersist: (persist: boolean) => void;
    setOrder: (order: ISettingStore["order"]) => void;
}

export const useSettingStore = create<ISettingStore>()(
    persist(
        (set) => ({
            persist: false,
            order: "random",

            setPersist( persist: boolean ) {
                set({ persist });
            },

            setOrder( order: ISettingStore["order"] ) {
                set({ order });
            },
        }),
        {
            name: 'setting-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        },
    ),
)