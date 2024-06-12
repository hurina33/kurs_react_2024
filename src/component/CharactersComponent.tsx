import React, {FC} from 'react';
import {ICharacterModel} from "../models/ICharacterModel";

interface IProps{
    characters: ICharacterModel[];
}
const CharactersComponent:FC <IProps> = ({characters}) => {

    return (
        <div>
            {
                characters.map(character => (<div key={character.id}> {character.name}</div>))
            }
        </div>
    );
};

export default CharactersComponent;