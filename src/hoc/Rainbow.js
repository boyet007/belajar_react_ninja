import React  from 'react'

const Rainbow = (WrappedComponent) => {
    console.log(WrappedComponent)
    const colours = ['yellow', 'pink', 'orange', 'blue', 'green']
    const randomColour = colours[Math.floor(Math.random() * 5)]
    const className = randomColour+ '-text'

    return (props) => {
        console.log(props)
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow

