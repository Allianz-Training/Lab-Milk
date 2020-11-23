package com.HelloWorld;

public class Lab9 {
	public static void main(String[] args) {
		System.out.println("A)");
		for (int count = 0; count < 21; count++) {	
			if (count==22)
				continue;
		System.out.println("Count : " + count);
		}
		
		System.out.println("B)");
		for (int count = 0; count < 21; count++) {	
			if (count==11)
				continue;
		System.out.println("Count : " + count);
		
		}
		System.out.println("C)");
		for (int count = 0; count < 21; count++) {	
			if (count > 11) {
				continue;
			}
		System.out.println("Count : " + count);
		
		}
		
	}

}
