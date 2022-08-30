# thehive.ai-dropdown-menu

The dropdown menu can be seen in this codesandbox: https://codesandbox.io/s/thehive-ai-dropdown-menu-0vgnbg

You can run it locally instead by following the below commands:

## 📦 Setup

To run the project you will first have to install the dependencies by running:

```bash
npm install
```

Then the server can be started by running:

```bash
npm run dev
```

## 🖋 Usage

```jsx
function App() {
  const [selectedDropdownItems, setSelectedDropdownItems] = useState([]);

  return (
    <Dropdown
      selectedDropdownItems={selectedDropdownItems}
      setSelectedDropdownItems={setSelectedDropdownItems}
      labelText="Regular Dropdown Menu"
      placeholderText="This is placeholder text"
      items={[
        "🦖 This is a T-Rex!",
        "🐶 This is a dog!",
        "🐱 This is a cat!",
        "🍅 This is a tomato!",
      ]}
    />
  );
}
```

## 📋 Properties

### `items`

Accepts an array of strings. These items are displayed in the dropdown menu.

Has a default value of:

```js
[
  "🦖 This is a T-Rex!",
  "🐶 This is a dog!",
  "🐱 This is a cat!",
  "🍅 This is a tomato!",
];
```

### `multiSelect`

Accepts a boolean. This determines if multiple dropdown items can be selected at once.

Has a default value of `false`.

### `placeholderText`

Accepts a string. This text is displayed in the dropdown button when no items are selected.

Has a default value of `"✨ This is some placeholder text"`

### `width`

Accepts a string. This property sets the width of the dropdown button.

Has a default value of `"18rem"`

### `maxHeight`

Accepts a string. This property sets the maxHeight of the dropdown menu. A scrollbar is shown when there are enough items to exceed this height.

Has a default value of `"20rem"`

### `selectedDropdownItems` (🚨 REQUIRED)

Accepts an empty array. It is the getter of a `useState` pair. The currently selected items are stored in this property.

Has a default value of `[]`

### `setSelectedDropdownItems` (🚨 REQUIRED)

Accepts a `useState` setter. The component uses this property to set the selected items.

Has a default value of `null`

### `labelText`

Accepts a string. This text is displayed as a label, right above the dropdown button.

Has a default value of `""`
