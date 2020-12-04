import React from 'react'
import Button from './index.js'
import { withKnobs, text } from '@storybook/addon-knobs'
import STORY_IMG from "../../../.storybook/img/deathrun_medium.jpg";

export default {
    title: "'Button component', decorators: [withKnobs]}"
}

export const button = () => {
    const message = text('Text', `Don't click here!`)
    return (
        <>
            <img src={STORY_IMG} />
            <Button message={message}>
                Hello
    </Button>
        </>
    )
}