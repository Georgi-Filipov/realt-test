import React from 'react';
import { Default } from './container.default';
import { TitleTwinsBlocks } from './container.title-twins-block';
import { CenterWithLogo } from './container.center-with-logo';
import { TwinsBlocks } from './container.twins-blocks';

const Container = props => <Default {...props} />;

Container.Default = Default;
Container.TitleTwinsBlocks = TitleTwinsBlocks;
Container.CenterWithLogo = CenterWithLogo;
Container.TwinsBlocks = TwinsBlocks;

export default Container;
