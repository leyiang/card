import { Select } from "antd";
import { useGroupStore } from "../stores/GroupStore";
import { usePersistStore } from "../stores/PersistStore";
import { useEffect, useState } from "react";

export function StackSelector() {
    const groupStore = useGroupStore();
    const persistStore = usePersistStore();
    const options: any[] = [];
    const [cur, setCur] = useState(0);

    (groupStore.group() ?? []).forEach( (stack, i) => {
        options.push({
            value: i,
            label: stack.label,
        });
    });

    const onChange = (value: number) => {
        groupStore.changeStack( value );
        persistStore.setStackID( value.toString() );
    };

    // const onSearch = (value: string) => {
    //     console.log('search:', value);
    // };

    useEffect(() => {
        setCur( groupStore.stackPtr );
    }, [ groupStore.stackPtr ]);

    const filterOption = (input: string, option?: { label: string; value: string }) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <Select
            key={ 'grp-ptr-' + groupStore.groupPtr }
            // showSearch
            className="w-[200px]"
            placeholder="Select a Groiup"
            onChange={onChange}
            // onSearch={onSearch}
            filterOption={filterOption}
            options={options}
            value={ cur }
        />
    )
}