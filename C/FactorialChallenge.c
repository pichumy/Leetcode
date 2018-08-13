#include <stdio.h>

int main(){
  int number = 0;
  printf("Please enter a number ");
  int inputNumber = scanf("%d", &number);
  if(inputNumber == EOF){
    printf("Error, not a valid number to read");
  }else{
    int zero_count = 0;
    // number of zeroes is equal to the number of times the number is divisible by 5
    for(int five_factor=5; five_factor <= number; five_factor *= 5){
      zero_count += number / five_factor;
    }
    printf("Trailing number of zeroes for %d!\n", number);
    printf("Is %d\n", zero_count);
  }

}
