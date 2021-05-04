import re

s = 'someone@something.com'
res = re.sub('@', 'at', s)
print(res)