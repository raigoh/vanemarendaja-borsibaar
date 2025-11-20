package com.borsibaar.controller;

import com.borsibaar.dto.OrganizationRequestDto;
import com.borsibaar.dto.OrganizationResponseDto;
import com.borsibaar.service.OrganizationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/organizations")
@RequiredArgsConstructor
public class OrganizationController {

    private final OrganizationService organizationService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public OrganizationResponseDto create(@RequestBody @Valid OrganizationRequestDto request) {
        return organizationService.create(request);
    }

    @GetMapping("/{id}")
    public OrganizationResponseDto get(@PathVariable Long id) {
        return organizationService.getById(id);
    }

    @GetMapping
    public List<OrganizationResponseDto> getAll() {
        return organizationService.getAll();
    }

    @PutMapping("/{id}")
    public OrganizationResponseDto update(@PathVariable Long id, @RequestBody @Valid OrganizationRequestDto request) {
        System.out.println(request);
        return organizationService.update(id, request);
    }

}
