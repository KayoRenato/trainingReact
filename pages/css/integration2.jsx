import style from './integration2.module.css'

export default function integration(){
    return (
        <div >
            <div className={style.red}> Text #01 - Module</div>
            <div className={style['blue']}> Text #02 - Module</div>
            <div className={style.white}> Text #03 - Module</div>
        </div>
    )
}