import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './PlotCalculator.module.scss'
import { ProgressBar } from "@/shared/ui/ProgressBar/ProgressBar"
import { useState } from 'react'
import Button from '@/shared/ui/Button/Button'

export const PlotCalculator = () => {

    const [progress, setProgress] = useState<number>(0)
    const [size, setSize] = useState<string | undefined>()
    const [graniteColor, setGraniteColor] = useState<'White' | 'Black' | 'Grey' | undefined>()
    const [aditionalServices, setAditionalServices] = useState<'Yes' | 'No' | undefined>()


    const [graniteColorTemp, setGraniteColorTemp] = useState<'White' | 'Black' | 'Grey' | undefined>()
    const [tempSize, setTempSize] = useState<string>('Size0_8x1_1')
    const [tempSizeOther, setTempSizeOther] = useState<string>('')
    const [aditionalServicesTemp, setAditionalServicesTemp] = useState<'Yes' | 'No' | undefined>()

    const onSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempSize(e.target.value)
        if (e.target.value != 'Other') {
            setTempSizeOther('')
        }
    }

    const onSizeChangeOther = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempSizeOther(e.target.value)
    }

    const sizeFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (tempSizeOther) {
            setSize(tempSizeOther)
            setProgress(prev => prev + 20)
        } else if (tempSize) {
            setSize(tempSize)
            setProgress(prev => prev + 20)
        }
    }

    const onColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === 'White') {
            setGraniteColorTemp('White')
        } else if (e.target.value === 'Black') {
            setGraniteColorTemp('Black')
        } else if (e.target.value === 'Grey') {
            setGraniteColorTemp('Grey')
        }
    }

    const colorFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setGraniteColor(graniteColorTemp)
        setProgress(prev => prev + 20)
    }



    return <div className={styles.plotCalculator} >
        <h2>Рассчитайте стоимость проекта</h2>
        <p>Выберите необходимые параметры и получите итоговую стоимость</p>
        <ProgressBar progress={progress} />
        {
            !!size || <form className={classNames(styles.form, [styles.sizeForm])} onSubmit={sizeFormSubmit}>
                <h5>Укажите размер участка:</h5>
                <label className={styles.sizeLabel} htmlFor="Size0_8x1_1">
                    <input onChange={onSizeChange} id='Size0_8x1_1' type="radio" name="plotsize" defaultChecked value="Size0_8x1_1" />
                    0.8*1.1 м
                </label>
                <label className={styles.sizeLabel} htmlFor="Size1_0x2_0">
                    <input onChange={onSizeChange} id='Size1_0x2_0' type="radio" name="plotsize" value="Size1_0x2_0" />
                    1.0*2.0 м
                </label>
                <label className={styles.sizeLabel} htmlFor="Size1_8x2_0">
                    <input onChange={onSizeChange} id='Size1_8x2_0' type="radio" name="plotsize" value="Size1_8x2_0" />
                    1.0*2.0 м
                </label>
                <label className={styles.sizeLabel} htmlFor="Size2_0x2_0">
                    <input onChange={onSizeChange} id='Size2_0x2_0' type="radio" name="plotsize" value="Size2_0x2_0" />
                    1.0*2.0 м
                </label>
                <label className={styles.sizeLabel} htmlFor="Size2_0x2_5">
                    <input onChange={onSizeChange} id='Size2_0x2_5' type="radio" name="plotsize" value="Size2_0x2_5" />
                    1.0*2.5 м
                </label>
                <label className={classNames(styles.sizeLabel, [styles.otherSize])} htmlFor="Other">
                    <input onChange={onSizeChange} className={styles.otherSizeInputRadio} id='Other' type="radio" name="plotsize" value="Other" />
                    <span className={styles.otherSizeText}>Другой</span>
                    <input onChange={onSizeChangeOther} name='otherSize' className={styles.otherSizeInput} type="text" placeholder="Ширина*Длина" />
                </label>
                <Button type='submit' variant='secondary' rounded='xl' style={{ paddingInline: '50px', alignSelf: 'center' }}>Далее</Button>
            </form>
        }
        {
            !Boolean(size) || Boolean(graniteColor) || <form className={classNames(styles.form, [styles.sizeForm])} onSubmit={colorFormSubmit}>
                <h5>Укажите цвет гранита:</h5>
                <label className={styles.sizeLabel} htmlFor="White">
                    <input onChange={onColorChange} id='White' type="radio" name="plotColor" defaultChecked value="White" />
                    White
                </label>
                <label className={styles.sizeLabel} htmlFor="Black">
                    <input onChange={onColorChange} id='Black' type="radio" name="plotColor" value="Black" />
                    Black
                </label>
                <label className={styles.sizeLabel} htmlFor="Grey">
                    <input onChange={onColorChange} id='Grey' type="radio" name="plotColor" value="Grey" />
                    Grey
                </label>
                <Button type='submit' variant='secondary' rounded='xl' style={{ paddingInline: '50px', alignSelf: 'center' }}>Далее</Button>
            </form>
        }
        {
            !Boolean(size) || !Boolean(graniteColor) || Boolean(aditionalServices) || <form className={classNames(styles.form, [styles.sizeForm])} onSubmit={colorFormSubmit}>
                <h5>Укажите дополнительные услуги:</h5>
                <label className={styles.sizeLabel} htmlFor="White">
                    <input onChange={onColorChange} id='White' type="checkbox" defaultChecked value="White" />
                    White
                </label>
                <label className={styles.sizeLabel} htmlFor="Black">
                    <input onChange={onColorChange} id='Black' type="checkbox" value="Black" />
                    Black
                </label>
                <label className={styles.sizeLabel} htmlFor="Grey">
                    <input onChange={onColorChange} id='Grey' type="checkbox" value="Grey" />
                    Grey
                </label>
                <Button type='submit' variant='secondary' rounded='xl' style={{ paddingInline: '50px', alignSelf: 'center' }}>Далее</Button>
            </form>
        }
    </div>
}

