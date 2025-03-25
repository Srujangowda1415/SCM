#include <stdio.h>

int main() {
    int branch;

    // Input the day number from the user
    printf("Enter a number between 1 and 4: ");
    scanf("%d", &branch);

    // Use a switch statement to print the corresponding day of the week
    switch (branch) {
        case 1:
            printf("B tech in CSE\n");
            break;
