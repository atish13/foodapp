import style from '../css/Container.module.css';
export default function container({children})
{
    return<div 
    className={style.parent}>{children}</div>
}