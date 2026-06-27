import styles from './Button.module.css'

function Button({ children, variant = 'primary', as: Component = 'button', ...props }) {
  return (
    <Component className={`${styles.button} ${styles[`button-${variant}`]}`} {...props}>
      {children}
    </Component>
  )
}

export default Button
