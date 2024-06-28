import '../button/button.css'
export default({children, onClick}) => {
    const handleClick = () => {
        console.log('button clicked')
    }
    return (
        <button className='button' onClick={onClick}>{children}</button>
    )
}