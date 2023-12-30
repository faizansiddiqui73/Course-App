package com.springboot.springrest.dao;

import com.springboot.springrest.entities.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseDao extends JpaRepository<Course, Long>  {
    //course is entity , Long is type
}
