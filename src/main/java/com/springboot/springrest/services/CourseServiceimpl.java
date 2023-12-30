package com.springboot.springrest.services;

import com.springboot.springrest.dao.CourseDao;
import com.springboot.springrest.entities.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service  // this will tell the spring this is the service
public class CourseServiceimpl implements CourseService{
    @Autowired  // this will create the object of implementation class //dependency injection
    private CourseDao courseDao;
//    List<Course> list;
//    private Consumer<Course> courseConsumer;

//    public  CourseServiceimpl(){
//        list = new ArrayList<>();
//        list.add(new Course(145,"Java Core Course","this course contains basic of java"));
//        list.add(new Course(4343,"spring boot course","creating rest api"));
//   }
    @Override
    public List<Course> getCourses() {
//        return list;
        return courseDao.findAll();
    }

    @Override
    public Optional<Course> getCourse(long courseId) {
//        Course c = null;
//        for(Course course:list){
//            if(course.getId()==courseId){
//                c = course;
//                break;
//            }
//        }
        return courseDao.findById(courseId);
    }
    @Override
    public Course addCourse(Course course) {
//        list.add(course);
        courseDao.save(course);
        return course;
    }

    @Override
    public Course updateCourse(Course course) {
//        list.forEach(e-> {
//            if(e.getId() == course.getId()){
//                //now setter will be use
//                e.setTitle(course.getTitle());
//                e.setDescription((course.getDescription()));
//            }
//        });
        courseDao.save(course);
        return course;
    }


//    public void deleteCourse(long courseId) {
//        list = this.list.stream().filter(e->e.getId()!=courseId).collect(Collectors.toList());
//    }
    @Override
    public void deleteCourse(long courseId) {
//        for(Course course:list){
//            if(course.getId() == courseId) {
//                list.remove(course);
//                break;
//            }
//        }
        //load the entity
        Course entity = courseDao.getOne(courseId);
        courseDao.delete(entity);
    }
}


