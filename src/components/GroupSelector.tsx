import { Select } from "antd";
import { useGroupStore } from "../stores/GroupStore";
import { useEffect, useState } from "react";
import { usePersistStore } from "../stores/PersistStore";
import { useCardStore } from "../stores/CardStore";

export function GroupSelector() {
    const groupStore = useGroupStore();
    const cardStore = useCardStore();
    const persistStore = usePersistStore();
    const options: any[] = [];
    const [value, setValue] = useState( groupStore.groupPtr );

    Object.keys(groupStore.info).forEach(key => {
        options.push({
            value: key,
            label: key,
        })
    });

    const onChange = (value: string) => {
        setValue( value );
        groupStore.changeGroup( value );
        persistStore.setGroupID( value );
        cardStore.setCardPtr(0);
    };

    useEffect(() => {
        setValue( groupStore.groupPtr)
    }, [groupStore.groupPtr]);
    // const onSearch = (value: string) => {
    //     console.log('search:', value);
    // };

    const filterOption = (input: string, option?: { label: string; value: string }) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <Select
            tabIndex={-1}
            className="w-[200px]"
            // showSearch
            placeholder="Select a Groiup"
            optionFilterProp="children"
            onChange={onChange}
            // onSearch={onSearch}
            filterOption={filterOption}
            options={options}
            value={ value }
        />
    )
}