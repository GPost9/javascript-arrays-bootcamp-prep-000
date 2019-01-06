function chocolateBars () 
  {
    var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
  }

function addElementToBeginningOfArray(array, element)
  {
    return [...element, array]
  }
  
function destructivelyAddElementToBeginningOfArray(array, element)
    {
    return array.unshift(element) 
    }
  
function addElementToEndOfArray(array, element)
  {
    [...array, element]
  }
  
function destructivelyAddElementToEndOfArray(array, element)
  {
    array.push(element)
  }
  
function accessElementInArray(array, index)
  {
   return(array[index])
  }

function destructivelyRemoveElementFromBeginningOfArray(array)
  {
    array.shift()
  }
  
function removeElementFromBeginningOfArray(array)
  {
    array.slice()
  }
  
function destructivelyRemoveElementFromEndOfArray(array)
  {
    array.pop()
  }
  
function removeElementFromEndOfArray(array)
  {
    array.slice(0, array.length -1)
  }