import { ReactEventHandler } from 'react'
import { ElegantSwitch } from 'react-elegant-switch'
import classnames from 'classnames-creator'
import { normalizeHex } from '@utils/colorFunctions'
import ColorCell from '@components/ColorCell'
import styles from './ColorPicker.module.scss'
import useWithHashStore from '@store/useWithHashStore'
const ColorPicker = ({
  color,
  quantity,
  handleChange,
}: {
  color: string
  quantity: number
  handleChange: ReactEventHandler
}) => {
  // Prevents '#' value warning in input color
  const normalizedColor = color ? '#' + normalizeHex(color) : '#1e1e1e'

  const { withHash, toggle } = useWithHashStore()

  const handleSwitchChange = () => {
    toggle()
  }

  return (
    <div style={{ '--picked-color': normalizedColor } as React.CSSProperties} className={styles.container}>
      <div className={styles['form-group']}>
        <label className={styles.text} htmlFor='color'>
          Choose a color!
        </label>
        <div className={styles['form-group__input-group']}>
          <input
            className={classnames(styles['form-group__input'], styles['form-group__input--color'])}
            onChange={handleChange}
            type='text'
            value={color}
            name='color'
          />
          <input onChange={handleChange} type='color' value={normalizedColor} name='color' />
        </div>
      </div>
      <div className={styles['form-group']}>
        <label className={styles.text} htmlFor='quantity'>
          Choose a quantity!
        </label>
        <input
          className={classnames(styles['form-group__input'], styles['form-group__input--number'])}
          onChange={handleChange}
          type='number'
          value={quantity}
          name='quantity'
          min={1}
          max={99}
        />
      </div>
      <div className={styles['form-group']}>
        <label className={styles.text} htmlFor='quantity'>
          Do you want to copy the #?
        </label>
        <ElegantSwitch checked={withHash} onChange={handleSwitchChange} />
      </div>
      {color && (
        <div className={styles['color-display']}>
          <p className={styles.text}>
            This is your <em>color</em>
          </p>
          <ColorCell color={normalizedColor} />
        </div>
      )}
    </div>
  )
}

export default ColorPicker
