import { Radio, RadioChangeEvent } from "antd";
import { useState } from "react";
import { useSettingStore } from "../stores/SettingStore";

export function OrderControl() {

    const settingStore = useSettingStore();

    const onChange = ({ target }: RadioChangeEvent) => {
        setSelect(target.value);
        settingStore.setOrder( target.value );
    };

    const options = [
        { label: '正序', value: 'forward' },
        { label: '随机', value: 'random' },
        { label: '倒序', value: 'backward' },
    ];

    const [select, setSelect] = useState( settingStore.order );

    return (
        <div className="flex">
            <Radio.Group
                options={options}
                onChange={onChange}
                value={select}
                optionType="button"
                buttonStyle="solid"
            />
        </div>
    )
}