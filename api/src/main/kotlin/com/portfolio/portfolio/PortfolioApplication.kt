package com.portfolio.portfolio

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.RequestParam

@SpringBootApplication
class PortfolioApplication

fun main(args: Array<String>) {
	runApplication<PortfolioApplication>(*args)
}

@CrossOrigin(origins = ["http://localhost:3000"])

@RestController
class MessageController(val jdbcTemplate: JdbcTemplate) {

	@GetMapping("/data")
	fun getAllMessages(): ResponseEntity<List<String>> {
		val result = jdbcTemplate.queryForList("SELECT text FROM message", String::class.java)
		return if (result.isNotEmpty()) {
			ResponseEntity.ok(result)
		} else {
			ResponseEntity.notFound().build()
		}
	}

	@GetMapping("/about")
	fun getAbout(): ResponseEntity<List<String>> {
		val result = jdbcTemplate.queryForList("SELECT about FROM message", String::class.java)
		return if (result.isNotEmpty()) {
			ResponseEntity.ok(result)
		} else {
			ResponseEntity.notFound().build()
		}
	}

	@GetMapping("/project")
	fun getProject(): ResponseEntity<List<String>> {
		val result = jdbcTemplate.queryForList("SELECT project FROM message", String::class.java)
		return if (result.isNotEmpty()) {
			ResponseEntity.ok(result)
		} else {
			ResponseEntity.notFound().build()
		}
	}

	@GetMapping("/hello")
	fun hello(): String {
		return "hello"
	}
}
