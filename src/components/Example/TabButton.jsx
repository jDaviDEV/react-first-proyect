function TabButton ({children, isSelected, ...props}) {
    return (
        <li><button className={isSelected ? "active": undefined} {...props}>{children}</button></li>
        //children is a special prop atribute for the component
        // allows to send a value between Component's
        // opening and closing tag <>--here--</>
        // it also can be more html tags as a value to send
        // <>--<p>here</p>--</>
    )
}

export default TabButton;