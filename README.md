# Dynamic Div Plugin

### Utilization

``HTML``
```
<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script type="text/javascript" src="./dynamicBoard.js"></script>
```
``JS``
```
    $(document).ready(function(){
        $('#object').dynamic({}) 
    });
```
> *'Object'* is action tag 

``Attribute changing``

```
    $('#object').dynamic({
        backgroundColor : "#33F0FF",
        color : "#000000",
        left : 100,
        top : 0,
        borderRadius: 20
    });
```

### jQuery Plugin Methods
```
    // Show dynamicBoard
    $('#dynamic_area').popup("open"); 
    // Close dynamicBoard
    $('#dynamic_area').popup("close");
```

### Default Options : 
```
    backgroundColor: '#000000',
    color: '#FFFFFF',
    left: 100,
    top: 100,
    position: 'absolute',
    marginLeft: 5,
    marginBottom: 5,
    padding: 20,
    speed: 500,
    width: 400,
    height: 150,
    borderStyle:'solid',
    borderSize: 5,
    borderColor: '#FDDDDD',
    borderRadius: 0,
    targetTagId: 'page',
    dynamicTagId: 'dynamic_area'
```
### Options : 

``left`` 0 - 100 <br> 
``top`` 0 - 100 <br>
``left``: 50 ``top``: 50 {**center**} <br>
``backgroundColor``: background-color <br>
``color``: Text color <br>
``position``: Position status <br>
``marginLeft``: Corner gap left-right <br>
``marginBottom``: Corner gap top-bottom <br>
``padding``: Space around content <br>
``speed``: Effect delay {ms} <br>
``width``: Board width <br>
``height``: Board height <br>
``borderStyle``: Border line Style <br>
``borderSize``: Border line width <br>
``borderColor``: Border line color <br>
``borderRadius``: Border radius px <br>
``targetTagId``: Target content id <br>
``dynamicTagId``: Dynamic page id <br>