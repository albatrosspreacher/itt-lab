import re

s = "is this a string?!"

print("The original string is : " + s)

res = re.sub(r'[^\w\s]', '', s) #remove any char that is not a word, space, or tab using regex

print("The string after removing punctuation is: " + res)
