import React, {Component} from 'react';

class Collection extends Component{

    render(){
        let collection = {
            name: 'Bebidas energéticas',
            tags: ['Monster', 'Rockstar', 'Red Bull'],
            description: 'Una pequeña collección de bebidas energéticas'
        };

        return (<div className="collection">
            <h1> {collection.name}</h1>
            <p>{collection.description}</p>
            <ol>
            {
                collection.tags.map((tag, i) =>{
                    return (
                        <li>
                            {tag}
                        </li>
                    )
                })
            }
            </ol>
        </div>
            
        );
    }
}

export default Collection;