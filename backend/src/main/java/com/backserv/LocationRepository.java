package com.backserv;

import org.springframework.data.repository.CrudRepository;

import com.backserv.Location;

public interface LocationRepository extends CrudRepository<Location, Integer> {

}