package com.acl.Todolist.Repository;

import com.acl.Todolist.Model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends JpaRepository<Task , Long> {

}
