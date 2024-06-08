import { Select } from "antd";
import { useGroupStore } from "../stores/GroupStore";

export function GroupSelector() {
    const groupStore = useGroupStore();
    const options: any[] = [];

    Object.keys(groupStore.info).forEach(key => {
        options.push({
            value: key,
            label: key,
        })
    });

    const onChange = (value: string) => {
        groupStore.changeGroup( value );
    };

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
            defaultValue={groupStore.groupPtr}
        />
    )
}