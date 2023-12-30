package com.springboot.springrest.services;

import com.springboot.springrest.entities.Course;

import java.util.List;
import java.util.Optional;

public interface CourseService {
    //any method
    //we wont't able to give body due it is interface

    public List<Course> getCourses();
    //loose coupling -- in future any change aye to implemantation class mein change kr do jisse controller class mein kuch na change krna pade bus.
    //look for the child class body;

    public Optional<Course> getCourse(long courseId);

    public Course addCourse(Course course);

    public Course updateCourse(Course course);

   public void deleteCourse(long courseId);
    //run time polymorphism
}
