package com.example.mewatlasbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:8005"})
public class CatController {

    @Autowired
    private CatService catService;

    //GET ROUTES

    @GetMapping("/Cats")
    public List<Cat> getAllCats() {
        return catService.getCats();
    }

    @GetMapping("/Users")
    public List<User> getAllUsers() {
        return catService.getUsers();
    }

    @GetMapping("/Users/{username}/{password}")
    public User getUser(@PathVariable String username, @PathVariable String password) {
        return catService.getUser(username, password);
    }

    //POST ROUTES

    @PostMapping("/Cats/introduce")
    public Cat addCat(@RequestBody Cat cat) {
        return catService.add(cat);
    }

    @PostMapping("/Users/introduce")
    public User addUser(@RequestBody User user) {
        return catService.addUser(user);
    }
}
