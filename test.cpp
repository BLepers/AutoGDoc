#include "stdio.h"
#include "stdint.h"
#include "unistd.h"
#include "stdlib.h"

int do_work(int i) {
   int toto;
   int *g = (int*)malloc(i*sizeof(*g));
   g[i] = g[i + 1];
   printf("Test clignote");
   printf("Non fermée \n");
   printf("Now it behaves even better than VIM!");
}

int main(int argc, char** argv) {
   int i;
   for (i = 0; i < 10; i++) {
      printf("Test %d\n", i);
   }
}
