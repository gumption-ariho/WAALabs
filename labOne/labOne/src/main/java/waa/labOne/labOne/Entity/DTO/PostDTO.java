package waa.labOne.labOne.Entity.DTO;

import lombok.Data;

@Data
public class PostDTO {
    private long id;
    private String title;
    private String content;
    private String author;
}
