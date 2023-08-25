package com.acl.Todolist.Model;

import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;



@Entity
@Table(name = "Tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "title", length = 30, nullable = false)
    private String title;
    @Column(name = "description", length =100 , nullable = false)
    private String description;


    public Task() {
    }


    public Task(Long id, String title, String description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
