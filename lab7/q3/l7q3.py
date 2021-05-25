#creating a table
import sqlite3
conn = sqlite3.connect('student.db')
print ("Opened database successfully")
conn.execute('''CREATE TABLE STUDENT 
(REGNO INT PRIMARY KEY NOT NULL, NAME TEXT NOT NULL,
SEMESTER INT NOT NULL, DEPT CHAR(50));''')
print ("Table created successfully")

#inserting values
conn.execute("INSERT INTO STUDENT (REGNO,NAME,SEMESTER,DEPT) \
VALUES (180911358, 'abc', 6, 'ICT')")
conn.execute("INSERT INTO STUDENT (REGNO,NAME,SEMESTER,DEPT) \
VALUES (180911357, 'bac', 6, 'ICT')")
conn.execute("INSERT INTO STUDENT (REGNO,NAME,SEMESTER,DEPT) \
VALUES (180907356, 'cba', 6, 'ECE')")
conn.execute("INSERT INTO STUDENT (REGNO,NAME,SEMESTER,DEPT) \
VALUES (170911355, 'cab', 4, 'ICT')"); conn.commit()
print ("Records created successfully")

#select based on condition
print ("Opened database successfully")
cursor = conn.execute("SELECT REGNO,NAME,SEMESTER,DEPT from STUDENT \
WHERE REGNO='180911358'") 
for row in cursor:
    print ("REGNO = ", row[0])
    print ("NAME = ", row[1])
    print ("SEMESTER = ", row[2]) 
    print ("DEPT = ", row[3], "\n") 
print ("Operation done successfully")

conn.close()