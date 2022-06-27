import React, { useEffect, useState } from 'react'
import { useMainContext } from './MainContextProvider';

//container which will display details of each person and their car
const PeopleContainer = () => {
    const { state } = useMainContext()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if (state.people) {
            setIsLoading(false)
        }
    }, [state.people])
    //todo: fix bug: conatainer should re render when people data is loaded
    return (
        <div>
            {!isLoading && state.people.forEach(person => {
                <div>
                    <h4>{person.first_name}</h4>
                </div>
            })}
        </div>
    )
}

export default PeopleContainer