# Magic Masks

This is magic! 🎩

## About

Simple lib to you use magic masks! I always use it in my projects, but at this moment I decided to create a library for the community to use. I hope you have fun!

## Available Masks

- cellphone
- cellphoneOrPhone (dynamically changes)
- clear (remove all special characters)
- cnpj
- cpf
- cpfOrCnpj (dynamically changes)
- creditCard
- creditCardExpiry
- currency
- phone
- zipCode

### Simple use

```js
import { unmask, zipCode } from 'magic-masks';

const zipCodeMasked = zipCode('00000000');

console.log(zipCodeMasked); // Output is 00000-000

console.log(unmask(zipCodeMasked)); // Output is 00000000;
```

You can use with anything

### ReactJS (uncontroled input)

```jsx
import { useRef, useCallback } from 'react';

import masks from 'magic-masks';
import PropTypes from 'prop-types';

const Input = ({ name, mask }) => {
  const inputRef = useRef();

  const handleChangeInput = useCallback((e) => {
      const { value } = e.target;

      if (mask) {
        if (!masks[mask])
          throw new Error(`The magic mask ${mask} is not available!`);

        e.target.value = masks[mask](value);
      }
    }),
    [masks, mask];

  return (
    <input
      ref={inputRef}
      type="text"
      name={name}
      onChange={handleChangeInput}
    />
  );
};

Input.defaultProps = {
  mask: '',
};

Input.propTypes = {
  mask: PropTypes.string,
  name: PropTypes.string.isRequired,
};

const App = () => {
  return <Input name="zipCode" mask="zipCode" />;
};

export default App;
```

### React Native (uncontroled input)

```jsx
import { useRef, useCallback } from 'react';

import masks from 'magic-masks';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

const Input = ({ name, mask }) => {
  const inputRef = useRef();

  const handleOnChange = useCallback((text) => {
    if (mask) {
      if (!masks[mask])
        throw new Error(`The magic mask ${mask} is not available!`);

      const maskedValue = masks[mask](text);
      inputRef.current.value = maskedValue;
      inputRef.current.setNativeProps({
        text: maskedValue,
      });
    }
  }, []);

  return <TextInput ref={inputRef} onChange={handleChangeInput} />;
};

Input.defaultProps = {
  mask: '',
};

Input.propTypes = {
  mask: PropTypes.string,
  name: PropTypes.string.isRequired,
};

const App = () => {
  return <Input name="zipCode" mask="zipCode" />;
};

export default App;
```

## Contributing

Thank you for being interested on making this package better. We encourage everyone to help improving this project with some new features, bug fixes and performance issues. Please take a little bit of your time to read our guides, so this process can be faster and easier.

### Contribution Guidelines

Take a moment to read about our [Contribution Guidelines](/.github/CONTRIBUTING.md) so you can understand how to submit an issue, commit and create pull requests.

### Code of Conduct

We expect you to follow our [Code of Conduct](/.github/CODE_OF_CONDUCT.md). You can read it to understand what kind of behaviour will and will not be tolerated.

## Need help?

If you need help with Magic Masks, feel free to open an issue with a description of the problem you're facing.

## License

MIT
