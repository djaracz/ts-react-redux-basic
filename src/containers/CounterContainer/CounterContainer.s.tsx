import glamorous, { GlamorousComponent } from 'glamorous';

export const CounterElement: GlamorousComponent<any, any> = glamorous.span({
        padding: '8px 15px 8px',
        margin: '0 10px',
        border: '1px solid tomato',
        borderRadius: 15
    },
    ({ textColor = '#000' }) => ({
        color: textColor
    })
)