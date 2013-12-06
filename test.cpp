#include "stdio.h"
#include "stdint.h"
#include "unistd.h"
#include "stdlib.h"
#include <iostream> //cin/cout
#include <algorithm>    // std::binary_search, std::sort
#include <vector>       // std::vector   binary_search<Test, Test>(NULL, NULL, NULL);
using namespace std;

int binary_search(int *a, int n, int v) {
   int low = 0;
   int high = n;

   while(low <= high) {
      int middle = (low + high) / 2;
      if(a[middle] < v) {
         low = middle + 1;
      } else if(a[middle] > v) {
         low = middle - 1;
      } else {
         return middle;
      }
   }

   printf("Not found\n");
   return -1;
}

int main(int argc, char** argv) {
   int i;
   printf("What a PL!\n");
   for (i = 0; i < 10; i++) {
      printf("Test %d\n", i);
   }
}
