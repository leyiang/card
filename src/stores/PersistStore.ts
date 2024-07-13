import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface IPersistStore {
    groupID: string | null;
    stackID: string | null;

    setGroupID: (id: string) => void;
    setStackID: (id: string) => void;
}

export const usePersistStore = create<IPersistStore>()(
    persist(
        (set) => ({
            groupID: null,
            stackID: null,

            setGroupID(id: string) {
                set({
                    groupID: id
                });
            },

            setStackID(id: string) {
                set({
                    stackID: id
                });
            },
        }),
        {
            name: 'persist-storage',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
)