import { labels } from '../../constants';
import { createJSON } from '../../utils/json';
import Item from '../Item/Item';
import styleClasses from './ItemsGroup.module.css'

function ItemsGroup(props) {
    const { title, items } = props

    const jsonValue = createJSON(items)
    const fullItems = [...items, {key: labels.JSON_ITEM_KEY, value: jsonValue}]

    return (
        <div className={styleClasses.itemsGroup}>
            <div className={styleClasses.groupTitle}>
                {title}
            </div>
            <div className={styleClasses.items}>
            {
                fullItems.map((item) => (
                    <Item key={item.key} item={item}/>
                ))
            }
            </div>
        </div>
    )
}

export default ItemsGroup;
