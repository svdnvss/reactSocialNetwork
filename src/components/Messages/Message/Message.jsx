import s from './../Messages.module.css'

const Message = (props) => {
    return (
        <div className={s.message}>
            <div className={s.left}>
                <div className={s.leftMessage}>
                    {props.message}
                </div>
            </div>
            <div className={s.middle}></div>
            <div className={s.right}>
                <div className={s.rightMessage}>
                    {props.message}
                </div>
            </div>
        </div>
    )
}

export default Message;