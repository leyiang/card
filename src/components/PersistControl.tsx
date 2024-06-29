import { Switch } from "antd";
import { useSettingStore } from "../stores/SettingStore";
import { useEffect } from "react";
import { useCardStore } from "../stores/CardStore";
import { useGroupStore } from "../stores/GroupStore";

export function PersistControl() {

    const settingStore = useSettingStore();
    const cardStore = useCardStore();
    const groupStore = useGroupStore();

    const onChange = (checked: boolean) => {
        settingStore.setPersist( checked );
    };
    
    useEffect(() => {
        if( settingStore.persist ) {
            const id = [groupStore.groupPtr, groupStore.stack().id, cardStore.cardPtr, cardStore.contentPtr].join('-');
            settingStore.setPersistID( id );
        }
    }, [groupStore.groupPtr, groupStore.stack().id, cardStore.cardPtr, cardStore.contentPtr]);


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