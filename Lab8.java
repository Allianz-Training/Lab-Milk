package com.HelloWorld;

public class Lab8 {
	public static void main(String[] args) {
		System.out.println("A)");
		for (int count = 0; count <= 20; count++) {
		System.out.println("Count: " + count);
		}
		
		System.out.println("B)");
		for (int count = 0; count <= 20; count++) {
			System.out.println("Count: " + count);
			if (count >= 11) {
				System.out.println("Break at  " + count);break;
			}
		}
		
		System.out.println("C)");
		for (int count = 0; count <= 20; count++) {
			System.out.println("Count: " + count);
			if (count == 11) {
				System.out.println("Stop at " + count);break;
			}
		}
		
	}
	
}