package com.HelloWorld;

import java.util.Arrays;

public class HelloWorld {
	public static void main(String [] args) {
		System.out.println("Hello World");
		/*Data type: integer
		 Variable name: box1
		 */
		
		int box1;
		//Assign box1=20//
		box1=20;
		System.out.println("This is int" + box1 );
		
		boolean box2;
		box2=true;
		System.out.println("This is boolean" + box2 );
		
		String box3;
		box3= "Hello" ;
		System.out.println("This is string" + box3 );
		
		float box4;
		box4= 1;
		System.out.println("This is float" + box4 );
		bark();
		
		float box5 = 3.2f;
		int box6 = (int)box5 ;
		System.out.println("my float : " + box5 );
		System.out.println("my int : " + box6 );
		
		int[] arr = {1,2,3,5,6}; // new int[5]
		System.out.println(arr[2]);
		System.out.println(Arrays.toString(arr));
		
		int i=3;
		i++;
		System.out.println(i);
		System.out.println(i++);
		System.out.println(i);
		
		
		int score=60;
		boolean isHandSome = false;
		if (score>=80 || isHandSome==true)
			System.out.println("Good");
		else if (score>=50 && score<80)
			System.out.println("Normal");
		else if (score<50)
			System.out.println("Fail");
		
		int counter = 1;
		while (counter <= 10) {
			System.out.println("Counter" + counter);
			counter++;
		}
		
		int number = 0;
		int Total = 0;
		while (number <= 9) {
			++number;
			Total += number;
			System.out.println("Number = " + number);
			System.out.println("Total = " + Total);
			
		}
		
		
		 
		
		
		
	}
	
	public static void bark() {
		String dogName = "Jimmy";
		System.out.println("The dog name: " + dogName);
		
	}
	
	
}
