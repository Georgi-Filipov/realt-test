import React from 'react';

import { Default } from './input.default';
import { Password } from './input.password';
import { TextArea } from './input.textarea';
import { Search } from './input.search';
import { Number } from './input.number';

const Input = props => <Default {...props} />;

Input.Default = Default;
Input.Password = Password;
Input.TextArea = TextArea;
Input.Search = Search;
Input.Number = Number;

export default Input;
