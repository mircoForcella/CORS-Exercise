package co.develhope.corsExample.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@CrossOrigin(origins = {"http://localhost:5500"})
public class HelloController {


    @GetMapping("/custom")
    public String getHello(){
        return "react endpoint reacted to button";
    }


}
