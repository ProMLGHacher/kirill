import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './PlotCalculator.module.scss'
import { ProgressBar } from "@/shared/ui/ProgressBar/ProgressBar"
import { useEffect, useState } from 'react'
import Button from '@/shared/ui/Button/Button'
import { $api } from '@/shared/api/api'


export const PlotCalculator = () => {

    const [progress, setProgress] = useState<number>(0)
    const [size, setSize] = useState<string | undefined>()
    const [graniteColor, setGraniteColor] = useState<'White' | 'Black' | 'Grey' | undefined>()
    const [aditionalService, setAditionalService] = useState<string | undefined>()


    const [graniteColorTemp, setGraniteColorTemp] = useState<'White' | 'Black' | 'Grey' | undefined>()
    const [tempSize, setTempSize] = useState<string>()
    const [tempSizeOther, setTempSizeOther] = useState<string>('')
    const [aditionalServicesTemp, setAditionalServicesTemp] = useState<string>()

    const [aditionalServices, setAditionalServices] = useState<{
        "id": string,
        "name": string,
        "price": number,
        "urlImage": string
    }[]>([])

    const [plotPrice, setPlotPrice] = useState<{
        "plotSizePrice": number,
        "graniteColorPrice": number,
        "additionalServicePrice": number,
        "totalPrice": number
    }>()

    useEffect(() => {
        $api.get('/api/additional-services').then((res) => {
            setAditionalServices(res.data)
        })
    }, [aditionalService])

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
            setProgress(40)
        } else if (tempSize) {
            setSize(tempSize)
            setProgress(40)
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
        setProgress(99)
    }

    const aditionalServicesFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setAditionalService(aditionalServicesTemp)

        $api.post('/api/tools/calculate-plot-price', {
            "additionalService": aditionalServicesTemp,
            "graniteColor": graniteColor,
            "plotSize": size
        }).then((res) => {
            setPlotPrice(res.data.value)
            setProgress(100)
        })
    }

    const aditionalServicesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAditionalServicesTemp(e.target.value)
    }



    return <div className={styles.plotCalculator} >
        <h2>Рассчитайте стоимость проекта</h2>
        <p style={{ marginBlock: '20px' }}>Выберите необходимые параметры и получите итоговую стоимость</p>
        <ProgressBar progress={progress} />
        {
            !!size || <form className={classNames(styles.form, [styles.sizeForm])} onSubmit={sizeFormSubmit}>
                <h5>Укажите размер участка:</h5>
                <label className={styles.sizeLabel} htmlFor="Size0_8x1_1">
                    <input onChange={onSizeChange} id='Size0_8x1_1' type="radio" name="plotsize" required value="Size0_8x1_1" />
                    0.8*1.1 м
                </label>
                <label className={styles.sizeLabel} htmlFor="Size1_0x2_0">
                    <input onChange={onSizeChange} id='Size1_0x2_0' type="radio" name="plotsize" required value="Size1_0x2_0" />
                    1.0*2.0 м
                </label>
                <label className={styles.sizeLabel} htmlFor="Size1_8x2_0">
                    <input onChange={onSizeChange} id='Size1_8x2_0' type="radio" name="plotsize" required value="Size1_8x2_0" />
                    1.8*2.0 м
                </label>
                <label className={styles.sizeLabel} htmlFor="Size2_0x2_0">
                    <input onChange={onSizeChange} id='Size2_0x2_0' type="radio" name="plotsize" required value="Size2_0x2_0" />
                    2.0*2.0 м
                </label>
                <label className={styles.sizeLabel} htmlFor="Size2_0x2_5">
                    <input onChange={onSizeChange} id='Size2_0x2_5' type="radio" name="plotsize" required value="Size2_0x2_5" />
                    2.0*2.5 м
                </label>
                {/* <label className={classNames(styles.sizeLabel, [styles.otherSize])} htmlFor="Other">
                    <input onChange={onSizeChange} className={styles.otherSizeInputRadio} id='Other' type="radio" name="plotsize" value="Other" />
                    <span className={styles.otherSizeText}>Другой</span>
                    <input onChange={onSizeChangeOther} name='otherSize' className={styles.otherSizeInput} type="text" placeholder="Ширина*Длина" />
                </label> */}
                <Button type='submit' variant='secondary' rounded='xl' style={{ paddingInline: '50px', alignSelf: 'center' }}>Далее</Button>
            </form>
        }
        {
            !Boolean(size) || Boolean(graniteColor) || <form className={classNames(styles.form, [styles.sizeForm])} onSubmit={colorFormSubmit}>
                <h5>Укажите цвет гранита:</h5>
                <label className={styles.sizeLabel} htmlFor="White">
                    <input onChange={onColorChange} id='White' type="radio" name="plotColor" required value="White" />
                    Белый
                </label>
                <label className={styles.sizeLabel} htmlFor="Black">
                    <input onChange={onColorChange} id='Black' type="radio" name="plotColor" required value="Black" />
                    Черный
                </label>
                <label className={styles.sizeLabel} htmlFor="Grey">
                    <input onChange={onColorChange} id='Grey' type="radio" name="plotColor" required value="Grey" />
                    Серый
                </label>
                <Button type='submit' variant='secondary' rounded='xl' style={{ paddingInline: '50px', alignSelf: 'center' }}>Далее</Button>
            </form>
        }
        {
            !Boolean(size) || !Boolean(graniteColor) || Boolean(aditionalService) || <form className={classNames(styles.form, [styles.sizeForm])} onSubmit={aditionalServicesFormSubmit}>
                <h5>Укажите дополнительные услуги:</h5>

                {aditionalServices.map((service) => (
                    <label className={styles.sizeLabel} htmlFor={service.id}>
                        <input onChange={aditionalServicesChange} id={service.id} type="radio" name="aditionalService" required value={service.name} />
                        {service.name}
                    </label>
                ))}
                <Button type='submit' variant='secondary' rounded='xl' style={{ paddingInline: '50px', alignSelf: 'center' }}>Далее</Button>
            </form>
        }
        {
            plotPrice && <div style={{ marginTop: '40px' }}>
                <h4 style={{ fontSize: '36px' }}>Стоимость проекта:</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBlock: '20px', borderBottom: '1px solid black' }}>
                    <p>Размер участка: {size == 'Size0_8x1_1' ? '0.8*1.1 м' : size == 'Size1_0x2_0' ? '1.0*2.0 м' : size == 'Size1_8x2_0' ? '1.8*2.0 м' : size == 'Size2_0x2_0' ? '2.0*2.0 м' : size == 'Size2_0x2_5' ? '2.0*2.5 м' : ''}</p>
                    <p>{plotPrice.plotSizePrice} ₽</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBlock: '20px', borderBottom: '1px solid black' }}>
                    <p>Цвет гранита: {graniteColor == 'White' ? 'Белый' : graniteColor == 'Black' ? 'Черный' : 'Серый'}</p>
                    <p>{plotPrice.graniteColorPrice} ₽</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBlock: '20px', borderBottom: '1px solid black' }}>
                    <p>Доп услуга: {aditionalService}</p>
                    <p>{plotPrice.additionalServicePrice} ₽</p>
                </div>
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                    <p style={{ fontSize: '20px', fontWeight: '600' }}>Итого:</p>
                    <p style={{ fontSize: '20px', fontWeight: '600' }}>{plotPrice.totalPrice} ₽</p>
                </div>
            </div>
        }
        {/* {
            !Boolean(size) || !Boolean(graniteColor) || Boolean(aditionalServices) || <form className={classNames(styles.form, [styles.sizeForm])} onSubmit={aditionalServicesFormSubmit}>
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
        } */}
    </div>
}

