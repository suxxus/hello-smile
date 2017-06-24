**Gte Motive Vehicle Representation**
=======
**Module for graphic representation of parts in a dynamic composition**
*This component allows the visualization of a graphical composition of the vehicle.*

Supported on the following operating systems
--------------------------------------------
 - windows
 - mac
 - linux
 - ios
 - android

Supported on the following browsers
-----------------------------------
 - `>=` IE 10
 - google
 - chrome
 - firefox
 - safari

Use
---
In order to add the GTE-motive **Vehicle Representation API** to a small part of your application:
 - define your `<div>` somewhere in the html.

```
<div id="dynamic-composition"></div>
```
The default name is `dynamic-composition` .
(If you wish, you can use the identification name of your choice. Must be assigned with the `userConfig` method)
  - place the `<script>` with the GTE api after your `<div>` .
```
<script src="./vehicle-representation.js"></script>
```
- call the methods exposed by the Api

*(you can see an example at the end of this document).*

API
---

The api expose the following methods for interacting with the component.
**When the application initializes a certain order in these methods is mandatory. In this order**

 **1. userConfig**

 **2. appRender**

*The `userConfig` method can not be invoked after running the `appRender` method*.

*The rest of the methods can be called in any order*


methods
---

### onPartClick

callback

Receives the code of the selected part.
```
GTEapi.onPartClick(function(partCode){console.log(part)})
```

### onAppError
callback

Receives the errors thrown by the app.
```
GTEapi.onAppError(function(msg){console.log(msg)})
```
### userConfig
:: object -> promise

If this method is not called, the component assigns default values.

```
GTEapi.userConfig({...})
```

*paramenters that can be setted:*

**containerId (string)**

Assigning the `div` element as a component container.

The element must exist in the HTML file prior to calling the api `renderApp` method.

Default `id`: *'dynamic-composition'*.
```
<div id="dynamic-composition"></div>
```
*Optionally you can preset the colors that are assigned to the pieces according to their state.
They must be defined as hexadecimal numbers set to `0x`.*

**selected (string)**

Assigns the color for the `selected` state.

*default value: `'0X3A8EA5'`*


**blocked(string)**

Assigns the color for the `blocked` state.

*default value `‘0XEDBF3F’`*


**pending(string)**

Assigns the color for the `pending` state.

*default value `‘0XBEE1BE’`*


**notSolved**

Assigns the color for the `notSolved` state.

*default value `‘0XCCCCC’`*


**added**

Assigns the color for the `notAdded` state.

*default value `‘0XF7E0AA’`*


### renderApp

::  -> promise

Renders the app
```
GTEapi.renderApp()

```
### selectGraphicZone
:: object -> promise
Gets the data for the specified graphic area.

     GTEapi.selectGraphicZone({
         model: 'MB00202',
         id: '11000',
         query: [
         'jobType=All',
         'language=es-ES',
         'equipments=CB04,ZESP,MU01,AT02,TG25,EL01,IT08,RS08',
         'manufacturingValues=PMO F'
        ]
      })

### addPart
:: object -> promise

Sets the situation to `Added` for each of the parts in the list.

```
GTEapi.addPart({ partCodeList: ['7101L', ...] })
```

### deletePart
:: object -> promise
Sets the situation to `NotAdded` for each of the parts specified in the list.

```
GTEapi.deletePart({ partCodeList: ['7101L', ...] })
```

### getLaterality
:: -> promise
Returns the state of the current laterality.
```
GTEapi.getLaterality()
```
### setLaterality
:: string -> promise

Sets the state of laterality.

```
GTEapi.setLaterality()
```
*If a parameter is not assigned, it will go from `None` to `Left` in a cyclical way with each call to the method, that is, to go to the `Left` state always has to go through the `Right` state.*
**State None -> State Right -> Status Left**
You can assign a parameter to set the laterality:
```
'Left' || 'Right' || 'None'
```
### viewPending
:: boolean -> promise

True Boolean indicating whether parts with `Pending` status are displayed.
```
GTEapi.viewPending(true)
```

### resetZoom
:: -> promise

Resets the composition zoom to `1:1`.
```
GTEapi.resetZoom()
```
### clearGraphicZone
:: -> promise

Removes the composition.
```
GTEapi.clearGraphicZone()
```

### getSituation
:: string -> promise

Returns the value of the situation of the specified part.

```
GTEapi.getSituation('7101L')
```

### unselectPart
:: -> promise

Deselect the parts of the composition if there are any selected.
```
GTEapi.unselectPart()
```

### selectPart
:: string, boolean -> promise

Select the assigned part.
```
GTEapi.selectPart('7101L', true)
```
**RaiseEvent(boolean)**

It will be an optional parameter or a boolean. Indicates whether to throw the `PartClick` event or not.


## Example
```
<body>
    <div id="user-one-dynamic-composition"></div>
    <script src="./vehicle-representation.js"></script>

    <script>
    (function() {
        GTEapi.onPartClick(function(val) {
            console.log('partClick--> ', val);
        });
        GTEapi.onAppError(function(val) {
            console.log('error--> ', val);
        });
        GTEapi.userConf({
            selected: '0XCD5C5C',
            containerId: 'user-one-dynamic-composition',
        })
        .then(GTEapi.renderApp())
        .then(function() {
            return GTEapi.selectGraphicZone({
                model: 'MB00202',
                id: '11000',
                query: [
                    'jobType=All',
                    'language=es-ES',
                    'equipments=CB04,ZESP,MU01,AT02,TG25,EL01,IT08',
                    'RS08&manufacturingValues=PMO F'
                ]
            });
        })
        .then(function() {
            return GTEapi.addPart({ partCodeList: ['7101L'] });
        })
        .then(function() {
            return GTEapi.getLaterality();
        })
        .then(function(value) {
            return console.log('LATERALITY: ', value);
        })
        .done();
    }());
    </script>
</body>
```
