package day1;

import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;

import org.junit.Test;

public class Day1Test {

	@Test
	public void firstPart1122() throws Exception {
		assertThat(Day1.part1("1122"), equalTo(3));
	}
	
	@Test
	public void firstPart1111() throws Exception {
		assertThat(Day1.part1("1111"), equalTo(4));
	}
	
	@Test
	public void firstPart1234() throws Exception {
		assertThat(Day1.part1("1234"), equalTo(0));
	}
	
	@Test
	public void firstPart91212129() throws Exception {
		assertThat(Day1.part1("91212129"), equalTo(9));
	}
	
	@Test
	public void secondPart1212() throws Exception {
		assertThat(Day1.part2("1212"), equalTo(6));
	}
	
	@Test
	public void secondPart1221() throws Exception {
		assertThat(Day1.part2("1221"), equalTo(0));
	}
	
	@Test
	public void secondPart123425() throws Exception {
		assertThat(Day1.part2("123425"), equalTo(4));
	}
	
	@Test
	public void secondPart123123() throws Exception {
		assertThat(Day1.part2("123123"), equalTo(12));
	}
	
	@Test
	public void secondPart12131415() throws Exception {
		assertThat(Day1.part2("12131415"), equalTo(4));
	}
}
