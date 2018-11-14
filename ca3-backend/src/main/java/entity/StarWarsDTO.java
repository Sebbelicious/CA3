package entity;

/**
 *
 * @author adams
 */
public class StarWarsDTO {

    private final String name;
    private final String height;
    private final String birth_year;
    private final String gender;

    public StarWarsDTO(String name, String height, String birthYear, String gender)
    {
        this.name = name;
        this.height = height;
        this.birth_year = birthYear;
        this.gender = gender;
    }

    @Override
    public String toString()
    {
        return "StarWarsDTO{" + "name=" + name + ", height=" + height + ", birthYear=" + birth_year + ", gender=" + gender + '}';
    }

    
}
