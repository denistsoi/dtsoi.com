### C++ Input / Output

Ref: [link](https://practice.geeksforgeeks.org/problems/c-input-output/0/?ref=self)

Read 2 integer from stdin and display their product to stdout.

Input: 
```
The first line of input contains integer T denoting the number of test cases. For each test case, there is a line containing two integers a,b.
```

Output:
```
For each test case, there is a line displaying the product of a and b.
```

Constraints: 
```
1<=T<=100
0<=a,b<=100
```
Example:
```
Input:
3 
2 6
3 7
8 3
Output:
12
21
24
```

Attempt:

``` cpp
#include <iostream>
using namespace std;

int main() {
	//code
	
	int t, i, input1, input2;
	
	i = 0;
	cin >> t;
	
	while (i < t) {
	    cin >> input1 >> input2;
	    cout << input1 * input2 << endl;
	    i++;
	    
	}
	return 0;
}
```

### Power of Pow | Even Number

Ref: [link](https://practice.geeksforgeeks.org/problems/power-of-pow-even-number/0/?ref=self)

Given a single integer N, your task is to find the sum of the square of first N even natural Numbers.

Examples:
```
Input : 3
Output : 56 
22 + 42 + 62 = 56

Input : 8
Output : 816
22 + 42 + 62 + 82 + 102 + 122 + 142 + 162 
```
Input:
```
First line of the input contains an integer T, denoting the number of test cases. Then T test case follows. The only line of each test case contains an integer N.
```

Output:
```
For each test case output the required anser on a new line.
```
Constraints:
```
1<=T<=100
N<=104
```
Example:
Input:
```
3
2
5
9
```

Output:
```
20
220
1140
```

Attempt  
``` cpp
#include <iostream>
#include <math.h>
using namespace std;

int main() {
	//code
  int t, i; 
  cin >> t;
  
  while (t--) {
    cin >> i;
    int temp = 0, result = 0;
    
    for (int c = 1; c <= i; c++) {
        temp = c * 2;
        result = result + pow(temp, 2);
    }
    cout << result << endl;
  }
  return 0;
}
```

### odd numbers

Given a single integer N, your task is to find the sum of the square of first N odd natural Numbers.

Examples:
```
Input : 3
Output : 35 
12 + 32 + 52 = 35

Input : 8
Output : 680
12 + 32 + 52 + 72 + 92 + 112 + 132 + 152 
Input:
First line of the input contains an integer T, denoting the number of test cases. Then T test case follows. The only line of each test case contains an integer N.

Output:
For each test case output the required anser on a new line.
```
Constraints:
```
1<=T<=100
N<=104
```
Example:
Input:
```
3
2
5
9
```
Output:
```
10
165
969
```

``` cpp
#include <iostream>
#include <math.h>
using namespace std;

int main() {
	//code
  int t, i; 
  cin >> t;
  
  while (t--) {
    cin >> i;
    int temp = 0, result = 0;
    
    for (int c = 1; c <= i; c++) {
        temp = (c * 2) - 1;
        result = result + pow(temp, 2);
    }
    cout << result << endl;
  }
  return 0;
}
```

### isogram

Ref: [link](https://practice.geeksforgeeks.org/problems/check-if-a-string-is-isogram-or-not/0/?ref=self)

Given a word or phrase, check if it is isogram or not. An Isogram is a word in which no letter occurs more than once.

Input:
```
The first line of input contains an integer T denoting the number of test cases. Each test case consist of one strings in 'lowercase' only, in a separate line.
```
Output:
```
Print 1 if string is Isogram else print 0.
Constraints:

1 <= T <= 100

1 <= |S| <= 100
```
Example:

Input:
```
2

machine

geeks
```
Output:
```
1

0
```
Explanation:
For testcase 2: geeks is not an isogram as 'e' appears twice. Hence we print 0.

### attempt 
``` cpp
#include <iostream>
#include <map>
#include <string>

using namespace std;

int main() {
	//code
	std::map<std::string, int> m;
	int t, length;
	string str;
	cin >> t;
	
	while (t--) {
	   
	   std::getline(std::cin, str);
	   length = str.length();
	   if (length > 26) {
	       return 0;
	   }
	   
	   cout << length << str << endl;
	   
	}
	
	return 0;
}
```