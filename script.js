const display = document.getElementById("display")

function Display(input)
{
    display.value += input
}

function Calculate()
{
    try
    {
        display.value = eval(display.value)
    }
    catch(error)
    {
        display.value = "Error"
    }
}

function Clear()
{
    display.value = display.value.slice(0, -1)
}

function ClearAll()
{
    display.value = ""
}