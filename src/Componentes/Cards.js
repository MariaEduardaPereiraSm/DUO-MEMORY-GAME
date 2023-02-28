import { useState } from 'react'
import Card from './Card'
import  './Cards.css'

function Cards() {
    const [items, setItems] = useState([
        { id: 1, img: '/DUO-FOTOS/FOTO1.png', stat: "" },
        { id: 1, img: '/DUO-FOTOS/FOTO1.png', stat: "" },
        { id: 2, img: '/DUO-FOTOS/FOTO2.png', stat: "" },
        { id: 2, img: '/DUO-FOTOS/FOTO2.png', stat: "" },
        { id: 3, img: 'DUO-FOTOS/FOTO3.png', stat: "" },
        { id: 3, img: 'DUO-FOTOS/FOTO3.png', stat: "" },
        { id: 4, img: 'DUO-FOTOS/FOTO4.png', stat: "" },
        { id: 4, img: 'DUO-FOTOS/FOTO4.png', stat: "" },
        { id: 5, img: 'DUO-FOTOS/FOTO5.png', stat: "" },
        { id: 5, img: 'DUO-FOTOS/FOTO5.png', stat: "" },
        { id: 6, img: 'DUO-FOTOS/FOTO6.png', stat: "" },
        { id: 6, img: 'DUO-FOTOS/FOTO6.png', stat: "" },
        { id: 7, img: 'DUO-FOTOS/FOTO7.png', stat: "" },
        { id: 7, img: 'DUO-FOTOS/FOTO7.png', stat: "" },
        { id: 8, img: 'DUO-FOTOS/FOTO8.png', stat: "" },
        { id: 8, img: 'DUO-FOTOS/FOTO8.png', stat: "" }
    ].sort(() => Math.random() - 0.5))

    const [anterior, setanterior] = useState(-1)

    function check(atual) {
        if (items[atual].id == items[anterior].id) {
            items[atual
            ].stat = "correct"
            items[anterior].stat = "correct"
            setItems([...items])
            setanterior(-1)
        } else {
            items[atual
            ].stat = "wrong"
            items[anterior].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[atual
                ].stat = ""
                items[anterior].stat = ""
                setItems([...items])
                setanterior(-1)
            }, 1000)
        }
    }

    function handleClick(id) {
        if (anterior === -1) {
            items[id].stat = "active"
            setItems([...items])
            setanterior(id)
        } else {
            check(id)
        }
    }

    return (<div className='teste'>
        <div className="container">
            {items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            ))}
        </div>
        </div>
    )
}

export default Cards