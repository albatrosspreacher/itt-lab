def isPalindrome(s): 
	return s == s[::-1] #reverse the string

s = "eye" #define the string
ans = isPalindrome(s)

if ans:
	print("String is a palindrome") #print result accordingly
else:
	print("String is not a palindrome")
