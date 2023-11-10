import { labels, languages } from '../../constants';
import { copyText } from '../../utils/clipboard';
import CodeItem from '../CodeItem/CodeItem';
import styleClasses from './Item.module.css'

function Item(props) {
    const { item } = props
    const isJSONItem = item.key === labels.JSON_ITEM_KEY
    const classNames = [styleClasses.item]
    if (isJSONItem) {
        classNames.push(styleClasses.jsonItem)
    }

    return (
        <div className={classNames.join(' ')}>
            <div
                className={styleClasses.titleItem}
                onClick={copyText(item.key)}
            >
                {item.key}
            </div>
            {
                isJSONItem
                    ? <CodeItem
                        value={item.value}
                        language={languages.JSON_LANGUAGE_NAME}
                        onClick={copyText(item.value)}
                        />
                    : <div
                        className={styleClasses.valueItem}
                        onClick={copyText(item.value)}
                    > {item.value} </div>
            }
        </div>
    )
}

export default Item;
