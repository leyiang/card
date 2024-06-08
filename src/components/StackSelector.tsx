import { Select } from "antd";
import { useGroupStore } from "../stores/GroupStore";

export function StackSelector() {
    const groupStore = useGroupStore();
    const options: any[] = [];

    (groupStore.group() ?? []).forEach( (stack, i) => {
        options.push({
            value: i,
            label: stack.label,
        });
    });

    const onChange = (value: number) => {
        console.log( value );
        
        groupStore.changeStack( value );
    };

    // const onSearch = (value: string) => {
    //     console.log('search:', value);
    // };

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
            defaultValue={ 0 }
        />
    )
}