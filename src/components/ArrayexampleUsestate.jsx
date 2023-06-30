import React, { useState } from 'react'
import {data} from "./data"

const ArrayexampleUsestate = () => {

    const [people, setPeople] = useState(data)

    const remove = (id) =>{
        const newPeople = people.filter((item) => item.id !== id);
        setPeople(newPeople)
    }
    // or this logic works ==>    setPeople(people.filter((item) => item.id !== id))
    // }
    const clearAll = () =>{
      setPeople([])
    }
    
    return (
        <div>
            {people.map((item) => {
                const {id, name} = item;
                return (
                    <div key={id}>
                    <h6>{name}</h6>
                    <button type='button' onClick={()=> remove(id)}>remove</button>
                    </div>
    )
})}
<button type='button' onClick={clearAll}>Clear all</button>
    </div>    
  )
}


export default ArrayexampleUsestate;