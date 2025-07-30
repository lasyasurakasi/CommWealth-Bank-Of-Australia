package com.tcs.ems.pojo;
import java.util.Scanner;
import java.util.Map;
import java.util.HashMap;
public class Account { 
    private int id; 
    private String firstName; 
    private String lastName; 
    private float balance; 
    private boolean active; 
    private String branch; 
    
    public Account() { 
        super(); 
        // TODO Auto-generated constructor stub 
    } 
    
    public Account(int id, String firstName, String lastName, float balance, boolean active, String branch) { 
        this.id = id; 
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.balance = balance; 
        this.active = active; 
        this.branch = branch; 
    } 

    @Override 
    public String toString(){ 
        return "Account [id =" + id + " , First Name =" + firstName + " , Last Name=" + lastName + " , Balance = " + balance + ", Active Account = " + active + " , Branch = " + branch + "]"; 
    } 

    public void withdraw(float amount){ 
        if(amount <= 0){ 
            System.out.println("You cant transfer amount which is less than or equal to zero"); 
            return; 
        } 
        else if(amount % 100 != 0){ 
            System.out.println("Entered amount must be a multiple of 100"); 
            return; 
        } 
        else if((balance - amount) <= 1000){ 
            System.out.println("Insufficient Amount"); 
            return; 
        } 
        balance -= amount; 
    } 
    
    public void deposit(float amount) { 
        balance += amount; 
    } 
    
    public void transfer(Account acc1, Account acc2, float amount) { 
        acc1.withdraw(amount); 
        acc2.deposit(amount); 
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Map<Integer, Account> accounts = new HashMap<>();
        int choice;
        
        do {
            System.out.println("\n=== Banking System Menu ===");
            System.out.println("1. Create New Account");
            System.out.println("2. Deposit Money");
            System.out.println("3. Withdraw Money");
            System.out.println("4. Transfer Money");
            System.out.println("5. Display Account Details");
            System.out.println("6. Exit");
            System.out.print("Enter your choice: ");
            
            choice = scanner.nextInt();
            
            switch(choice) {
                case 1:
                    System.out.print("Enter Account ID: ");
                    int id = scanner.nextInt();
                    scanner.nextLine(); // consume newline
                    System.out.print("Enter First Name: ");
                    String firstName = scanner.nextLine();
                    System.out.print("Enter Last Name: ");
                    String lastName = scanner.nextLine();
                    System.out.print("Enter Initial Balance: ");
                    float balance = scanner.nextFloat();
                    System.out.print("Enter Branch: ");
                    scanner.nextLine(); // consume newline
                    String branch = scanner.nextLine();
                    
                    accounts.put(id, new Account(id, firstName, lastName, balance, true, branch));
                    System.out.println("Account created successfully!");
                    break;
                    
                case 2:
                    System.out.print("Enter Account ID: ");
                    id = scanner.nextInt();
                    if (accounts.containsKey(id)) {
                        System.out.print("Enter amount to deposit: ");
                        float amount = scanner.nextFloat();
                        accounts.get(id).deposit(amount);
                        System.out.println("Deposit successful!");
                    } else {
                        System.out.println("Account not found!");
                    }
                    break;
                    
                case 3:
                    System.out.print("Enter Account ID: ");
                    id = scanner.nextInt();
                    if (accounts.containsKey(id)) {
                        System.out.print("Enter amount to withdraw: ");
                        float amount = scanner.nextFloat();
                        accounts.get(id).withdraw(amount);
                    } else {
                        System.out.println("Account not found!");
                    }
                    break;
                    
                case 4:
                    System.out.print("Enter Source Account ID: ");
                    int sourceId = scanner.nextInt();
                    System.out.print("Enter Destination Account ID: ");
                    int destId = scanner.nextInt();
                    if (accounts.containsKey(sourceId) && accounts.containsKey(destId)) {
                        System.out.print("Enter amount to transfer: ");
                        float amount = scanner.nextFloat();
                        accounts.get(sourceId).transfer(accounts.get(sourceId), accounts.get(destId), amount);
                        System.out.println("Transfer completed!");
                    } else {
                        System.out.println("One or both accounts not found!");
                    }
                    break;
                    
                case 5:
                    System.out.print("Enter Account ID: ");
                    id = scanner.nextInt();
                    if (accounts.containsKey(id)) {
                        System.out.println(accounts.get(id));
                    } else {
                        System.out.println("Account not found!");
                    }
                    break;
                    
                case 6:
                    System.out.println("Thank you for using our banking system!");
                    break;
                    
                default:
                    System.out.println("Invalid choice! Please try again.");
            }
            
        } while (choice != 6);
        
        scanner.close();
    }
}
