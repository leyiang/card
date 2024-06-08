import { Select } from "antd";
import { useCardStore } from "../stores/CardStore";

export function StackSelector() {
    const cardStore = useCardStore();
    const options: any[] = [];

    (cardStore.group() ?? []).forEach( (stack, i) => {
        options.push({
            value: i,
            label: stack.label,
        });
    });

    const onChange = (value: number) => {
        console.log( value );
        
        cardStore.changeStack( value );
    };

    // const onSearch = (value: string) => {
    //     console.log('search:', value);
    // };

    const filterOption = (input: string, option?: { label: string; value: string }) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <Select
            key={ 'grp-ptr-' + cardStore.groupPtr }
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