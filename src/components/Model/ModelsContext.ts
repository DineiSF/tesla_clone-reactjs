import React, { ReactNode } from 'react'

interface CarModel {
    modelName:      string
    overlayNode:    ReactNode
    sectionRef:     React.RefObject<HTMLHtmlElement>
}

interface ModelsContext {
    WrapperRef:         React.RefObject<HTMLHtmlElement>
    regosteredModels:   CarModel[]
    registerModel:      ( model: CarModel )     => void
    unregisterModel:    ( modelName: string )   => void
    getModelByName:     ( modelName: string )   => CarModel | null
}

export default React.createContext<ModelsContext>( {} as ModelsContext ) 