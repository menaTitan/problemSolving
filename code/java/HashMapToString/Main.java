import java.util.HashMap; 
import java.util.Map; 
import java.util.StringJoiner;
import java.util.ArrayList;
import java.util.List;
class Main {
  public static void main(String[] args) {
   HashMap<String, String> capitalCities = new HashMap<String, String>();
   /*
    capitalCities.put("England", "London");
    capitalCities.put("Germany", "Berlin");
    capitalCities.put("Norway", "Oslo");
    capitalCities.put("USA", "Washington DC");
    System.out.println(capitalCities);*/
    if(!capitalCities.isEmpty())
      System.out.println(mapToString(capitalCities));
  }

  private static String mapToString(HashMap<String, String> map){
    List<String> values = new ArrayList<>();
    StringJoiner stringJoiner = new StringJoiner("\n");
    map.forEach((k, v)-> values.add(k +" : "+ v));
    values.forEach(v -> stringJoiner.add(v));
    return stringJoiner.toString();
  }
}