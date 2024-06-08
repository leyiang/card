import { Switch } from "antd";
import { useSettingStore } from "../stores/SettingStore";

export function PersistControl() {

    const settingStore = useSettingStore();

    const onChange = (checked: boolean) => {
        settingStore.setPersist( checked );
    };

    return (
        <label className="ml-4">
            <span>
                位置保持：
            </span>

            <Switch
                defaultChecked={ settingStore.persist }
                onChange={onChange}
            />
        </label>
    )
}