
``` java
package banking;

import java.io.*;

public class Banking {
    //Creating arrays to store account number
  static int account_number[] = new int[1000];
  static int account_pin[]=new int[1000];
  static int index=0,indexToCheck;
  static String account_name[]=new String[1000];
  static int account_balance[]=new int[1000];
  static int genAcctNum=1000,acc_number,pin,newpin;
     public static void main(String args[])throws IOException{
        //Creating objects that enable reading input
        InputStreamReader isr=new InputStreamReader(System.in);
        BufferedReader br=new BufferedReader(isr);
        int choice=999, result,depAmt,withAmt;
       while(choice!=0){
        System.out.println("Enter your choice");
        System.out.println("1. Create1 Account");
        System.out.println("2. Deposit Money");
        System.out.println("3. Withdraw money");
        System.out.println("4. Check balance");
        System.out.println("5. Change PIN");
        System.out.println("0. Quit");
        
        choice = Integer.parseInt(br.readLine());
       
        if(choice==1){
        System.out.println("Please enter your name");
        account_name[index]=br.readLine();
        account_number[index]=genAcctNum;
        account_balance[index]=0;
        System.out.println("Enter your 4 digit account pin");
        account_pin[index]=Integer.parseInt(br.readLine());
        System.out.println("Your account number is "+genAcctNum);
        index=index+1;
        genAcctNum=genAcctNum+1;
        }
        else if(choice==2){
            System.out.println("Enter your account number");
            acc_number = Integer.parseInt(br.readLine());
            System.out.println("Enter your pin");
            pin=Integer.parseInt(br.readLine());
            result=checkPin(acc_number,pin);
            if(result==1){
                System.out.println("Enter the deposit amount");
                depAmt=Integer.parseInt(br.readLine()); 
                account_balance[acc_number-1000]= account_balance[acc_number-1000] + depAmt;
                System.out.println(depAmt+" successfully deposited");
            }
            else{
                System.out.println("Invalid pin, Try again");
            }         
        }
        else if(choice==3){
            System.out.println("Enter your account number");
            acc_number = Integer.parseInt(br.readLine());
            System.out.println("Enter your pin");
            pin=Integer.parseInt(br.readLine());
            result=checkPin(acc_number,pin);
            if(result==1){
                System.out.println("Enter the withdrawal amount");
                withAmt=Integer.parseInt(br.readLine()); 
                if((account_balance[acc_number-1000]-withAmt)>0){
                    account_balance[acc_number-1000]=account_balance[acc_number-1000]-withAmt;
                    System.out.println(withAmt+" successfully withdrawn");
                }
                else{
                    System.out.println("Insufficient funds");
                }
            }
            else{
                System.out.println("Invalid pin, Try again");
            }         
        }
        else if(choice==4){
            System.out.println("Enter your account number");
            acc_number = Integer.parseInt(br.readLine());
            System.out.println("Enter your pin");
            pin=Integer.parseInt(br.readLine());
            result=checkPin(acc_number,pin);
            if(result==1){
                System.out.println("Your account balance is "+account_balance[acc_number-1000]);
            }
            else{
                System.out.println("Invalid pin, Try again");
            }     

        }

        else if(choice==5){
            System.out.println("Enter your account number");
            acc_number = Integer.parseInt(br.readLine());
            System.out.println("Enter your pin");
            pin=Integer.parseInt(br.readLine());
            result=checkPin(acc_number,pin);
            if(result==1){
                 System.out.println("Enter your new pin");
                 newpin=Integer.parseInt(br.readLine());
                 account_pin[acc_number-1000]=newpin;
                 System.out.println("PIN successfully changed");
            }
            else{
                System.out.println("Invalid pin, Try again");
            }     
        }
    }
    }

    static int checkPin(int account,int pin){
        int checkingIndex=account-1000;
        if(account_pin[checkingIndex]==pin){
            return 1;
        }
        else{
            return 0;
        }

    }


}
```