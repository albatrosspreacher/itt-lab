#define functions for all mathemical operations

def sum(a, b): 
    return a+b 

def sub(a, b):
    return a-b

def mult(a, b):
    return a*b

def div(a, b):
    return a/b

#convert input to integer from string

a = int(input("Enter number1: "))
b = int(input("Enter number2: "))
print("1. Addition 2. Subtract 3. Multiplication 4. Division")
c = input("Enter choice: ")

if(c == "1"):
    print(sum(a,b))
elif (c=="2"):
    print(sub(a,b))
elif (c=="3"):
    print(mult(a,b))
elif(c=="4"):
    print(div(a,b))
else: 
    print("Invalid operation!")