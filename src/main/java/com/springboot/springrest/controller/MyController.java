package com.springboot.springrest.controller;

import com.springboot.springrest.entities.Course;
import com.springboot.springrest.services.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class MyController {

    //caliing the service need to call the service
    @Autowired // this will create the object of implementation class //dependency injection
    private CourseService courseService;

    @GetMapping("/")
    public String getServer() {
        return "Hello from spring server";
    }

    //get Course
    //IN MVC we write request mapping
    //@RequestMapping(path = "/courses", method = RequestMethod.GET)
    @GetMapping("/courses")
    public List<Course> getCourses() { // for storing the list of courses
        return this.courseService.getCourses();
        //this will run time polymorphism
    }
    @GetMapping("/courses/{courseId}")
    public Optional<Course> getCourse(@PathVariable String courseId) {
        return this.courseService.getCourse(Long.parseLong(courseId));
        //this will run time polymorphism
    }

    @PostMapping(value = "/courses", consumes = "application/json")
    public Course addCourse(@RequestBody Course course) {
        return this.courseService.addCourse(course);
    }

    @PutMapping("/courses")
    public Course updateCourse(@RequestBody Course course){
        return this.courseService.updateCourse(course);
    }

    @DeleteMapping("courses/{courseId}")
    public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId){
        try{
            this.courseService.deleteCourse(Long.parseLong(courseId));
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
