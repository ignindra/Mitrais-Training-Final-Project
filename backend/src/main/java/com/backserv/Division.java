package com.backserv;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Division {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    private String divisionname;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDivisionname() {
        return divisionname;
    }

    public void setDivisionname(String divisionname) {
        this.divisionname = divisionname;
    }
}