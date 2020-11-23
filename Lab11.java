package com.HelloWorld;

public class Lab11 {
	public static void main(String[] args) {
		box1();
		System.out.println(box2());
	}
	
	static void box1() {
		System.out.println("Don't retern");
	}

	
	static String box2() {
		return("Return");
	}
}
