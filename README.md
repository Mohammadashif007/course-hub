# Ed-Tech Hub

With this project you can easily purchase any course that suits your need.


## Features

- **Credit Hour** : You can purchase any course for a maximum duration of 20 hours.
- **Quantity** : You can't purchase the same course multiple times. If you attempt to do so, a toast alert will be displayed.
- **Invoice** : When you select a course, the invoice cart will display the name of course, total credit hour, remaining credit hour and total price.


## State management

Utilized the "useState" hook for manage the component state and display dynamic data on the UI.

Here is an example:

```
    const [cart, setCart] = useState([]);
    const [totalTime, setTotalTime] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [creditRemaining, setCreditRemaining] = useState(20);
```

