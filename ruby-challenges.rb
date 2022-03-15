# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'



def  some (num)
    if num %2==0 then
        p "#{num} is even"
    else
        p "#{num} is odd"
    end
end
some num1
some num2
some num3

# works Great

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowel(str)
    result = str.delete 'aeiouAEIOU'
    puts result
end
remove_vowel album1
remove_vowel album2
remove_vowel album3



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'


def check_palindromic(variable)
    variable.downcase!
    
    if variable.reverse == variable #Check if string same when reversed 
      puts "#{ variable } is a palindrome."
    else # If string is not the same when reversed
      puts "#{ variable } is not a palindrome."
    end
  end

check_palindromic is_palindrome1
check_palindromic is_palindrome2
check_palindromic is_palindrome3 