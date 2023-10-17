package JavaPrograms;

public class Panagram {

	public static void main(String[] args) {
    String s="the quick brown fox jumps over a lazy dog";
     if(s.length()<26)
    {
	System.out.println("Not a Panagram");
	return;
     }
     else {
    	 char c='a';
    	 for(int i=0;i<26;i++)
    	 {
    		 if(s.contains(c+""));
    		 else {
    			 System.out.println("Not a Panagram");
    			 return;
    		 }
    		 c++;
    	 }
     }
     System.out.println("Panagram");
	}

}
